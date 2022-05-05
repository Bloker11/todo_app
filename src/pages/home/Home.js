import styles from './Home.module.css'
import React from 'react'
import TransactionForm from './TodoForm'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import TodoList from './TodoList'

export default function Home() {
  const { user } = useAuthContext();
  const {documents, error} = useCollection('todo', ["uid","==",user.uid], ["createdAt", "desc"]);
  return (
    <div className = {styles.container}>
      <div className = {styles.content}>
        {error && <p>{error}</p>}
        {documents && <TodoList todos = {documents}/>}
      </div>
      <div className = {styles.sidebar}>
        <TransactionForm uid = {user.uid}/>
      </div>
    </div>
  )
}
