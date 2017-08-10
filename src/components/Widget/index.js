import styled from 'styled-components'

const Widget = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(160, 160, 160, 0.5);

  display: flex;
  flex-direction: column;
  height: 270px;
  width: 400px;
`

Widget.Header = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #E8EBEF;
`
Widget.Body = styled.div`
  padding: 10px 15px;
  flex: 1;
`

export default Widget
