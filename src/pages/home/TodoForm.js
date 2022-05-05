import React, {useState} from 'react'
import { useFirestore } from '../../hooks/useFirestore';

export default function TransactionForm({uid}) {
    const [name, setName] = useState('');
    const { addDocument, response} = useFirestore('todo')

    const handleSubmit = (e)=>{
        e.preventDefault();
        addDocument({uid,name})
        setName('')
    }
  return (
    <>
        <h3>Add a to-do</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <span>What's next?</span>
                <input type="text" required onChange={(e)=> setName(e.target.value)} value={name}/>
            </label>
            <button>Add a task</button>
        </form>
    </>
  )
}
