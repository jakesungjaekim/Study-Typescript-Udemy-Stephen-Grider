import axios from 'axios'

const url  = 'https://jsonplaceholder.typicode.com/todos/1'

// First TS, Interface
// interface를 통해서 API로부터 어떤 유형의 정보가 들어오는지, 기대할 수 있는지 알렸습니다.

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;
  
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
`)
}