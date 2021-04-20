import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet,TouchableHighlight, Image } from 'react-native'
import colors from '../../styles/colors';
import wateringImg from '../assets/watering.png'
import {Button} from '../components/Button'


export default function Welcome(){
    const [visible, setVisible]= useState(false);

    function handleVisibility(){
        setVisible(true)
    }

  return(
    <SafeAreaView style={style.container}>
      <Text style={style.title}> 
          Gerencie {'\n'}
          suas plantas {'\n'}
          de forma fácil
      </Text>
        
           <Image source={wateringImg} style={style.image} /> 
        
        
      

      <Text style={style.subtitle}> 
          Não esqueça mais de regar suas plantas.
          nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <Button title=">"/>
      
      
    </SafeAreaView>
    
  )
}

const style=StyleSheet.create({
       container: {
           flex:1,
           alignItems:'center',
           justifyContent: 'space-between'
       },
       title: {
           fontSize:32,
           fontWeight: 'bold',
           textAlign:'center',
           color: colors.heading,
           marginTop:38
       },
       subtitle: {
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:20,
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56

    },
    image: {
        height: 292,
        width: 284

    },
    buttonText: {
        color:colors.white,
        fontSize:24
        

    }
    }
)
