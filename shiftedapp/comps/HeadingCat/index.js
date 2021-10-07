import styled from 'styled-components'

const PageName = styled.h1`
  display:flex;
  font-size: ${props=>props.fontsize};
  
  
`;

// var pagenames = {
//   schedule,
//   group,
//   calendar
// }

const PageHeading = ({
  title="Create Schedule",
  fontsize="48px",
  
}) => {
  return (
    <PageName fontsize={fontsize}>{title}</PageName>
  )
}

export default PageHeading