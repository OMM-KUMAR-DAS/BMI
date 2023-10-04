import React from 'react'
import { useState } from 'react'

const BMI = () => {
    
    const[bg,setg]= useState({weight:"",height:"",bn:"",val:"",img:""})

    function bb(event)
    {
       setg(prev=>{return{...prev,[event.target.name]:event.target.value}})
    }

    function opp(event)
    {
            event.preventDefault()
            setg(prev=>{return{...prev,bn:Math.floor(prev.weight/(prev.height*prev.height))}})
            setg(prev=>{return{...prev,img:"https://zitoc.com/wp-content/uploads/2022/10/Body-Mass-Index-BMI-Chart-3.png", alt:" "}})
            setg(prev=>{return{...prev,val:"YOUR BMI IS:"+prev.bn}}) 
   }


  return (
    <div className='BM'>

<h1>BMI CALCULATOR</h1>
     <form  onSubmit={opp} className="jkk">
       
       <h3>weight</h3>
       <input
        type="int"
        id="wee"
        placeholder="enter weight(in kg)"
        name="weight"
        onChange={bb}
        required
        className="inn"
        value={bg.weight}
       />

       <br></br>
       <br></br>

       <h3>height</h3>
       <input
        type="int"
        id="hee"
        placeholder="enter height in m"
        name="height"
        onChange={bb}
        required
        className="inn"
        value={bg.height}
       />

       <br></br>
       <br></br>
       <button className="btn">SUBMIT</button>
       <p className="omm"><span>{bg.val}</span></p>
       <img src={bg.img} className="imm"></img>
     </form>


    </div>
  )
}

export default BMI