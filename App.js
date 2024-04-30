import { 
  StyleSheet, Text,
  View, TextInput, Button } from 'react-native';
import React, { useState } from "react";

export default function App() {

  const [product, setProduct] = useState("");
  const [myProducts, setMyProducts] = useState([]);

  const inputHandler = (val) => { // input handler for product name text field
    setProduct(val)
  }

  const submitHandler = () => { //enregistre les new products dans l'array du state myproducts
    setMyProducts(currentMyProducts => [...currentMyProducts, product] ) //les produits existants et on les injectent dans un nouvel array
    setProduct('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder='Nouveau produit'
          onChangeText={inputHandler} //permet de modifier la valeur de départ que vous avez mis dans le satet('' par défaut)
          value={product}
        />
        <Button 
          title='Valider'
          onPress={submitHandler}
        />
      </View>
        <View style={styles.productItems}>
          {
            myProducts.map((product, index) => {
              return(
                <Text key={index} style={styles.item} >
                  {product}
                </Text>
              )
            })
          }
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding:40,
   paddingTop: 60
  },
  inputContainer: {
    flexDirection: "row",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    flexGrow: 1,
  }, 
  productItems: {
    marginTop: 10,
  },
  item: {
    backgroundColor: "#ffb6c1",
    padding: 20,
    fontSize: 17,
    marginVertical: 6,
  } //permet de mettre une marge sur les deux cotés en meme temp n'existe pas en css classique
});
