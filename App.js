import { 
  StyleSheet, Text,
  View, TextInput,
  Button, ScrollView,
  FlatList, Alert,
  Modal, Pressable,
  Image,ImageBackground, 
} from 'react-native';
import React, { useState } from "react";
// import * as Font from 'expo-font';
import {
  useFonts,
  ShantellSans_300Light,
  ShantellSans_400Regular,
  ShantellSans_500Medium,
  ShantellSans_600SemiBold,
  ShantellSans_700Bold,
  ShantellSans_800ExtraBold,
  ShantellSans_300Light_Italic,
  ShantellSans_400Regular_Italic,
  ShantellSans_500Medium_Italic,
  ShantellSans_600SemiBold_Italic,
  ShantellSans_700Bold_Italic,
  ShantellSans_800ExtraBold_Italic,
} from '@expo-google-fonts/shantell-sans';

//import component
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import Colors from './constants/colors';
import AppLoading from 'expo-app-loading';



export default function App() {
  
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [fontsLoaded, setFontsLoaded] = useState(false); //state pour le chargement de la font
  
  const [fontsLoaded, error] = useFonts({
    Shantells300 : ShantellSans_300Light,
    ShantellSans_400Regular,
    ShantellSans_500Medium,
    ShantellSans_600SemiBold,
    ShantellSans_700Bold,
    ShantellSans_800ExtraBold,
    ShantellSans_300Light_Italic,
    ShantellSans_400Regular_Italic,
    ShantellSans_500Medium_Italic,
    ShantellSans_600SemiBold_Italic,
    ShantellSans_700Bold_Italic,
    ShantellSans_800ExtraBold_Italic,
  })

//Gestion du chargement de la font
if(!fontsLoaded) {
  return (
    <AppLoading />
  )
}


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
      setShowModal(true)
      // Alert.alert("Désole", "Nombre de caractères insuffisant minimun 2 caractères",
      //             [
      //               { text: "Compris", 
      //                 onPress : () => console.warn("Refusé")       
      //               },
      //               { text: `D'accord`,
      //                 onPress : () => console.warn("Refusé")       
      //               },
      //               { text: "OK", 
      //                 onPress : () => console.warn("Refusé")       
      //               },

      //             ], 
      //           { cancelable: true }
      //         );
    }
  }
  
  const deleteProduct = (key) => {
    setMyProducts(currentMyProducts =>{
      return currentMyProducts.filter(product => product.key != key)
    })
  }

  return (
    <ImageBackground 
      style={styles.bgImage}
      source={require('./assets/image/ciel.jpeg')}
    >
      <Header />
      <View style={styles.container}>
        <Modal
          visible={showModal}
          onRequestClose={()=>setShowModal(false)}
          animationType='slide'
          transparent
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Oups il y a une erreur!!</Text>
              </View>
              <View style={styles.modalBody}>
                <Image 
                  source={require('./assets/image/red circle_cross.png')}
                />
                <Text style={styles.modalBodyText}>Merci de noter plus d'un seul caractère</Text>
              </View>
              <View style={styles.modalFooter}>
                <Pressable 
                  style={styles.pressableBtnModal} 
                  onPress={() => setShowModal(false)}
                  >
                <Text style={styles.modalBtn}>D'accord</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding:40,
    // paddingTop: 60,
    height: '100%',//rempli le container avec l'image en background
    //width: '100%' //en mode web sinon on commente
  },
  modalContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"rgba(0,0,0,0.2) ",
  },
  modalContent: {
    backgroundColor: Colors.white,
    width: "90%",
    height: 300,
    borderRadius: 15,
    alignItems: "center",
  },
  modalHeader: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary ,
  },
  modalHeaderText: {
    color: Colors.gray,
    fontSize: 17
  },
  modalBody: {
    flex: 1,
    width: "100%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBodyText: {
    fontSize: 17,
  },
  modalFooter: {
    width: '100%',
  },
  pressableBtnModal: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: Colors.successSea,
  },
  modalBtn: {
    fontSize: 17,
    color: Colors.white,
    textAlign: 'center',
    padding: 16
  },
  bgImage: {
    flex: 1
  }
});
