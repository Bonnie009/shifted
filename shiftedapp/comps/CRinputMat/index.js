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
    margin: 0px;
`


const NumInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.bgcolor};
    color: ${props => props.inputColor || "black"};
    border: 1px solid black;
    font-size: 12px;
    margin-top: 10px;
    padding: ${props=>props.padding};
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
    inputColor="#7A7A7A",
    fontsize="14px",

    
}) =>{
    return (
        <Con>
            <NumInput defaultValue={defaultValue} type='text' inputColor={inputColor} bgcolor={bgcolor} wd={ws} ht={height} padding={padding} />
        </Con>
    
    )
}

export default CRinput