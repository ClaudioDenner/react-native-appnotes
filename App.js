import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Note from './components/Note'
import { useState } from 'react'


export default function App() {
  
  const [addText, setAddText] = useState(false)
  const [dataStorage, setDataStorage] = useState('')

  async function getStorage(){
    try {
      const value = await AsyncStorage.getItem('notes');
      if (value !== null) {
        setDataStorage(value)
      }
    } catch (error) {
      console.log("..."+error)
    }
  }
  getStorage()

  function insertNote(){
    setAddText(true)
  }

  return (
    <View style={styles.container}>
      {addText ? <Note  props={{addText, setAddText, dataStorage}} /> : ''}
     
      <Text>{dataStorage}</Text>

      <Pressable style={styles.buttonSave} onPress={insertNote}>
        {addText ? '' : <Text style={styles.buttonSave.text}>Inserir Texto</Text>}
      </Pressable>


      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    
    
  },buttonSave:{
        
    width:'60%',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#44f',
    borderRadius:20,
    
    text:{
            color:'#fff',
            fontSize:20
        }
     
}
  
});
