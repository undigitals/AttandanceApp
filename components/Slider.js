import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native'
import Slider from '@react-native-community/slider'

const SliderCom = () => {
  const [minKm, setMinKm] = useState(5)

  // return (
  //   <TextInput
  //     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
  //     placeholder={'Username'}
  //     onChangeText={(val) => setMinKm(val)}
  //     value={minKm}
  //   />
  // )
  return (
    <Slider
      style={{ width: 200, height: 40 }}
      minimumValue={0}
      maximumValue={1}
      value={minKm}
      onValueChange={(value) => setMinKm(value)}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
    />
  )
}

export default SliderCom
