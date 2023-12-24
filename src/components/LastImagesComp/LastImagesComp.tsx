import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { FC, Suspense } from 'react'
import { PostImage as PostImageType, PostImages } from '@/types'
import PostImage from '../PostImage'

const LastImagesComp = ({last}) => {
  //console.log('PASADO PROPS-FC',last.length);
  //let imagenes = Object.entries(postImages).flat()
  
  return (
  
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
     <ScrollView style={styles.scroll}>
       {last.map((p:PostImageType,index:number)=><PostImage key={`p-${p.title}-${p.date}-${index}`} post={p}/>)}
     </ScrollView>
    </View>
     
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
    
      },
      scroll:{
       backgroundColor:'#efefef'
        
      },
  title:{
    color:'#ebe2e2',
    fontSize:16,
    marginBottom:18
  },
  content:{
    paddingHorizontal:24
  }
})
export default LastImagesComp