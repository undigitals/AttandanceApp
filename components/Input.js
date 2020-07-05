import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'

const Input = ({ label, ...rest }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCapitalize="none"
        secureTextEntry={false}
        keyboardType="numeric"
        returnKeyType="done"
        underlineColorAndroid="transparent"
        allowFontScaling={false}
        ellipsizeMode="head"
        placeholderTextColor='rgba(0,0,0,.2)'
        style={[
          styles.inputText,
        ]}
        {...rest}
      />
    </View>
  )
}

export default Input


const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 15
  },
  label: {
    fontSize: 16,
    paddingBottom: 5,
  },
  inputText: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    width: '100%',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 8
  }
})