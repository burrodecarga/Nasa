import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React, { FC } from 'react'
import { PostImage } from '@/types'

const TodayImage: FC<PostImage> = ({ date, url, title }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title='View'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    borderRadius: 32,
    borderWidth: 2,
    borderColor: 'white',
    height: 190,
    width: '100%',
  },
  title: {
    fontSize: 18,
    color: 'white',
    marginVertical: 10,
    fontWeight: 'bold',
    alignItems:'center'
  },
  date: {
    fontSize: 14,
    color: 'white',
    marginVertical: 4,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    
  },
})

export default TodayImage
