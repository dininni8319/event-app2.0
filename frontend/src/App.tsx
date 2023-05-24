import './App.css'
import Header from './components/Header'
import styled from 'styled-components';
import EventDetails from './components/EventDetails';

export const WrapperAppStyle = styled.div`
 display: flex;
 justify-content: center;
`

const App = () => {

  return (
    <>
     <Header />
     <WrapperAppStyle>
       <EventDetails />
     </WrapperAppStyle>
    </>
  )
}

export default App
