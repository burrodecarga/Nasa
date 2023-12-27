import { View, StyleSheet, Platform, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import fetchApi from '../../utils/fetch'
import { PostImage, PostImages } from '@/types'
import TodayImage from '../../components/TodayImage'
import { format, sub } from 'date-fns'
import LastImagesComp from '../../components/LastImagesComp'

const pt = Platform.OS === 'android' ? 0 : 0

const Home = () => {
  const [todayImage, setTodayImage] = useState<PostImage>({})
  const [lastImages, setLastImages] = useState<PostImages>()

  useEffect(() => {
    const loadlastImage = async () => {
      try {
        const date = new Date()
        const newDate = format(date, 'yyyy-MM-dd')
        const prevDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd')
        const loadlastImageResponse = await fetchApi(
          `&start_date=${prevDate}&end_date=${newDate}`
        )
        setLastImages(loadlastImageResponse)
      } catch (error) {
        alert(error)
        
      }
    }
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchApi()
        setTodayImage(todayImageResponse)
      } catch (error) {
        console.log(error)
        setTodayImage({})
      }
    }

    
    loadlastImage().catch(null)
    loadTodayImage().catch(null)
  }, [])
  
  //console.clear()
  //console.log('SETEADO LASTDIAS::::',lastImages);
  return (
    <View style={styles.container}>
      <Header />
      <TodayImage {...todayImage} />
      <LastImagesComp {...lastImages}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(7,26,95,255)',
  },
})
export default Home
