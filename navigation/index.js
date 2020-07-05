import * as React from 'react'
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LinkingConfiguration from './LinkingConfiguration'

import Home from '../screens/Home'
import Settings from '../screens/Settings'
import History from '../screens/History'
import NotFound from '../screens/NotFound'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator()

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          headerRight: props => {
            return (
              <TouchableOpacity onPress={() => {
                navigation.navigate('Settings')
              }}
                style={{ paddingHorizontal: 15 }}
              >
                <Ionicons name="ios-cog" size={30} color="#2e78b7" />
              </TouchableOpacity>

            )
          },
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: 'Settings', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{ headerTitle: 'History', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFound}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  )
}
