import React from "react";
import { 
    StyleSheet, View, 
    TextInput, Button
  } from 'react-native';

const AddProduct = () => {
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
            onPress={submitHandler}
            />
      </View>
    )
}