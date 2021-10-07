import styled from "styled-components";



// const TesterBut = () => {
    
// }




const Mbun = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.bgcolor};
    color: ${props=>props.fontcolor};
    border: 1px solid black;
    font-size: 14px;
    padding: ${props=>props.pad};
    margin-top: 10px;
    width: ${props=>props.wd};
    height: ${props=>props.ht};
`


const CRbutton = ({
    tx='Filler',
    ws='200px',
    bgcolor='white',
    fontcolor='black',
    height='25px',
    padding='',
    show=false,
    TesterBut=()=>{}

    
}) =>{
    if( show === true )
    {
        return (
            <Mbun bgcolor='#7BE4AB' wd={ws} ht={height} padding={padding}>{tx}</Mbun>
        )
    }
    return <Mbun wd={ws} fontcolor={fontcolor} bgcolor={bgcolor} ht={height} padding={padding}
    onClick={()=>{
        TesterBut()
    }} >{tx}</Mbun>
}

export default CRbutton