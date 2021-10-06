import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled, { css } from 'styled-components'



const ButtonsCont = styled.button`
background: ${props=>props.bg};
border-radius: 3px;
color:${props=>props.color};
min-height: 50px;
min-width: 100px;
`
const Text = styled.p`
color:black;
`

const Buttons =({

    color="grey",
    p="Button",
    bg="transparent",

}) =>{

    return <ButtonsCont color={color} bg={bg}>
        <Text>{p}</Text>

    </ButtonsCont>
}

export default Buttons