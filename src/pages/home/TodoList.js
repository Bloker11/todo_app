import React from 'react'
import styles from './Home.module.css'
import {useFirestore} from '../../hooks/useFirestore'

export default function TodoList({todos}) {
  const { deleteDocument } = useFirestore('todo');
    return (
    <ul className={styles.todo}>
        {todos.map((todo)=>(
            <li key={todo.id}>
                <p className={styles.name}>{todo.name}</p>
                <button onClick={()=>deleteDocument(todo.id)}>x</button>
            </li>
        ))}
    </ul>
  )
}
