import { StyleSheet, TextInput ,SafeAreaView} from 'react-native'
import React from 'react'

const Appjs = () => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
       placeholder="useless placeholder 1"
      />
      <TextInput
       style={styles.input}
        placeholder="useless placeholder 2"
        keyboardType="numeric"
      />
    </SafeAreaView>
  )
}

export default Appjs

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    top:10
  }
})