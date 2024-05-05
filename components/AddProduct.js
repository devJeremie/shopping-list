import React, {useState} from "react";
import { 
    StyleSheet, View, 
    TextInput, Button, 
  } from 'react-native';

const AddProduct = ({submitHandler}) => {

    const [product, setProduct] = useState("");

    const inputHandler = (val) => { // input handler for product name text field
        setProduct(val)
      }
    //permet de vider le state apres ajout d'un new product
    const handleClick = () => {
        submitHandler(product);
        setProduct("")
    }
    //permet de vider l'input aprés une erreur de saisie
    const handleCancelledClick = () => {
        setProduct("") // réinitialise la valeur du state à une chaîne vide
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput}
            placeholder='Nouveau produit'
            onChangeText={inputHandler} //permet de modifier la valeur de départ que vous avez mis dans le satet('' par défaut)
            value={product}
            />
            <View style={styles.btnContainer}>
                <View style={styles.btnBlue}>
                    <Button 
                        title='Valider'
                        onPress={handleClick}
                    />
                </View>
                <View style={styles.btnTomato}>
                    <Button 
                        title='Annuler'
                        onPress={handleCancelledClick}
                        color='#ff6347'
                    />
                </View>
            </View>
            
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        // flexDirection: "row",
        // marginBottom: 9
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        // borderColor: "gray",
        // borderWidth: 1,
        // padding: 5,
        // paddingLeft: 9,
        // fontSize: 18,
        // flexGrow: 1,
        height: 40,
        width: '60%',
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize: 18,
    }, 
    btnContainer: {
        flexDirection: 'row', // modifier le flexDirection en 'column'
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnBlue: {
        marginHorizontal: 10,
        width: '45%'
    },
    btnTomato: {
        marginHorizontal: 10,
        width: '45%'
    },
})

export default AddProduct; 