import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [arvattava, setArvattava] = useState(Math.floor(Math.random() * 100) + 1);

  const [msg, setMsg] = useState('Guess a number between 1-100');
  const [arvaus, setArvaus] = useState('');
  const [lkm, setLkm] = useState(1);

  const checkGuess = () => {

    if (arvattava == arvaus) {
      Alert.alert('You guessed the number in ' + lkm + ' guesses')
    } else if (arvattava < arvaus) {
      setMsg('Your guess ' + arvaus + ' is too high')
    } else if (arvattava > arvaus) {
      setMsg('Your guess ' + arvaus + ' is too low')
    }

    setLkm(lkm + 1);

  }

  return (
    <View style={styles.container}>
     
      <Text>{msg}</Text>
      
      <TextInput 
        keyboardType='numeric'
        placeholder='____'
        onChangeText={n => setArvaus(n)}
      />

      <Button 
        title='Make a guess'
        onPress={checkGuess}
      />

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


