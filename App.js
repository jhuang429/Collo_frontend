import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewCollectionForm from './Components/NewCollectionForm';
import CollectionCard from './Containers/CollectionCard';

export default function App() {

  const [collections, setCollections] = useState([])

  useState(()=> {
    fetch("http://localhost:3000/collections").then(resp=>resp.json()).then(data=>setCollections(data))},[]
  )



  return (
    <View style={styles.container}>
      {collections.map(coll=><CollectionCard collection={coll}/>)}
      <NewCollectionForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent:'center'
  },
});
