import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonComponent = (props) => {
  return (
    <View style={styles.btn}>
      <Text style={styles.btnText}>{props.btnTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'grey',
        padding: 9,
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
    }
})

export default ButtonComponent;