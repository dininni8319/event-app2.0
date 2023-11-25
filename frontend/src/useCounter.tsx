import { useState } from 'react'

export const useCounter = () => {
  const [count, setCounter] = useState(0)
  const [sign, setSign] = useState('+')

  const decrement = (event: MouseEvent) => {
    event.preventDefault()
    if (count === 0) {
      setCounter(0)
      return
    }
    setCounter(count - 1)
    setSign('-')
  }

  const increment = (event: MouseEvent) => {
    event.preventDefault()
    setCounter(count + 1)
    setSign('+')
  }

  return {
    count,
    sign,
    decrement,
    increment,
    setCounter
  }
}
