import React from 'react'

const Card = (props) => {

  return (
    <div id='card' className='h-80 w-70 px-3 py-3 m-2 rounded-2xl bg-black overflow-hidden'>
      <h1 className='text-2xl font-bold m-2 text-white'>{props.title}</h1>
      <h3 className='text-m m-2 text-gray-400'>{props.text}</h3>
    </div>
  )
}

export default Card
