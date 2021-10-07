import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex-direction: column;
    display: flex;
    height: 80px;
    width: 120px;
    border-radius: 10px;
    border: none;
    background-color: #FFFBF5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 5px;
`

const Col1 = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Col2 = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Col3 = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    align-items: space-between;
`

const Col3El1 = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 5px;
`

const Col3El2 = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2px;
    border-radius: 10px;
    align-items: center;
    background-color:${props=>props.btncolor};
`

const CalendarBlock = ({
    btncolor="#969696",
}) => {
    const [count, setCount] = useState(0);
    if (count === 0){
        btncolor="#747474";
    }
    else if (count === 1){
        btncolor="#EA7373";
    }
    else if (count === 2){
        btncolor="#7BE4AB";
    }
    else if (count > 2){
        setCount(0);
    }
    return <Container>
        <Col1>
            Date
        </Col1>
        <Col2>
            4 hour shift
        </Col2>
        <Col3>
            <Col3El1>
                0/4
            </Col3El1>
            <Col3El2 btncolor={btncolor} onClick={() => {
                setCount(count + 1);
                console.log(count);
            }}>
                Icon
            </Col3El2>
        </Col3>
    </Container>
}

export default CalendarBlock;