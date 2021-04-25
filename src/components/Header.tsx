import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import AsyncStorage from '@react-native-async-storage/async-storage'

import userImg from '../assets/gustavo.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

const Header: React.FC = () => {
  const [username, setUsername] = useState<string>()

  useEffect(() => {
    const loadStorageUsername = async (): Promise<void> => {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUsername(user || '')
    }

    loadStorageUsername()
  }, [username])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá, </Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={userImg} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight()
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  username: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40
  }
})

export default Header
