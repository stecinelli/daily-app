import { StyleSheet, View, Text, Pressable } from 'react-native'

const TodoItem = ({ todo, deleteTodoHandler, id }) => {
  return (
    <View style={styles.todoItem}>
      <Pressable 
        onPress={()=> deleteTodoHandler(id)}
        android_ripple={{ color: 'black'}}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.todoText}>{todo}</Text>
      </Pressable>
    </View>
  )
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#3d5447',
  },
  pressedItem: {
    opacity: 0.5,
  },
  todoText: {
    color: 'white',
    padding: 8,
  }
})