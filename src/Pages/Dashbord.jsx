import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'
import { json } from 'react-router-dom'

function Dashbord() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
  if(localStorage.getItem("existingUser")){
    setUsername(JSON.parse(localStorage.getItem("existingUser")).username)
  }
  },[])
  return (
    <>
    {/*  navbar */}
    <Header insideDashbord={true}/>
    <Row style={{marginTop:'100px'}} className='container-fluid'>
      <Col className='mt-5' sm={12} md={8}>
        <h1 >Welcome <span className='text-warning'>{username}</span></h1>
        {/* my project section */}
        <MyProjects/>
      </Col>
      <Col className='mt-5' sm={12} md={4}>
        {/* profile section */}
         <Profile/>
      </Col>
      
    </Row>
    </>
  )
}

export default Dashbord