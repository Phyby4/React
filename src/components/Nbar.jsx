import React from 'react'
import { Link } from 'react-router-dom'
const Nbar = () => {
  return (
    <div className='pl-[38%]  text-slate-950 font-bold text-xl bg-purple-300 p-6 '>
    <nav className='flex gap-6 display'>
        <a href="Portfolio">Portfolio </a>
        <a href="blog">Blog</a>
        <a href="Resumes">Resumes</a>
        <a href="Contacts">Contacts</a>
    </nav>
    </div>
      
    
  )
}

export default Nbar