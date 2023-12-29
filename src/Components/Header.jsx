import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Header({insideDashbord}) {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    sessionStorage.removeItem("token")
    localStorage.removeItem("existingUser")
    localStorage.removeItem("Role")
    navigate('/')
  }
  return (
    <>
    {/*  navbar */}
    <Navbar style={{backgroundColor:'green',zIndex:'1'}} className="w-100 position-fixed top-0">
        <Container>
          <Navbar.Brand >
          <Link to={'/'} style={{textDecoration:'none',color:'black',fontSize:'40px'}}>
            <i className='fa-brands fa-stack-overflow fa-bounce me-3'></i> Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashbord &&
            <div onClick={handleLogout} style={{textDecoration:'none'}} className='btn btn-link ms-auto text-light fw-bolder fs-4'>
                <i class="fa-solid fa-arrow-right-from-bracket fa-beat me-1"></i>Logout</div>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header