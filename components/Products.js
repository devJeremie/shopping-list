import React from "react";
import { 
    StyleSheet, Text,
    View, 
  } from 'react-native';
 
  const Products = ({name}) => {
    return (
        <View style={styles.productItems} >
            <Text style={styles.item}>{name}</Text>
        </View>
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
    } //permet de mettre une marge sur les deux cotés en meme temp n'existe pas en css classique
  });

  export default Products;