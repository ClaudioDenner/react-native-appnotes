import {Text, TextInput , View, Pressable ,StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react'

function Note(data) {

    //console.log()
    
    const [input, setInput] = useState('')

    async function save(){

        try {
            await AsyncStorage.setItem(
              'notes',
               data.props.dataStorage + input,
            );
            setInput('')
            alert('Dados salvos com sucesso')
            data.props.setAddText(false)
          } catch (error) {
                console.log('DEU RUIM: '+error)
          }
        
    }

    function change(){
        alert(input)
    }

    


  return (
    <View style={styles.notes}>
        <Text style={styles.label}>
            Insira um texto e para armazena-lo.
        </Text>

        <TextInput
        placeholder='...'
        style={styles.textInput}
        multiline={true}
        numberOfLines={10}
        textAlignVertical="top"
        autoFocus={true}
        value={input}
        onChangeText={setInput}
        />

    <Pressable style={styles.buttonSave} onPress={save}>
        <Text style={styles.buttonSave.text}>Salvar</Text>
    </Pressable>

        
    </View>
  )
}

export default Note


const styles = StyleSheet.create({
    notes:{
        width:'100%',
       // backgroundColor: '#ff4f',
        paddingLeft:20,
        paddingRight:20,
        top:0  
    },
    label:{
        fontSize:20,

        marginBottom:10,
        marginTop:25
    },
    textInput:{
        fontSize:25,
        borderWidth:2,
        borderRadius:20,
        marginTop:10,
        marginBottom:10,
        paddingLeft:20,
        paddingRight:20,
        height:'75%'
        
    },
    buttonSave:{
        
        width:'100%',
        alignItems: 'center',
        backgroundColor: '#44f',
        borderRadius:20,
        
        text:{
                color:'#fff',
                fontSize:20
            }
         
    }

})