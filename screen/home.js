import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Title from '../component/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
       <Title textTitle="Quizzler"/>

       <View style={styles.bannerContainer}>
            <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/online-quiz-8304780-6665991.png?f=webp'}}
        style={styles.banner}/>
       </View>

       <TouchableOpacity 
       onPress={()=>navigation.navigate("Quiz")}
       style={styles.button}>
           <Text style={styles.fontStyle}>START</Text>
       </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

    container:{
        width:'100%',
        height:"100%",
        backgroundColor:'#c471ed',
        padding:20,
    },
    bannerContainer:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    banner:{
        width:"100%",
        height:400,
    },
    button:{
        width:"100%",
        backgroundColor:"#b100c2",
        padding:10,
        borderRadius:20,
        marginBottom:40,
    },
    fontStyle:{
        fontSize:25,
        color:"#fff",
        textAlign:"center"
    }
})