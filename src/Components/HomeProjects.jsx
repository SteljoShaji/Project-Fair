import React from 'react'
import ProjectCard from './ProjectCard'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomeProjects({allProjects}) {
  return (
    <>
        <h1 className='text-center mb-5'> Explore Our Projects</h1>
    <marquee width={'100%'} scrollAmount={20}>
      <Row className='d-flex justify-content-between' >
        { allProjects?.length>0?allProjects.map(project=>(
           <Col sm={12} md={6} lg={4}>
           <ProjectCard project={project}/>
       </Col>
        )):null
          
         }
      </Row>
    </marquee>
   <div className='text-center'> <Link to={'/projects'}>View More Projects</Link></div>
    </>
  )
}

export default HomeProjects