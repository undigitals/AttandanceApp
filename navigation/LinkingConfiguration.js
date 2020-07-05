import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    initialRouteName: 'Home',
    screens: {
      Home: 'home',
      Settings: 'settings',
      History: 'history',
      NotFound: '*',
    },
  },
}
