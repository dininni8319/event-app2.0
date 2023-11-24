import './App.css'
import Header from './components/Header'
import styled from 'styled-components';
import EventDetails from './components/EventDetails';
import FormComponent from './components/FormComponent';

export const WrapperAppStyle = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`

const App = () => {

  return (
    <>
      <Header />
      <WrapperAppStyle>
          <EventDetails />
          <FormComponent />
      </WrapperAppStyle>
    </>
  )
}

export default App
