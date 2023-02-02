import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'


const TodoInput = ({ addTodoHandler, modalIsVisible, setModalIsVisible }) => {
  const [todoInputedText, setTodoInputedText] = useState('')

  const todoInputHandler = text => {
    setTodoInputedText(text);
  }

  return (
    <Modal visible={modalIsVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/dog.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder='Your new To-do'
          onChangeText={todoInputHandler}
          value={todoInputedText}
        />
        <View style={styles.buttonContainer}>

          <View style={styles.button}>
            <Button title='Add To-do' onPress={() => addTodoHandler(todoInputedText)} color='#a89b8a' />
          </View>

          <View style={styles.button}>
            <Button title='Cancel'onPress={()=> setModalIsVisible(false)} color='#3b4528' />
          </View>

        </View>
      </View>
    </Modal>
  )
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    color: '#cccccc',
    width: '100%',
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '25%',
    marginHorizontal: 8,
  },
  image: {
    width: 300,
    height: 300,
    margin: 20,
  }
})