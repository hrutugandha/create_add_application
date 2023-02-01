import React from 'react'
import styled from 'styled-components'
import DoughnutChart from '../Components/DoughnutChart'
import Table from '../Components/Table'

const Homepage = () => {
  return (
    <Wrapper style={{"display":"flex"}} >
       <Table style={{flex:1}} />
      <DoughnutChart style={{flex:1}}  />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 100vh;
    display:flex;
    background-color: #FFF3F0;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 40px;

`


export default Homepage