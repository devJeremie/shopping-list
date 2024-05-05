import React from "react";
import { 
    StyleSheet, Text,
    View, TouchableOpacity, 
    TouchableHighlight, Pressable,
  } from 'react-native';
 
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
    },
    item: {
      backgroundColor: "#87cefa",
      padding: 20,
      fontSize: 17,
      marginVertical: 6,
      borderRadius: 6
    } //permet de mettre une marge sur les deux cotés en meme temp n'existe pas en css classique
  });

  export default Products;