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

  console.log('🚀 ~ file: App.tsx:21 ~ App ~ formData:', formData)

  console.log('🚀 ~ file: App.tsx:27 ~ App ~ count:', count)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    if (name === 'date') {
      const newCount = getDaysDifference(new Date(today), new Date(value))
      setCounter(newCount)
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }))
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }))
    }
  }

  useEffect(() => {
    if (sign === '-') {
      const newDate = addDaysToDate(
        new Date(formData.date),
        count >= 0 ? count - (count - 1) : count,
        sign
      )

      setFormData((prevData) => ({
        ...prevData,
        ['date']: formatDate(newDate)
      }))
    } else {
      const newDate = addDaysToDate(
        new Date(formData.date),
        count > 0 ? count - (count - 1) : count,
        sign
      )
      setFormData((prevData) => ({
        ...prevData,
        ['date']: formatDate(newDate)
      }))
    }
  }, [count, sign])
  return (
    <>
      <Header />
      <WrapperAppStyle>
        <EventDetails />
        <FormComponent
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
