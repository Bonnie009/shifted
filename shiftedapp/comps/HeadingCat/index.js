import styled from 'styled-components'

const PageName = styled.h1`
  display:flex;
`;

// var pagenames = {
//   schedule,
//   group,
//   calendar
// }

const PageHeading = ({
  title="Create Schedule"
}) => {
  return (
    <PageName>{title}</PageName>
  )
}

export default PageHeading