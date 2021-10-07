import Head from 'next/head'
import Image from 'next/image'
import styled, { css } from 'styled-components'



const ButtonsCont = styled.button`
background: ${props=>props.bg};
border-radius: 3px;
color:${props=>props.color};
min-height: 60px;
min-width: 90px;
max-height: 60px;
height: auto;
width: 150px;
border-radius: 10px;
border: none;
align-items: center;
margin-right: 20px;
font-size: ${props=>props.txt};

`
const Text = styled.p`
color:black;
margin: 0;
`

const Buttons =({

    color="grey",
    p="Button",
    bg="transparent",
    txt="16px",

}) =>{

    return <ButtonsCont color={color} bg={bg} txt={txt}>
        <Text>{p}</Text>

    </ButtonsCont>
}

export default Buttons