import React from 'react'
import "./Services.css"

const data = [
    {
        id:1,
        title: "Web Developer",
        description:"loremipsum",
    },
    {
        id:2,
        title: "Web Developer",
        description:"loremipsum",  
    }
]
function Services(){
  return (
  <>
   <section className='services container section' id='services'>
    <h2 className='section_title'>Services</h2>
      <div className="services_container grid">
          {data.map(({id,title,description})=> {
            return(
                <div className='services_card' key={id}>
                    <h3 className='services_title'>{title}</h3>
                    <p className='services_description'>{description}</p>

                </div>
            )
         } )}
      </div>
   </section>
  </>
  )
}

export default Services