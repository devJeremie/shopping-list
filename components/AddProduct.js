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

    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput}
            placeholder='Nouveau produit'
            onChangeText={inputHandler} //permet de modifier la valeur de départ que vous avez mis dans le satet('' par défaut)
            value={product}
            />
            <Button 
            title='Valider'
            onPress={handleClick}
            />
      </View>
    )
}

const styles = StyleSheet.create({
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
})

export default AddProduct; 