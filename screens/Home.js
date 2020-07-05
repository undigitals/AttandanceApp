import React, { useEffect } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Button from '../components/Button'
import CurrentLocation from '../components/CurrentLocation'
import Clock from '../components/Clock'

import { useSelector, useDispatch } from 'react-redux'
import { setSettingsData } from '../actions'

export default function Home({ navigation }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const getSettings = async () => {
      try {
        let settingsData = await AsyncStorage.getItem('settingsData')
        if (settingsData !== null) {
          settingsData = JSON.parse(settingsData)
        } else {
          settingsData = null
        }
        console.log('settingsData', settingsData)
        dispatch(setSettingsData(settingsData))
      } catch (error) {
        console.log('saveSettings error:', error)
      }
    }

    getSettings()
  }, [])

  return (
    <>
      <CurrentLocation />
    </>
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
})
