import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import styles from './ScreenBtnStyles'

const ScreenBtn = ({iconUrl,handlePress,dimension}) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={handlePress}>
        <Image style={styles.btnImg(dimension)} source={iconUrl} resizeMode='cover' />
    </TouchableOpacity>
  )
}

export default ScreenBtn;