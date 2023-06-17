import React from 'react'
import maincontent from '../styles/maincontent.css'
import Img1 from '../Images/Bridal.png'
import img2 from '../Images/Bridal1.png'
import img3 from '../Images/Bridal2.png'
import img4 from '../Images/mehandi.png'
import img5 from '../Images/mehandi1.png'
import img6 from '../Images/mehandi2.png'
import img7 from '../Images/jewlry.png'
import img8 from '../Images/jewlry2.png'
import img9 from '../Images/jewlry4.png'


const Maincontent = () => {
  return (
    <div>
      
        <div className='design'>
          <h1> New Designs</h1>
          
            <div className='firstbox'>
                <div className='box'><img src={Img1} alt="" /> Bridal</div>
                <div className='box'> <img src={img2} alt="" /> Bridal drs2</div>
                 <div className='box'><img src={img3} alt="" />Wedding</div>
                
                  {/* <div className='box'><img src={img4} alt=""/>4</div>
                  {/* <div className='box'><img src={img5} alt="" />5</div>
                  <div className='box'><img src={img6} alt="" />6</div> */} 
            </div>
            <hr />
            <h1>Mehandi</h1>
            <div className='secbox'>
          
              
                <div className='box'><img src={img4} alt="" />Simple design1</div>
                <div className='box'><img src={img5} alt="" />Modern Design2</div>
                <div className='box'><img src={img6} alt="" />Wedding Design3</div>
              

            </div>
            <hr />
            <h1>Necklace</h1>
            <div className='thbox'>
              <div className='box'><img src={img7} alt="" />1</div>
              <div className='box'><img src={img8} alt="" />2</div>
              <div className='box'><img src={img9} alt="" />3</div>
            </div>
        </div>
    </div>
  )
}

export default Maincontent