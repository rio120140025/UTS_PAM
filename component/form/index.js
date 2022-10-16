import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { MyWeb } from '../index'

const Form = () => {
    const [text, onChangeText] = React.useState(null);
  return (
    <View style={ styles.constructor }>
      <Text style={{ textAlign: 'center',fontWeight: 'bold',fontSize: 30, marginTop: 0, color: '#00ABB3' }}>Web Viewer</Text>
      <Text style={{ textAlign: 'center',fontWeight: 'light',fontSize: 10, color: '#00ABB3' }}>powered by Rio Prasetyo</Text>
      <TextInput style={styles.input} value={text} onChangeText={onChangeText} placeholder='Masukkan URL (https://expo.dev)' />
      <Button title='SUBMIT' onPress={MyWeb}/>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    constructor: {
        backgroundColor: '#EAEAEA',
        padding: 15,
        marginHorizontal: 40,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    input: {
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        padding: 5,
        borderColor: 'grey',
    },
})