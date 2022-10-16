import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ImageHeader } from './assets'
import { Form } from './component'

const App = () => {

  return (
    <View style={ styles.screen }>
      <ImageBackground source={ ImageHeader } style={ styles.head }/>
      <Form/>
      <StatusBar style='auto'/>
    </View>
  )
}

export default App

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  head: {
    widht: windowWidth,
    height: windowHeight * 0.5,
  },
})