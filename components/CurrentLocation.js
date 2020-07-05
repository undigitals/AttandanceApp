import React, { useState, useEffect } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button as DefaultButton,
  RefreshControl,
} from 'react-native'
import '@expo/match-media'
import * as Location from 'expo-location'
import Constants from 'expo-constants'
import Clock from './Clock'
import Button from './Button'
import calculateGeofence from '../utils/geofence'
import getAddress from '../utils/storage'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { useMediaQuery } from 'react-responsive'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

const CurrentLocation = () => {
  const navigation = useNavigation()
  const [location, setLocation] = useState(null)
  const [isUpdatingLocation, setIsUpdatingLocatin] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [permissionStatus, setPermissionStatus] = useState(null)
  const [isInRadius, setIsInRadius] = useState(false)
  const [distanceToRadius, setDistanceToRadius] = useState(0)
  const [distanceToDestination, setDistanceToDestination] = useState(0)
  const [officeLocation, setOfficeLocation] = useState({
    latitude: 37.634616,
    longitude: 126.832663,
    radius: 5,
  })
  const [clockedIn, setClockedIn] = useState(false)
  const [previousData, setPreviousData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { settings } = useSelector(({ settings }) => ({ settings }))

  useEffect(() => {
    console.log('settings in currentl:', settings)
    if (settings?.data) {
      setOfficeLocation({
        latitude: parseFloat(settings.data.latitude),
        longitude: parseFloat(settings.data.longitude).toFixed(2),
        radius: parseInt(settings.data.radius),
      })
    }
  }, [settings])

  const updateLocation = () => {
    console.log('called')
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMsg(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      )
    } else {
      setIsUpdatingLocatin(true)
      const requestPermission = async () => {
        let { status } = await Location.requestPermissionsAsync()
        if (status !== 'granted') {
          setPermissionStatus('not-granted')
          setErrorMsg('Permission to access location was denied')
          return
        }

        setPermissionStatus('granted')
        let location = await Location.getCurrentPositionAsync({})
        setLocation(location)
        setIsUpdatingLocatin(false)
      }
      requestPermission()
    }
  }

  useEffect(() => {
    updateLocation()
  }, [])

  let latitude = location?.coords?.latitude
  let longitude = location?.coords?.longitude

  useEffect(() => {
    let result = null
    if (latitude && longitude) {
      result = calculateGeofence(
        officeLocation.latitude,
        officeLocation.longitude,
        latitude,
        longitude,
        officeLocation.radius
      )
    }
    console.log('resulttttt:', result)
    if (result) {
      setIsInRadius(result.isInRadius)
      setDistanceToRadius(result.distanceToRadius)
      setDistanceToDestination(result.distanceToDestination)
    }
  }, [latitude, longitude])

  const updateHistory = async (newHistoryItem) => {
    try {
      let prevAttendanceHistory = await AsyncStorage.getItem(
        'attendanceHistory'
      )
      if (prevAttendanceHistory) {
        prevAttendanceHistory = JSON.parse(prevAttendanceHistory)
        prevAttendanceHistory.unshift(newHistoryItem)
      } else {
        prevAttendanceHistory = []
        prevAttendanceHistory.unshift(newHistoryItem)
      }
      await AsyncStorage.setItem(
        'attendanceHistory',
        JSON.stringify(prevAttendanceHistory)
      )
      setPreviousData(prevAttendanceHistory)
      console.log(prevAttendanceHistory)
    } catch (error) {
      console.log('saveSettings error:', error)
    }
  }

  useEffect(async () => {
    let prevAttendanceHistory = await AsyncStorage.getItem('attendanceHistory')
    if (prevAttendanceHistory) {
      prevAttendanceHistory = JSON.parse(prevAttendanceHistory)
      if (prevAttendanceHistory.length > 0) {
        if (prevAttendanceHistory[0].type === 'clockIn') {
          setClockedIn(true)
        }
      }
      setPreviousData(prevAttendanceHistory)
    } else {
      setPreviousData([])
    }
  }, [])

  const handleClockAction = (type) => {
    setIsLoading(true)
    let currentTime = moment().format('LTS')
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1IjoiaWFtYXBhcms4OSIsImEiOiJjanlpZmF5c3AwOXJzM2NxaDQzNWhiaDRmIn0.C-e2EpmyDtsqPbu9FjJz5Q`
    )
      .then((data) => data.json())
      .then((data) => {
        setIsLoading(false)
        if (data) {
          if (data?.features[0]?.place_name) {
            let newHistoryItem = {
              clockedInTime: currentTime,
              timestamp: Date.now(),
              placeName: data?.features[0]?.place_name,
              type,
            }

            setClockedIn(type === 'clockIn' ? true : false)
            updateHistory(newHistoryItem)
          }
        } else {
          console.log('no data:', data)
        }
      })
      .catch((error) => {
        setIsLoading(false)
        console.log('getAddress error:', error)
      })
  }

  const renderButton = () => {
    if (isInRadius && clockedIn) {
      return (
        <Button
          text="Clock out"
          style={{ backgroundColor: 'orange' }}
          loading={isLoading}
          onPress={() => {
            handleClockAction('clockOut')
          }}
        />
      )
    } else if (isInRadius === true && clockedIn !== true) {
      return (
        <Button
          text="Clock in"
          loading={isLoading}
          onPress={() => {
            handleClockAction('clockIn')
          }}
        />
      )
    } else {
      return (
        <Button
          disabled={true}
          text="Out of range"
          loading={isLoading}
          containerStyle={{ opacity: 0.4 }}
        />
      )
    }
  }

  const renderHistory = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 5,
            textAlign: 'center',
          }}
        >
          Recently clocking history
        </Text>
        {previousData.length > 0 &&
          previousData.slice(0, 3).map((item) => {
            const { clockedInTime, timestamp, placeName, type } = item
            return (
              <HistoryList
                clockedInTime={clockedInTime}
                timestamp={clockedInTime}
                placeName={placeName}
                type={type}
              />
            )
          })}
        {previousData.length > 3 && (
          <TouchableOpacity onPress={() => navigation.navigate('History')}>
            <Text
              numberOfLines={3}
              style={{ fontWeight: 'bold', color: '#216ef6' }}
            >
              ...More
            </Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 900px)',
  })

  const isLaptopOrTab = useMediaQuery({
    query: '(max-device-width: 900px)',
  })

  // console.log('des', distanceToDestination)
  return (
    <>
      {isDesktopOrLaptop && (
        <ScrollView
          style={{ backgroundColor: '#fff', flex: 1 }}
          contentContainerStyle={[styles.container, { flexDirection: 'row' }]}
          refreshControl={
            <RefreshControl
              refreshing={isUpdatingLocation}
              onRefresh={updateLocation}
            />
          }
        >
          <View
            style={{
              width: '33%',
              borderTopWidth: 2,
              borderBottomWidth: 2,
              borderColor: '#ddd',
              padding: 6,
            }}
          >
            {/* {isUpdatingLocation && <Text>isUpdating</Text>} */}
            {errorMsg && (
              <Text style={{ color: 'red' }}>{JSON.stringify(errorMsg)}</Text>
            )}

            <Text style={{ alignSelf: 'center', fontSize: 18 }}>
              GPS is {permissionStatus === 'granted' ? 'enabled' : 'disabled'}
            </Text>

            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <View>
                <Text>Current position:</Text>
                <Text>Latitude: {latitude}</Text>
                <Text>Longitude: {longitude}</Text>
              </View>

              <View>
                {isInRadius && <Text>You are in range!</Text>}
                {!isInRadius && (
                  <Text>Distance to office radius: {distanceToRadius} KM</Text>
                )}
                {/* <Text>Distance to office: {distanceToDestination} KM</Text> */}
              </View>
            </View>
          </View>

          <View style={{ width: '33%' }}>
            <Clock />
            {renderButton()}
          </View>
          <View style={{ width: '33%' }}>{renderHistory()}</View>
        </ScrollView>
      )}

      {/* for tabloid and mobiles */}
      {isLaptopOrTab && (
        <ScrollView
          style={{ backgroundColor: '#fff', flex: 1 }}
          contentContainerStyle={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={isUpdatingLocation}
              onRefresh={updateLocation}
            />
          }
        >
          <View
            style={{
              borderTopWidth: 2,
              borderBottomWidth: 2,
              borderColor: '#ddd',
              padding: 6,
              marginBottom: 15,
            }}
          >
            {/* {isUpdatingLocation && <Text>isUpdating</Text>} */}
            {errorMsg && (
              <Text style={{ color: 'red' }}>{JSON.stringify(errorMsg)}</Text>
            )}

            <Text style={{ alignSelf: 'center', fontSize: 18 }}>
              GPS is {permissionStatus === 'granted' ? 'enabled' : 'disabled'}
            </Text>

            <View>
              <Text>Current position:</Text>
              <Text>Latitude: {latitude}</Text>
              <Text>Longitude: {longitude}</Text>
            </View>

            <View>
              {isInRadius && <Text>You are in range!</Text>}
              {!isInRadius && (
                <Text>Distance to office range: {distanceToRadius} KM</Text>
              )}
              <Text>Distance to office: {distanceToDestination} KM</Text>
            </View>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Clock />
            {renderButton()}
          </View>
          <View>{renderHistory()}</View>
        </ScrollView>
      )}
    </>
  )
}

export default CurrentLocation

export const HistoryList = ({ clockedInTime, type, placeName, timestamp }) => (
  <View
    key={timestamp}
    style={{
      borderTopWidth: 2,
      borderColor: '#ddd',
      padding: 6,
      position: 'relative',
    }}
  >
    <Text style={{ position: 'absolute', right: 5, fontWeight: '700' }}>
      {type}
    </Text>
    <Text>{clockedInTime}</Text>
    <Text>{placeName}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    position: 'relative',
  },
  link: {
    right: 5,
    top: 5,
    // marginTop: 15,
    // paddingVertical: 15,
    position: 'absolute',
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
})
