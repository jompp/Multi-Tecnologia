import React from 'react'
import { CircleNotch } from 'phosphor-react'
import './loading.css'

export function Loading() {
  return (
    <div className='loading-box'>
        <CircleNotch className='loading-circle animate-spin'/>
    </div>
  )
}
