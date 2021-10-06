import styled from "styled-components";



const TesterGCinput = () => {
    console.log('free hoes. get your free garden hoes right here folks')   
}

// onClick={()=>{
//     TesterGCinput()
// }} 


const WorInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.bgcolor};
    color: ${props => props.inputColor || "black"};
    border: 2px solid black;
    font-size: 14px;
    padding: ${props=>props.pad};
    width: ${props=>props.wd};
    height: ${props=>props.ht};
`


const GCinput = ({
    tx='',
    ws='200px',
    bgcolor='white',
    height='25px',
    padding='',
    inputColor='#7A7A7A',
    defaultValue='hello',

    
}) =>{
    return (

        <WorInput defaultValue= {defaultValue} type='text' inputColor={inputColor} bgcolor={bgcolor} wd={ws} ht={height} padding={padding} />
    
    )
}

export default GCinput