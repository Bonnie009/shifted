import Head from 'next/head'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import {useRouter} from 'next/router'


const ButtonsCont = styled.button`
display: flex;
justify-content: center;
background: ${props=>props.bg};
border-radius: 3px;
color:${props=>props.color};
min-height: 60px;
min-width: 90px;
max-height: 60px;
height: auto;
width: ${props=>props.width};
border-radius: 10px;
border: ${props=>props.border};
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
    width="150px",
    border="none",
    routeTo=""

}) =>{

    const router = useRouter();

    return <ButtonsCont onClick={()=>router.push(routeTo)} color={color} border={border} bg={bg} width={width} txt={txt}>
        <Text>{p}</Text>
    </ButtonsCont>
}

export default Buttons