import { 
  StyleSheet, Text,
  View, TextInput,
  Button, ScrollView,
  FlatList, Alert,
} from 'react-native';
import React, { useState } from "react";

//import component
import Products from './components/Products';
import AddProduct from './components/AddProduct';

export default function App() {
  //state pour Scrollview
  const [myProducts, setMyProducts] = useState([]);

  //Méthode avec le ScrollView
  // const submitHandler = () => { //enregistre les new products dans l'array du state myproducts
  //   setMyProducts(currentMyProducts => [...currentMyProducts, product] ) //les produits existants et on les injectent dans un nouvel array
  //   setProduct('')
  // }

  //méthode avec FlatList
  const submitHandler = (product) => { //enregistre les new products dans l'array du state myproducts
    if (product.length > 1) {
      const idString = Date.now().toString(); //on crée un identifiant unique à chaque produit en utilisant la date et des caractères aléatoires et affiche ce nouveau produit et affiche la nouvelle liste des produits 
      setMyProducts(currentMyProducts => [{key: idString, name: product }, ...currentMyProducts] ) //les produits existants et on les injectent dans un nouvel array
    } else {
      Alert.alert("Désole", "Nombre de caractères insuffisant minimun 2 caractères",
                  [
                    { text: "Compris", 
                      onPress : () => console.warn("Refusé")       
                    },
                    { text: `D'accord`,
                      onPress : () => console.warn("Refusé")       
                    },
                    { text: "OK", 
                      onPress : () => console.warn("Refusé")       
                    },

                  ], 
                { cancelable: true }
              );
    }
  }
  
  const deleteProduct = (key) => {
    setMyProducts(currentMyProducts =>{
      return currentMyProducts.filter(product => product.key != key)
    })
  }

  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler} />

      <FlatList  
      //sachant que l'on part sur une Flatlist vous n'etes pas oblige de preciser 
      //le key au niveau de l'élément parent
        data={myProducts}
        //le item sera tout les éléments que vous aurez au niveau de votre tableau
        renderItem={({item}) => (
          <Products 
          name={item.name}
          idString={item.key}
          deleteProduct={deleteProduct}
          />
        )}
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
});
