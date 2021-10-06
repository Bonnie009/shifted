import styled from 'styled-components'

const AddDateToList = () => {
  console.log('this date should be detected and recorded in the div');
}

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  margin:1em;
`;

const Date = styled.input`
  display:flex;
`;

const Label = styled.label`
  font:sans-serif;
`;

const DateSelector = () => {
  return (
    <Cont>
      <Label>Date</Label>
      <Date type='date'
      onChange={()=>{
        AddDateToList()
      }}></Date>
    </Cont>
  )
}

export default DateSelector