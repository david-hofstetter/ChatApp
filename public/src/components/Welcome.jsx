import React from 'react'
import styled from 'styled-components'

export default function Welcome({currentUser}) {
  return (
    <Container>
      
        <h1>
           Willkommen
        </h1>
        <br />
        <h3>Bitte wähle einen Chat aus</h3>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
img{
    height: 20rem;
}
span{
    color: #4e00ff;
    text-transform: capitalize;
}
`;