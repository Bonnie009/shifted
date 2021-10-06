import styled from "styled-components";



const TesterBut = () => {
    console.log('free hoes. get your free garden hoes right here folks')   
}


const Mbun = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.bgcolor};
    border: 1px solid black;
    font-size: 14px;
    padding: ${props=>props.pad};
    width: ${props=>props.wd};
    height: ${props=>props.ht};
`


const CRbutton = ({
    tx='Filler',
    ws='200px',
    bgcolor='white',
    height='25px',
    padding='',

    
}) =>{
    return <Mbun wd={ws} bgcolor={bgcolor} ht={height} padding={padding}
    onClick={()=>{
        TesterBut()
    }} >{tx}</Mbun>
}

export default CRbutton