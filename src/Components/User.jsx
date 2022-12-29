import React from 'react'
import { useState,useEffect } from 'react'
import style from './home.module.css'
import axios from 'axios'
const User = () => {
  let [state,setState]=useState([]);
  let totalSum=0;
  useEffect((e)=>{
    axios.get(`http://localhost:3000/content`).then((response)=>{
      setState(response.data)
    })
  })
  let sum=(a)=>{
    return(
      (a.price) * (a.qty)
    )
  }
//   let ini=0;
// let arr=Array.from(sum)
// let totalValue=arr.reduce((acc,current)=>{
//  return(
//  <>
//     {acc+current}
//     </>
//  )
// },ini)
return(
    <div  id={style.table}>
      <table border={2} >
        <thead>
          <th>SI NO</th>
         <th>NAME OF MATERIAL</th>
         <th>PRICE</th>
         <th>UOM</th>
         <th>QTY</th>
         <th>Total</th>
        </thead>
        {state.map((x)=>{
          return(
            <tbody>
            <tr>
                 <td>{x.id}</td>
                 <td>{x.name}</td>
                 <td> {x.price}</td>
                 <td>{x.uom}</td>
                 <td>{x.qty} </td>
                 <td>{sum(x)}</td>
                 </tr>
                 </tbody>
          )
        })}
       <tfoot>
        <td colSpan={2}></td>
        <td colSpan={3}><span> Grand Total</span></td>
       <td><span>222000/-</span></td>
       </tfoot>
      </table>
    </div>
  )
}

export default User