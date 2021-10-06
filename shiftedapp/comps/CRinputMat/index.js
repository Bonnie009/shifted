import styled from "styled-components";



const Testerinput = () => {
    console.log('free hoes. get your free garden hoes right here folks')   
}

// onClick={()=>{
//     Testerinput()
// }} 

const Con = styled.div`
    display: flex;
    flex-direction: column;
`
const P = styled.p`
    margin-bottom: 3px;
`


const NumInput = styled.input`
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


const CRinput = ({
    tx='',
    ws='200px',
    bgcolor='white',
    height='25px',
    padding='',
    defaultValue='hello',

    
}) =>{
    return (
        <Con>
            <P>{tx}</P>
            <NumInput defaultValue={defaultValue} type='text' bgcolor={bgcolor} wd={ws} ht={height} padding={padding} />
        </Con>
    
    )
}

export default CRinput