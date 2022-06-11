import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import yelp from '../api/yelp';

export default function ResultsShowScreen({ route}) {
  const [result, setResult] = useState(null);
  const { id} = route.params;
  

  const getResult = async(id) => {
   const res =  await yelp.get(`/${id}`);
    setResult(res.data)
  };


  useEffect(() => {
    getResult(id);
  }, [])
  return (
    <View style={styles.container}>
    { result && ( 
      <>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList 
      showsVerticalScrollIndicator={false}
      data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({item}) => {
       return (
   
         <Image style={styles.image} source={{uri: item}} />

         )
      }}
     />
     </>
     )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
     alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop:15
  },
  image: {
    marginTop:20,
    height: 200,
    width:300
  }
})