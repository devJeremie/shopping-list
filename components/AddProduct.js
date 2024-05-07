import React, {useState} from "react";
import { 
    StyleSheet, View, 
    TextInput, 
  } from 'react-native';
import ButtonComponent from "./ButtonComponent";
import Colors from '../constants/colors'

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
                <ButtonComponent 
                    onPressHandler={handleClick}
                    style={styles.btnBlue}
                >
                    Valider
                </ButtonComponent>
                <ButtonComponent 
                    onPressHandler={handleCancelledClick}
                    btnTitle= 'Annuler'
                    style={styles.btnTomato}
                >
                    Annuler
                </ButtonComponent>
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
        marginBottom: 20
    },
    textInput: {
        // borderColor: "gray",
        // borderWidth: 1,
        // padding: 5,
        // paddingLeft: 9,
        // fontSize: 18,
        // flexGrow: 1,
        height: 40,
        width: '100%',
        borderColor: Colors.gray,
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 18,
    }, 
    btnContainer: {
        flexDirection: 'row', // modifier le flexDirection en 'column'
        justifyContent: 'space-between',
        marginBottom: 20
    },
    btnBlue: {
        marginHorizontal: 10, 
        backgroundColor: "seagreen",
        width: 150,
        borderRadius: 6
    },
    btnTomato: {
        marginHorizontal: 10,
        backgroundColor: "tomato",
        width: 150,
        borderRadius: 6
    },
})

export default AddProduct; 