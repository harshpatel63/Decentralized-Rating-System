import React from 'react'
import "./About.css"

function About() {
  return (
    <div>
        <h1 className='title'>DEVELOPER TEAM</h1>
        <hr />
        <div className='about_parent_container'>
            <div class="myself">          
                <h1>HARSH PATEL</h1>
                <hr class="dots"/>
                <div className='about_member'>
                <p>4th Year<br/>
                Computer Science Engineering<br/>
                National Institute of Technology Goa</p> 
                </div> 
            </div> 
            <div class="myself">          
                <h1>ROSHAN KUMAR</h1>
                <hr class="dots"/>
                <div className='about_member'>
                <p>4th Year<br/>
                Computer Science Engineering<br/>
                National Institute of Technology Goa</p>         
                </div>   
            </div> 
            <div class="myself">          
                <h1>BIPIN JADAV</h1>
                <hr class="dots"/>
                <div className='about_member'>
                <p>4th Year<br/>
                Electrical and Electronics Engineering<br/>
                National Institute of Technology Goa</p>            
                </div>
            </div> 
            <div class="myself">          
                <h1>ABHINAV UPADHYAY</h1>
                <hr class="dots"/>
                <div className='about_member'>
                <p>4th Year<br/>
                Mechanical Engineering<br/>
                National Institute of Technology Goa</p> 
                </div>           
            </div> 
            
        </div>
    </div>
  )
}

export default About