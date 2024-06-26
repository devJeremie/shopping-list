import React from "react";
import { 
    StyleSheet, Text,
    View, TouchableOpacity, 
    TouchableHighlight, Pressable,
  } from 'react-native';
  import Colors from '../constants/colors'
  import {FontAwesome} from '@expo/vector-icons';
 
  const Products = ({name, deleteProduct, idString}) => {
    return (
      // <TouchableOpacity 
      //   activeOpacity={0.2}
      //   onPress={()=> console.log('cliqué')}
      // >
      // <TouchableHighlight
      //   activeOpacity={0.2}
      //   onPress={()=> console.log('cliqué')}
      //   underlayColor={"pink"}
      // >
      <Pressable
      onPress={()=> deleteProduct(idString)}
      // style={({pressed}) => [
      //   {
      //     backgroundColor: pressed ? "#9c27b0" : "#673ab7"
      //   }
      // ]}
      android_ripple={{color: '#9c27b0'}}
      >
        <View style={styles.productItems} >
          <FontAwesome 
            name='remove'
            size={30}
            color={Colors.white}
          />
          <Text style={styles.item}>{name}</Text>
        </View>
      </Pressable>
      // </TouchableHighlight>
      // </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    productItems: {
      marginTop: 10,
      flexDirection:'row',
      padding: 5,
      alignItems:"center",
    },
    item: {
      backgroundColor: Colors.SkyBlue,
      padding: 10,
      fontSize: 17,
      // marginVertical: 6,
      borderRadius: 6,
      width: "80%",
      marginLeft: 20
      
    } //permet de mettre une marge sur les deux cotés en meme temp n'existe pas en css classique
  });

  export default Products;