import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CreateAdd from '../Pages/CreateAdd'
import Homepage from '../Pages/Homepage'

const Navbar = () => {
  return (
    <NavWrapper className='nav'>
      <LogoWrapper className='logo-container'>
        APP LOGO
      </LogoWrapper>
      <LinksWrapper className='links-container'>
        <DashboardDiv>
          <Link to={"/"} element={<Homepage/>} >
          DASHBOARD
          </Link>
        </DashboardDiv>
        <CreateAddDiv>
        <Link to={"/createadd"} element={<CreateAdd/>}  >
          CREATE ADS
          </Link>
        </CreateAddDiv>
      </LinksWrapper>
    </NavWrapper>
  )
}

const DashboardDiv = styled.div`
text-decoration: none;
     flex:1;
     padding-top: 20px;
`

const CreateAddDiv = styled.div`
text-decoration: none;
     style: none;
     flex:1;
     underline: none;
     padding-top: 20px;
`

const NavWrapper = styled.div`
   height: 80px;
   display: flex;
   position: relative;
   border: 2px solid black;


   @media (max-width: 768px) {
    flex-direction: column;
    height: 80px;

    .nav{
      padding: 40px;
    }



    

    .logo-container .links-container{
      flex:1;
      padding: 20px;
      display: flex;
    }

    
  }

`






const LogoWrapper = styled.div`
   flex: 2;
   justify-content: left;
   text-align: left;
   font-weight: bold;
   padding-top: 20px;
   
   padding-left: 20px;
`


const LinksWrapper = styled.div`
   flex : 1;
   display: flex;

`



export default Navbar