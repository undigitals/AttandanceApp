import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'

const renderTime = (time) => {
  return (
    <React.Fragment>
      <Text style={styles.clockText1}>{`${time.slice(0, -2)}`}</Text>
      <Text style={styles.clockText2}>{`${time.slice(-2)}`}</Text>
    </React.Fragment>
  )
}

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString())

  useEffect(() => {
    let secondsTimer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString())
    }, 1000)
    return () => clearInterval(secondsTimer)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle}>
          {renderTime(moment().format('LTS'))}
        </View>
      </View>
    </View>
  )
}

export default Clock

let outerCircleWidth = 200
let outerCircleHeight = outerCircleWidth
let outerCircleBorderWidth = outerCircleWidth / 2

let innerCircleWidth = outerCircleWidth - 10
let innerCircleHeight = innerCircleWidth
let innerCircleBorderWidth = innerCircleWidth / 2

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  outerCircle: {
    width: outerCircleWidth,
    height: outerCircleHeight,
    borderRadius: outerCircleBorderWidth,
    borderWidth: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: innerCircleWidth,
    height: innerCircleHeight,
    borderRadius: innerCircleBorderWidth,
    borderWidth: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  clockText1: {
    fontSize: innerCircleWidth * 0.2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  clockText2: {
    fontSize: innerCircleWidth * 0.15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
