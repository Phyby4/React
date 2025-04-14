import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        
        <header className='text-xl font-bold pl-[45%] bg-neutral-400'>The Tech Flavour</header>
        <div className='pl-[38%]  text-slate-950 font-bold text-xl bg-neutral-400 p-6 '>
    <nav className='flex gap-6 display'>
        <a href="/Portfolio">Portfolio</a>
        {/* <Link to="/">Portfolio</Link>  */}
        <a href="blog">Blog</a>
        <a href="Resumes">Resumes</a>
        <a href="Contacts">Contacts</a>
    </nav>
    </div>
    <section className='text-xl text-center ' >
            <h2>Welcome to the tech flavor website</h2>
            <p>We are a team of passionate individuals showcasing our skills and projects.Meet our members below!</p>
        </section>
        <section className='flex items-center p-6 bg-red-300 justify-items-col m-11' >
            
                
               <div className='m-6 text-center bg-white p-7'> 
                <h4>Kevin</h4>
                <p>A fullstack developer with a passion for codding and design who is currently venturing into machine learning and data science .</p>
                <a href="Resumes.jsx#Kevin">view resume</a>
                </div>
            
            
                <div className='m-6 text-center bg-white p-7'>
                <h4>Beth</h4>
                <p>A fullstack developer with a passion for codding and design who is currently venturing into machine learning and data science .</p>
                <a href="Resumes.jsx#Beth">view resume</a>
               </div>
            
                <div className='m-6 text-center bg-white p-7'>
                <h4>Phoebe</h4>
                <p>A fullstack developer with a passion for codding and design who is currently venturing into machine learning and data science .</p>
                <a href="Resumes.jsx#Phoebe">view resume</a>
                </div>
        
                <div className='m-6 text-center bg-white p-7 '>
                <h4>Herine</h4>
                <p>A fullstack developer with a passion for codding and design who is currently venturing into machine learning and data science .</p>
                <a href="Resumes.jsx#Herine">view resume</a>
                </div>
            
                <div className='m-6 text-center bg-white p-7'>
                <h4>Max</h4>
                <p>A fullstack developer with a passion for codding and design who is currently venturing into machine learning and data science .</p>
                <a href="Resumes.jsx#Max">view resume</a>
                </div>
        </section>
        <footer className='font-semibold text-center'>
        <p>contact us at techflavor@gmail.com</p>
    </footer>
    
    </div>
  )
}

export default Home
