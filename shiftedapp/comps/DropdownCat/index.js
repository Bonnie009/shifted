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

const Dropdown = () => {
  return (
    <Cont>
      <Label>Employee Group</Label>
      <Select>
        <option value='0'>Cashier</option>
        <option value='1'>Customer Service</option>
        <option value='2'>Sales Associate</option>
        <option value='3'>Store Manager</option>
      </Select>
      <Button
      onClick={()=>{
        AddGroupToList()
      }}>Select Group</Button>
    </Cont>
  )
}

export default Dropdown