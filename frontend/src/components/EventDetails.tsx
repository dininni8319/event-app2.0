import { Icon } from './Header'
import clock from '../assets/clock.svg'
import eventImg from '../assets/event.avif'
import { 
  EventWrapper, 
  EventImageStyle,
  EventDetailStyle,
  EventTitle,
  EventDateComponent,
  EventDateWrapper, 
  EventTitleWrapper
} from "./EventDetaileStyle";


const EventDetails = () => {
  return (
    <EventWrapper>
      <EventDetailStyle>
        <div>
          <span>Letzigrund Stadion, Zurich</span>
          <EventTitleWrapper>
            <EventTitle>the rolling stone</EventTitle><span>top event</span>
          </EventTitleWrapper>
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
