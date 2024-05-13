import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.logo}>My Todo List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: Colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 30,
        paddingTop: 35,
        paddingBottom: 15
    },
    logo: {
        color: Colors.white,
        fontSize: 24,
        padding: 9,
        fontWeight: 'bold',
        fontFamily: 'Shantells300'
    }
})

export default Header