import { StyleSheet, TextInput, SafeAreaView, View, Text, Dimensions, TouchableOpacity, Button, Alert } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('window')
const Appjs = () => {
  return (
    <View style={styles.main_conatiner}>
      <Text style={styles.title_txt}>Login</Text>
      <View style={styles.textinput}>
        <TextInput placeholder='Enter Your name' placeholderTextColor={'#999'} style={styles.input} />
        <TextInput placeholder='EnterPassword' placeholderTextColor={'#999'} style={styles.input} />
      </View>
      <TouchableOpacity
      onPress={()=> Alert.alert('Custom buttom!')}
      style={styles.btn}>
        <Text style={styles.btn_txt}>Login</Text>
      </TouchableOpacity>
      <Button title={'Login'} onPress={()=> Alert.alert('React Native Component !')}/>
    </View>
  )
}

export default Appjs

const styles = StyleSheet.create({
  main_conatiner: {
    // backgroundColor: '#456789',
    flex: 1
  },
  title_txt: {
    color: 'green',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 20,
  },
  textinput: {
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    marginVertical: 20,
    width: width * 0.8,
    borderColor: '#999'
  },
  btn:{
    backgroundColor:'green',
    width:width*0.3,
    alignSelf:'center',
    marginTop:20,
    borderRadius:10,
    paddingVertical:10,
    alignItems:'center'
  },
  btn_txt:{
    color:'#fff'
  }
})