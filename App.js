import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Mike');
  const [person, setPerson] = useState({name: 'Joana', age: 20})
  const[animal, setAnimal] = useState({name: 'Chocky', type: 'Husky'});

  const clickHandler = () => {
    setName('Michel Setyawan Mulyono');
    setPerson({name: 'Bonita', age: 20});
    setAnimal({name: 'Bruno', type: 'Golden'});
  }

  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <Text>Her name is {person.name} and Her age is {person.age}</Text>
      <Text>They have animal called {animal.name} and the type is {animal.type}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  }
});
