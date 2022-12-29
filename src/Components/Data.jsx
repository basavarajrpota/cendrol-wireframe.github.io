import React, { useState } from 'react'
import style from './home.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Data = () => {
let[name,setName]=useState("")
let[price,setPrice]=useState("")
let[uom,setUom]=useState("")
let[qty,setQty]=useState("")
let navigate=useNavigate()
let nameData=(e)=>{
    setName(e.target.value)
}
let priceData=(e)=>{
    setPrice(e.target.value)
}
let uomData=(e)=>{
    setUom(e.target.value)
}
let qtyData=(e)=>{
    setQty(e.target.value)
}
  let  dataSubmission=(e)=>{
    e.preventDefault()
    let load={name,price,uom,qty}
        axios.post('http://localhost:3000/content',load).then(()=>{
            console.log('data has been updated');
        })
        navigate('/user')
    }
  return (
    <div>
        <form action="">
            <table id={style.dataForm}>
                <tr>
                    <td>
                        <label htmlFor="">NAME OF MATERIAL</label>
                    </td>
                    <td>
                        <input type="text" value={name} onChange={nameData} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">Price</label>
                    </td>
                    <td>
                        <input type="number" value={price} onChange={priceData} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">UOM</label>
                    </td>
                    <td>
                        <input type="text" value={uom} onChange={uomData} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">QTY</label>
                    </td>
                    <td>
                        <input type="number" value={qty} onChange={qtyData}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <button onClick={dataSubmission}>Submit</button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default Data