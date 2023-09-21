import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({textTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>{textTitle}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({

    container:{
      marginVertical:30,
      justifyContent:"center",
      alignItems:"center"
    },
    fontStyle:{
      fontSize:40,
      fontWeight:"500",
      color:"#111",
      fontStyle: 'italic'
    },

})