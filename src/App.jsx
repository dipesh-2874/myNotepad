import { useState } from 'react'
import Card from './components/Card'
import {Plus, X, Pencil} from 'lucide-react'
import './index.css'

const App = () => {
  const [title, settitle] = useState('')
  const [text, settext] = useState('')
  const [editIndex, setEditIndex] = useState(null)

  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    if (title.trim() === '' && text.trim() === '') {
      alert("Empty Note can't be added!")
      return
    }
    const copyTask = [...task];
    if (editIndex !== null) {
      copyTask[editIndex] = { title, text }
      setEditIndex(null)
    } else {
      copyTask.push({ title, text })
    }
    settask(copyTask)
    settitle('')
    settext('')
  }

  const editNote = (idx) => {
  settitle(task[idx].title)
  settext(task[idx].text)
  setEditIndex(idx)
}


  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    settask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black gap-4 text-white p-10'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-col lg:w-1/2 gap-1 items-center'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input type="text" 
        placeholder='Heading'
        className='px-5 py-4 border-b outline-none w-full text-4xl'
        value={title}
        onChange={(e) => {
          settitle(e.target.value)
        }}
        />
        <textarea type='text' 
        placeholder='Write here'
        className='px-5 py-10 border-t h-100 outline-none w-full text-xl'
        value={text}
        onChange={(e) => {
          settext(e.target.value)
        }}>
        </textarea>
        <button id='btn' className='text-white flex flex-row w-30 px-5 py-2 text-2xl text-center gap-2'><Plus id='plus'/>{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>
      <div className='pl-10 lg:w-1/2 overflow-hidden mt-6 lg:border-l'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 h-full overflow-auto mt-5'>
          {task.map(function(elem,idx){
            return (
              <div key='idx' className='relative'>
                <button onClick={() => {
                  deleteNote(idx)
                }} 
                id="delete" className='absolute top-5 right-5 p-1'><X /></button>
                <button
                  onClick={() => editNote(idx)}
                id="edit" className='absolute top-5 right-14 p-1'><Pencil size={21}/></button>
                <Card idx={idx} title={elem.title} text={elem.text}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
