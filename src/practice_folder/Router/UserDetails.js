import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
  const {id} = useParams();
  console.log("🚀 ~ UserDetails ~ user id:", id)
  return (
    <div>UserDetails</div>
  )
}
