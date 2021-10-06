import styled from 'styled-components';

const LegendCont = styled.div`
    display:flex;
    width:465px;
    height:100px;
    justify-content: space-evenly;
`

const LegendDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const LegendBox = styled.div`
    background-color:${props=>props.bg};
    width:34px;
    height:34px;
`

const LegendText = styled.div`
    padding:10px;
`
//props
const MyLegend = ({
    bgcolor="#7BE4AB"
}) =>{
    return <LegendCont>
        <LegendDiv>
            <LegendBox bg={bgcolor}></LegendBox>
            <LegendText>Available</LegendText>
        </LegendDiv>
        <LegendDiv>
            <LegendBox bg={"#EA7373"}></LegendBox>
            <LegendText>Full</LegendText>
        </LegendDiv>
        <LegendDiv>
            <LegendBox bg={"#747474"}></LegendBox>
            <LegendText>Unavailable</LegendText>
        </LegendDiv>
        
        </LegendCont>
}

export default MyLegend;
