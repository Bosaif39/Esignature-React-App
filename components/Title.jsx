import React from 'react'

export default function Title({ classes, text }) {  // Destructure props
  return (
    <h1 className={!classes ? "title" : classes}>
      {!text ? "title" : text}
    </h1>
  )
}