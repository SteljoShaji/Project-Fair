import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectsAPI } from '../services/allApi'



function Projects() {
  const [searchKey,setSearchKey] = useState("")
  const [allProjects,setAllProjects] = useState([])
  const getAllProjects = async ()=>{
    const token = sessionStorage.getItem("token")

    const reqHeader = {
      "Content-Type":"application/json","Authorization":`Bearer ${token}`
    }
    const result = await allProjectsAPI(searchKey,reqHeader)
    console.log(result);  
    if(result.status===200){
      setAllProjects(result.data)
    }else{
      alert(result.response.data)
    }
  }
  useEffect(()=>{
    getAllProjects()
  },[searchKey])
  console.log(searchKey);
  
  return (
    <>
     {/*  navbar */}
     <Header/>
    

    {/*  All Projects */}
    <div className='text-center' style={{marginTop:'120px'}}>

      <h1 className=' mb-5 mt-5 '>All Projects</h1>
      {/* search */}
      <div className='d-flex mb-5 justify-content-center  w-100'>
       <div className='d-flex align-items-center w-50 border  rounded'>
          <input className='form-control' placeholder='Search Projects By Technologies' 
          onChange={e=>setSearchKey(e.target.value)}/>
          <div style={{marginLeft:'-50px'}} ><i  class="fa-solid fa-magnifying-glass"></i></div>
       </div>
      </div>
      <div className="container-fluid">
        <Row>
         { allProjects?.length>0?allProjects?.map(project=>(
            <Col sm={12} md={6} lg={4}>
            <ProjectCard project={project}/>
          </Col>
         )): null
          }
        </Row>
      </div>
    </div>

    </>
  )
}

export default Projects