import styled from 'styled-components'
import thumbUp from '@/assets/thumb-up.svg'
import { rem } from 'polished'

export const HeaderStyle = styled.div`
  width: 100%;
  height: 5%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    margin-left: ${rem('5px')};
  }
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`

export const HeaderIcon = styled(Icon)`
  transform: rotate(-16deg);
`

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderIcon src={thumbUp} alt='header icon' /> <h4>Event App</h4>
    </HeaderStyle>
  )
}

export default Header
