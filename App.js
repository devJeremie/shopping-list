import { 
  StyleSheet, Text,
  View, TextInput,
  Button, ScrollView,
  FlatList,
} from 'react-native';
import React, { useState } from "react";

export default function App() {
  //state pour Scrollview
  const [product, setProduct] = useState("");
  const [myProducts, setMyProducts] = useState([]);

  const inputHandler = (val) => { // input handler for product name text field
    setProduct(val)
  }

  //Méthode avec le ScrollView
  // const submitHandler = () => { //enregistre les new products dans l'array du state myproducts
  //   setMyProducts(currentMyProducts => [...currentMyProducts, product] ) //les produits existants et on les injectent dans un nouvel array
  //   setProduct('')
  // }

  //méthode avec FlatList
  const submitHandler = () => { //enregistre les new products dans l'array du state myproducts
    const idString = Date.now().toString(); //on crée un identifiant unique à chaque produit en utilisant la date et des caractères aléatoires et affiche ce nouveau produit et affiche la nouvelle liste des produits 
    setMyProducts(currentMyProducts => [{key: idString, name: product }, ...currentMyProducts] ) //les produits existants et on les injectent dans un nouvel array
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

      <FlatList  
      //sachant que l'on part sur une Flatlist vous n'etes pas oblige de preciser 
      //le key au niveau de l'élément parent
        data={myProducts}
        //le item sera tout les éléments que vous aurez au niveau de votre tableau
        renderItem={({item}) => 
          <Text style={styles.item} >
          {item.name}
          </Text>
        }
      />
      
      {/* <ScrollView> 
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
        </ScrollView> */}
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
    marginBottom: 9
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
    backgroundColor: "#87cefa",
    padding: 20,
    fontSize: 17,
    marginVertical: 6,
  } //permet de mettre une marge sur les deux cotés en meme temp n'existe pas en css classique
});
