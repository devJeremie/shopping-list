import { 
  Pressable, StyleSheet, 
  Text, TouchableOpacity, 
  View 
} from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

const ButtonComponent = ({onPressHandler, style, children}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPressHandler}
    >
      <View style={{...styles.btn, ...style}}>
        <Text style={styles.btnText}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.gray,
        padding: 9,
    },
    btnText: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 17,
    }
})

export default ButtonComponent;