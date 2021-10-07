//reference: https://www.javascripttutorial.net/javascript-dom/javascript-select-box/

import styled from 'styled-components'

const AddGroupToList = () => {
  console.log('this employee group should be detected and recorded in the div')
}
const Cont = styled.div`
  display:flex;
  flex-direction:column;
  margin:1em;
`;

const Select = styled.select`
  display:flex;
`;

const Label = styled.label`
  font:sans-serif;
`;

const Button = styled.button`
  font:sans-serif;
`;

const Dropdown = ({
  textlabel="Employee Group",
  text0="Cashier",
  text1="Customer Service",
  text2="Sales Associate",
  text3="Store Manager",
}) => {
  return (
    <Cont>
      <Label>{textlabel}</Label> 
      <Select>
        <option value='0'>{text0}</option>
        <option value='1'>{text1}</option> 
        <option value='2'>{text2}</option>
        <option value='3'>{text3}</option>
      </Select>
      <Button
      onClick={()=>{
        AddGroupToList()
      }}>Select Group</Button>
    </Cont>
  )
}

export default Dropdown