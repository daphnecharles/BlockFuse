import {useState, React} from 'react'
import './AdminDashboard.css'
import Table from './Table'
const AdminDashboard = () => {
    const list = [
        { name: "John", match:'60%', talentscore:'75', age: 22},
        { name: "John", match:'60%', talentscore:'75', age: 22},
        { name: "John", match:'60%', talentscore:'75', age: 22},

    ]
const colNames = ['name', 'match', "talentscore"]
  
  return (
    <Table list={list} colNames={colNames} />
  )
}

export default AdminDashboard