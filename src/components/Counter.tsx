import React, { useState } from 'react'

type Props = {
  value?: number
}
const MyCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState<number>(value)

  const onMinus = (): void => {
    setCounter((prev: number): number => prev - 1)
  }

  const onPlus = (): void => {
    setCounter((prev: number): number => prev + 1)
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  )
}

export default MyCounter
