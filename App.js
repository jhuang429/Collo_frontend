import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewCollectionForm from './Components/NewCollectionForm';

export default function App() {

  const [user, setUser] = useState({})

  useState(()=> {
    fetch("http://localhost:3000/users").then(resp=>resp.json()).then(data=>setUser(data))},[]
  )



  return (
    <View style={styles.container}>
      <NewCollectionForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
