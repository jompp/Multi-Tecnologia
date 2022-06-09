import React from 'react'
import './Brand.css'

export function Brand(props) {
  return (
      <>
        <div className='space-complement'></div>
        <div className='brand'>
            <h1>{props.sectionTitle}</h1>
        </div>
      </>
  )
}
