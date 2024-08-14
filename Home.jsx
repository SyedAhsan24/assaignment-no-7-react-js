import React from 'react'
import back from "./src/Images/back.img1.2.jpg"
import Navbar from './Navbar'
import invertedcoma from'./src/Images/ivertedcoma.png'
import line from'./src/Images/line2.png'
import linepara from'./src/Images/line.png'
import Cards from './Cards'
import { Navigate, useNavigate } from "react-router-dom";
import { productData } from './src/Components/Data'

const Home = () => {
  return (
    <>
    <section>
   <div style={{backgroundImage:`url(${back})`,
backgroundRepeat:"no-repeat",backgroundSize:"cover",}} className="bgimage">
    <div className="bgimage2">
        <Navbar/>
        <div className="para">
        <p>Summer Collection</p>   
        <h1>introducing <br></br> New Arrivals</h1>  
        <p className='para1'>Lorem ipsum dolor sit amet, consectetur <br></br>  
        adipiscing elit. Ut elit tellus, luctus nec <br></br>
        ullamcorper mattis, pulvinar dapibus leo.</p>   
         <button className='btn'>View Collection</button>
         </div>
    </div>
   </div>
   </section>
   {/* <==============================================================================================> */}
   <section className='section 2'>
   <div className="section1">
    <div className="img">
    <img src={invertedcoma} alt="" />
    <h2 className='h2'>Shopping is cheaper than therapy.</h2> 
    <div className="line">
      <img className='linepara' src={linepara} alt="" /> 
    <p className='para3'> OnlineWardrobe</p>
    </div>
    </div>
    <div className="div">
<img className='limeimg' src={line} alt="" />   
    </div>

    {
        productData.map((e,i)=>{
            return(
            <Cards key={i}title={e.title}image={e.image}desc={e.description}id={e.id}/>
            )

        })
    }


{/* <Cards/> */}
    </div>    
   </section>
   
    </>
  )
}

export default Home
