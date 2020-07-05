import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Button from '../components/Button'
import Input from '../components/Input'

import { useSelector, useDispatch } from 'react-redux'
import { setSettingsData } from '../actions'

export default function Settings({ navigation }) {
  const [radius, setRadius] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const dispatch = useDispatch()
  const { settings } = useSelector(({ settings }) => ({ settings }))

  useEffect(() => {
    console.log('settings:', settings)
    if (settings?.data) {
      setRadius(settings.data.radius)
      setLatitude(settings.data.latitude)
      setLongitude(settings.data.longitude)
    }
  }, [settings])

  const saveSettings = async (value) => {
    try {
      await AsyncStorage.setItem('settingsData', JSON.stringify(value))
      dispatch(setSettingsData(value))
      navigation.goBack(null)
    } catch (error) {
      console.log('saveSettings error:', error)
    }
  }

  const onSave = () => {
    if (radius && latitude && longitude) {
      let data = {
        radius,
        latitude,
        longitude,
      }
      saveSettings(data)
    } else {
      alert('All fields are required.')
    }
  }

  return (
    <ScrollView
      style={{ backgroundColor: '#fff' }}
      contentContainerStyle={styles.container}
    >
      <SectionLabel text="Set clock in range" />
      <Input
        label="Range in KM"
        placeholder="5"
        value={radius}
        onChangeText={(value) => {
          setRadius(value)
        }}
        maxLength={3}
      />

      <SectionLabel text="Set office location" />
      <Input
        label="Latitude"
        placeholder="36.94387897"
        value={latitude}
        onChangeText={(value) => {
          setLatitude(value)
        }}
      />
      <Input
        label="Longitude"
        placeholder="31.9839897"
        value={longitude}
        onChangeText={(value) => {
          setLongitude(value)
        }}
      />

      <Button
        text="SAVE"
        onPress={() => {
          onSave()
        }}
      />
    </ScrollView>
  )
}

const SectionLabel = ({ text }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionLabel}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  sectionContainer: {
    width: '100%',
    paddingHorizontal: 15,
  },
  sectionLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
})
