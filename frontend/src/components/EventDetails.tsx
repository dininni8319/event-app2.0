import styled from 'styled-components'
import { rem } from 'polished'
import { Icon } from './Header'
import clock from '../assets/clock.svg'
import eventImg from '../assets/event.avif'

export const EventWrapper = styled.div`
  width: 50%;
  min-height: 50vh;
  border-bottom: 1px solid #ccc;
  /* padding-bottom: ${rem("5px")}; */
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1500px) {
    width: 40%;
  }

  @media screen and (max-width: 750px) {
    display: block;
  }
`

export const EventImageStyle = styled.img`
  width: 30%;
  height: 80%;
  border-radius: 10px;
  position: relative;
  top: 5%;
  
  @media screen and (max-width: 750px) {
    /* width: 90%;
    height: 50%;
    left: 5%;
    margin-top: ${rem("10px")}; */
    display: none;
  }

  @media screen and (min-width: 1500px) {
    width: 30%;
    height: 80%;
  }
`

export const EventDetailStyle = styled.div`
  width: 40%;
  height: 50%;
  position: relative;
  top: 5%;
  font-size: ${rem('18px')} ;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    color: #888888;
  }

  p {
    font-size: ${rem("14px")}; 
    padding-bottom: ${rem("20px")} 
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }

  @media screen and (min-width: 1500px) {
    width: 55%;
    height: 80%;

    p {
      line-height: 22px;
    }
  }
`

export const EventTitle = styled.h1`
  text-transform: capitalize;
  font-weight: 400;
  font-size: ${rem("32px")};
  margin-top: 0;
`

export const EventDateComponent = styled.div`
  background-color: black;
  width: 100%;
  height: 129px;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
`

export const EventDateWrapper = styled.div`
  position: relative;
  left: 8%;
  
  div {
    display: flex;
    align-items: center;
    padding-bottom: ${rem("3px")};

    span {
      font-weight: 400;
      font-size: ${rem("14px")};
      padding-left: ${rem("5px")};
    }
  }

  h3 {
    margin-top: 0;
  }
`

const EventDetails = () => {
  return (
    <EventWrapper>
      <EventDetailStyle>
        <div>
          <span>Letzigrund Stadion, Zurich</span>
          <EventTitle>the rolling stone</EventTitle>
          <p>The stones roll through Europe this winter - The Rolling Stones will play at the Letzigrund stadium on Friday, Dec 17 2021. On their “On Fire” tour, they will also make a stop in Zurich at the beginning of the winter... A heater and ticket prices are not yet known. We will inform you here and on social media. So check back from time to time.</p>
        </div>
        <EventDateComponent>
            <EventDateWrapper>
              <div>
                <Icon src={clock} />
                <span>EVENT DATE</span>
              </div>

              <h3>Fri 17. Dec | 18:00 PM </h3>
            </EventDateWrapper>

        </EventDateComponent>
      </EventDetailStyle>
      <EventImageStyle src={eventImg} />
      
    </EventWrapper>
  )
}

export default EventDetails
