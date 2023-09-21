import { StyleSheet, Text, View , Image,TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../component/title';

const Result = ({navigation,route}) => {
   
  const {score} = route.params;

  const resultBanner = score>30 ? "https://cdni.iconscout.com/illustration/premium/thumb/champion-in-the-class-4375002-3630872.png":
  "https://png.pngtree.com/png-clipart/20191122/original/pngtree-f-grade-vector-fail-exam-mark-isolated-flat-cartoon-illustration-png-image_5163512.jpg";
  
  return (
    <View style={{backgroundColor:"#fff",height:"100%",}}>
      <Title textTitle="RESULT"/>

      <View style={{justifyContent:"center",alignItems:"center"}}>
           <Text style={{fontSize:40,color:"#111",fontWeight:500}}>{score}</Text>
       </View>

      <View style={styles.bannerContainer}>
            <Image source={{uri:resultBanner}}
        style={styles.banner}/>
       </View>

     <View style={{marginHorizontal:20}}>
     <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
           <Text style={styles.fontStyles}>Go To Home</Text>
       </TouchableOpacity>
     </View>


    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  
  banner:{
    width:'100%',
    height:400,
  },
  bannerContainer:{
    flex:1,
    justifyContent:"center",
  },
  button:{
    width:'100%',
    backgroundColor:"#b100c2",
    padding:20,
    borderRadius:20,
    marginBottom:40,
  },
  fontStyles:{
     fontSize:20,
     color:'#fff',
     textAlign:"center",
    
  }
})