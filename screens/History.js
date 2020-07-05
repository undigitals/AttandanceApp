import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { HistoryList } from '../components/CurrentLocation'

export default function Settings({ navigation }) {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const getHistory = async () => {
      let prevAttendanceHistory = await AsyncStorage.getItem(
        'attendanceHistory'
      )
      if (prevAttendanceHistory) {
        prevAttendanceHistory = JSON.parse(prevAttendanceHistory)
        setHistory(prevAttendanceHistory)
      } else {
        prevAttendanceHistory = []
        setHistory(prevAttendanceHistory)
      }

      console.log(prevAttendanceHistory)
    }

    getHistory()
  }, [])

  return (
    <ScrollView
      style={{ backgroundColor: '#fff' }}
      contentContainerStyle={styles.container}
    >
      {history.length > 0 &&
        history.map((item) => {
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
})
