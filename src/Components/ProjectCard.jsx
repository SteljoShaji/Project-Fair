import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import Netflix from '../Assets/Netflix.png'
import { BASEURL } from '../services/baseUrl';



function ProjectCard({project}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//console.log(project);
  return (
<>
    { project&&<Card className='shadow p-3 mb-5 btn' onClick={handleShow}>
          <Card.Img  variant="top" src={project?.projectImage?`${BASEURL}/uploads/${project.projectImage}`:Netflix}  style={{width:"300",height:'300px'}}/>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
          </Card.Body>
        </Card>}

        <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>
                <img style={{width:"300px",height:'200px'}} className='img-fluid' 
                src={project?.projectImage?`${BASEURL}/uploads/${project.projectImage}`:Netflix} alt='single project' />
                </Col>
                <Col>
                <h2>{project.title}</h2>
                <p>{project.overview}</p>
                <p>Language Used:<span className='ms-2 fw-bolder'>{project.languages}</span></p>
                <div>
                <a href={project.github} target='_blank' className='btn me-5 shadow' ><i class="fa-brands fa-github fa-2x" ></i></a>
                <a href={project.website} target='_blank' className='btn me-5 shadow'><i className='fa-solid fa-link fa-2x'></i></a>

            </div>
                </Col>
                
            </Row>
            
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
</>
  )
}

export default ProjectCard