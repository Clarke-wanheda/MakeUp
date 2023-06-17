import React from 'react'
import style from '../styles/feedback.css'
import img from '../Images/review.png'
import img1 from '../Images/review1.png'

const Feedback = () => {
  return (
    <div>
        <div className='feed'>
            <h1>Customers Review's</h1>
            <div className='feedcont'>
                <div className='feedcontheading'>
                    <h1>Inbavalli</h1>
                    
                </div>
                <div className='feedcontpara'><p>Excellent service and loved thier makeup. The cosmetic they used is really wonderfull.
                    it cost very low compare to others,really much recommended. just go for it</p>
                    </div>
                <div><img id='reviewimg' src={img} alt="" /></div>
            </div>
            <div className='feddcont1'>
                <div className='feedcontheading1'>
                    <h1>Sivagami</h1>
                    
                </div>
                <div className='feedcontpara1'><p> Dont;t think too much ,just go for it.They care for thier customers</p></div>
                <div><img id='reviewimg1' src={img1} alt="" /></div>

            </div>
        </div>
        <div className='contlas'>
        <h1 >Put on some Make up And live a Little....❤️</h1>
        </div>
    </div>
  )
}

export default Feedback