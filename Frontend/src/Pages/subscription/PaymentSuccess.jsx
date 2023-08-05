import React from 'react'
import {useSearchParams} from "react-router-dom"
import { useLocation } from 'react-router-dom'
const PaymentSuccess = (response) => {
const location = useLocation();
console.log(response)
  return (
    <div>
        <h1>Order Successfully Done</h1>
        <p>Reference Number: 1234567898</p>
    </div>
  )
}

export default PaymentSuccess