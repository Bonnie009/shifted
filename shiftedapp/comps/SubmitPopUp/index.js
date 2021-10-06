import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled, { css } from 'styled-components'



const SubmitCont = styled.div`
display:flex;
border-style: solid;
flex:1;
min-height: 200px;
min-width: 500px;
max-height: 200px;
flex-direction:column;
`

const NavCont = styled.div`
flex:2;
background-color: #7BE4AB;
min-height: 50px;
min-width: 500px;
max-height: 50px;
flex-direction:column;
`

const TextCont  = styled.div`
flex:1;
background-color: white;
flex-direction:column;

`


const Text = styled.p`
color:black;
align-items:center;
justify-content:center;
text-align:center;
font-size: 30px;

`

const Submit =({

    color="grey",
    p="Thanks for Submitting",
    bg="transparent"

}) =>{

    return <SubmitCont color={color} bg={bg}>
        <NavCont></NavCont>
        <TextCont>
        <Text>{p}</Text>
        </TextCont>
    </SubmitCont>
}

export default Submit
