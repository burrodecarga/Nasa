import { View, Text, StyleSheet, Button } from 'react-native'
import React, { FC } from 'react'
import { PostImage as PostImagaType } from '@/types'

const PostImage = ({post}) => {
  //console.log('POST LRE ',post)
  const {date, title} =post  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title='View'/>     
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  backgroundColor:'rgba(18,39,113,255)',
  borderRadius:20,
  marginBottom:12,
  padding: 16,

},
title:{
  color:'#fff',
  fontSize:18,
  marginBottom:12,
  fontWeight:'bold'
},
date:{
  color:'#fff',
},
buttonContainer:{
alignItems:'flex-end'
}
})

export default PostImage