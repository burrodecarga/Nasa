import Header from './src/components/Header'
import TodayImage from '@/components/TodayImage'
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Home from './src/views/Home'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
     </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'rgba(7,26,95,255)',
    marginTop: Platform.OS === 'android' ? 30 : 0,
    flex:1
  },
})
