import React from 'react'
import { Link } from 'react-router-dom'
import Nbar from '../components/Nbar'
const Blog = () => {
  return (
    <div>
          <Nbar/>
      
        <div className='pl-[38%]  text-slate-950 font-bold text-xl bg-purple-300 p-6 '>
  
    </div>
    <div className='text-xl font-semibold text-center'>
    <h2>Latest Posts    </h2>
        <p>Explore blog posts from each of our team members on various topics of interest</p>
        </div>
        <section className='flex-row p-6  ml-[28%] w-[45%]  '>
            <div>
                <h3 className='font-bold text-center text-blue-800'>The future of Web Development</h3>
               <p>By Kevin|October1 15,2024  <br />
                   Exploring the latest trends in web development , from AI integration to progressive web apps . Read on to discover what's next in the field</p>
             </div>
            <div className='pt-6 '>
                <h3 className='font-bold text-center text-blue-800' >Designing for Impact: Branding tips for startups</h3>
                <p> By Beth|October 20 ,2024 <br />
                    In this post , Beth shares essential branding tips for startups , focusing on building memorable identities. Learn the principles of effective branding  </p>
            </div>
            <div className='pt-6 '>
                <h3 className='font-bold text-center text-blue-800'>Technology and Society:Balancing Act</h3>
                <p>By Phoebe|November 2 2024 <br />
                Phoebe delves into the societal impacts of advancing technology and the ethical considerations involved . A thought provoking read for all tech enthusiast !</p>
            </div>
            <div className='pt-6 '>
                <h3 className='font-bold text-center text-blue-800'>Data Driven Decision Making in Business</h3>
                <p>By Max|November 5, 2024 <br />
                Max explains how business can use data analysis to inform their decision-making processes. Discover the power of data in business success</p>
            </div>
            <div className='pt-6 '>
                <h3 className='font-bold text-center text-blue-800'>Effective project management for team success</h3>
                <p>By Herine|November 7,2024 <br /> 
                Herine shares her insights on project mangement strategies that help teams stay organized , meet deadlines and achieve their goals.</p>
            </div>
   </section>     
</div>
  )
}

export default Blog
