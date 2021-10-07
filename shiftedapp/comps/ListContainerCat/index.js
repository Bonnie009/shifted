import styled from 'styled-components'

const Cont = styled.div`
  display:flex;
  flex-direction: column;
  min-width:100px;
  min-height:50px;
  border: solid 1px #aaa;
`
const ListHeader = styled.div`
  display:flex;
  
`

const ListContainer = ({
  tx="Review Entries"
}) => {
  return (
    <Cont>
      <ListHeader>{tx}</ListHeader>
    </Cont>
  )
}

export default ListContainer