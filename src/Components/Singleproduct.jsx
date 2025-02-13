import React from 'react'
import { useParams } from 'react-router-dom'
import { productData } from './Data'

const Singleproduct = () => {

  const {id} = useParams()
    console.log(id) 

    const dataFilter = productData.filter((e,i)=>{
        return e.id == id
    })
    console.log(dataFilter)

  return (
    
 <>
    {
        dataFilter.map((e,i)=>{
            return(
                <div style={{width:"300px"}} key={i}>
                    <img style={{width:"100%"}} src={e.image} alt="" />
                    <h1>{e.title}</h1>
                    <p>{e.description}</p>

                    
                </div>
            )
    })}
   </>


  );
}
export default Singleproduct


