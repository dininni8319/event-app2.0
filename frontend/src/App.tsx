import './App.css'
import Header from './components/Header'
import styled from 'styled-components'
import EventDetails from './components/EventDetails'
import FormComponent from './components/FormComponent'
import { useState, useEffect, ChangeEvent } from 'react'
import { formatDate, addDaysToDate, getDaysDifference } from './utils'
import { useCounter } from '@/useCounter'

export const WrapperAppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const today = formatDate(new Date())

const App = () => {
  const { count, sign, increment, decrement, setCounter } = useCounter()

  const [formData, setFormData] = useState({
    email: '',
    date: today,
    time: '13:00',
    days: count
  })
  const eventDate = '2023-12-27'
  
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const { email, date, time } = formData
    const data = {
      email,
      date,
      time
    }
    try {
      const response = await fetch('http://localhost:8000/api/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        alert('Your email has been sent successfully!')
        setFormData({
          email: '',
          date: today,
          time: '13:00',
          days: 0
        })
      } else {
        alert('Something went wrong!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    if (name === 'date') {
      
      const newCount = getDaysDifference(new Date(today), new Date(value))
      setCounter(newCount)
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        days: newCount
      }))
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }))
    }
  }
  
  // adding an subtracting days from the current date
  // with counter button
  useEffect(() => {
    // subtracting
    if (sign === '-') {
      const newDate = addDaysToDate(
        new Date(formData.date),
        count >= 0 ? count - (count - 1) : count,
        sign
      )
     
      setFormData((prevData) => ({
        ...prevData,
        ['date']: formatDate(newDate),
        ['days']: count
      }))
    } else {
      // adding 
      const newDate = addDaysToDate(
        new Date(formData.date),
        count > 0 ? count - (count - 1) : count,
        sign
      )

      if (formatDate(newDate) === eventDate) {
        alert("Ups..., You cannot pass the event date!")
        setCounter(0)
        return

      } else {
        setFormData((prevData) => ({
          ...prevData,
          ['date']: formatDate(newDate),
          days: count
        }))
      }
    }
  }, [count, sign])
  return (
    <>
      <Header />
      <WrapperAppStyle>
        <EventDetails />
        <FormComponent
          handleSubmit={handleSubmit}
          formData={formData}
          inputChange={handleInputChange}
          increment={increment}
          decrement={decrement}
          count={count}
        />
      </WrapperAppStyle>
    </>
  )
}

export default App
