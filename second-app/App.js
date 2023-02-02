import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import TodoItem from './Compoments/TodoItem';
import TodoInput from './Compoments/TodoInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [todoList, setTodoList] = useState([])

  const addTodoHandler = (todoInputedText) => {
    setTodoList(currentTodoList => [
      ...currentTodoList,
      {
        todo: todoInputedText,
        id: new Date().toLocaleString(),
      }
    ]);
    setModalIsVisible(false)
  }

  const deleteTodoHandler = (id) => {
    setTodoList(currentTodoList => {
      return currentTodoList.filter(todo => todo.id !== id);
    })
  }

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.appContainer}>
        <Text style={styles.title}>TO-DO LIST</Text>
        <Button
          title='Add new To-do'
          onPress={() => setModalIsVisible(true)}
          color='#d69e20'
        />
        <TodoInput
          addTodoHandler={addTodoHandler}
          modalIsVisible={modalIsVisible}
          setModalIsVisible={setModalIsVisible}
        />
        <View style={styles.todosListContainer}>
          <FlatList
            data={todoList}
            renderItem={itemData => {
              return <TodoItem
                todo={itemData.item.todo}
                id={itemData.item.id}
                deleteTodoHandler={deleteTodoHandler}
              />;
            }}
            keyExtractor={(item, index) => item.id}
          >
          </FlatList>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  todosListContainer: {
    flex: 4,
    marginTop: 16,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 30,
    color: '#3b4528',
    /*     backgroundColor: '#d69e20',
        borderRadius: 100, */
  },
});
