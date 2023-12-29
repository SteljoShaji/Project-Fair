import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import design from '../Assets/design.webp';
import HomeProjects from '../Components/HomeProjects';
import { Link } from 'react-router-dom';
import { homeProjectsAPI } from '../services/allApi';

function PFHome() {
  const [isLoggedIn,setLoggedIn] = useState(false)
  const [allProjects,setAllProjects] = useState([])
  const getHomeProject = async ()=>{
    const result = await homeProjectsAPI()
    if(result.status===200){
      setAllProjects(result.data)
    }else{
      alert(result.response.data)
    }
  }
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
    getHomeProject()
  },[])
  return (
    <>
    {/* landing section */}
    <div className="container-fluid-rounded" style={{width:'100%',height:'100vh',backgroundColor:'#32CD32'}}>
      <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
          <h1 style={{fontSize:'80px',color:'black'}}><i className='fa-brands fa-stack-overflow fa-bounce me-3'></i>Project Fair</h1>
          <p>One stop destination for all softWare developement projects...Where user can add and manage their projects.
            As well as access all projects available in our website.. what are you waiting for!!!
          </p>
          {
            isLoggedIn?
            <Link to={'/dashbord'} className='btn btn-info'>Manage your Projects<i className='fa-solid fa-right-long fa-beat ms-2 '></i></Link>:
            <Link to={'/login'} className='btn btn-info'>Start To Explore<i className='fa-solid fa-right-long fa-beat ms-2 '></i></Link>
          }
        </Col>
        <Col sm={12} md={6} className='ps-1'>
          <img style={{marginTop:'100px'}} className='img-fluid w-100 mt-2 me-5' src={design} alt='project fair'/>
        </Col>

      </Row>
    </div>
    {/* glimps ofall projects  */}
    <div className="all-projects mt-5">
      <HomeProjects allProjects={allProjects}/>
    </div>
    
    </>
  )
}

export default PFHome


