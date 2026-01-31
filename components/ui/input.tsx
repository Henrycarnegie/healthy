import React from 'react'

const input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' >{props.children}</input>
  )
}

export default input