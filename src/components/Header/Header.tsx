import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}> 
        Explorer</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image source={require('../../assets/nasa.png')} style={styles.image} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
flexDirection:'row',
justifyContent:'center',
paddingHorizontal:16,
marginTop:3,
//borderWidth:1,
//borderColor:'te',
alignItems:'center'
},
  leftContainer:{
    flex:1,
    alignItems:'flex-start'
  },
  title:{
    fontSize:24,
    color:'white',
  },
  rightContainer:{
    flex:1,
    alignItems:'flex-end'
  },
  image:{
    width:60,
    height:60,
    }

})

export default Header
