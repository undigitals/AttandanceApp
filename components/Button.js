import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'

const Button = ({ text, style, loading, containerStyle, ...rest }) => {
  return (
    <View style={[styles.buttonContainer, containerStyle]}>
      <TouchableOpacity style={[styles.button, style]} {...rest}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#216ef6',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
})
