import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
        />
        <Button 
          title='Valider'
        />
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
  }
});
