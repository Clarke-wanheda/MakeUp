import React from 'react'
import style from '../styles/footer.css'
import img from '../Images/b12.png'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footerheading'>
            <h1> Shalu Parlour</h1> 
            
            </div>
             <div className='footercont'><h5>It's a Girl Thing</h5></div>
            
             
             <div className='servicecont'>
                <h3>Services</h3>
                
                <li>Packages</li>
                <li>Facial</li>
                <li>Hair care</li>
                <li>Makeup</li>
                <li>Wax</li>
                <li>Cosmetucs</li>
            

             </div>
             <div className='addcont'>
                <h3>Address</h3>
                <p>10,murugar kovil street,
                </p>
                <p>Pernambut</p>
                <p>Contact No :</p>
                
                
                
             </div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer