import { 
  ChangeEvent,
} from 'react'
import ButtonCouter from './ButtonCouter'
import { FormWrapperStyle } from './FormCompontentStyle'
import { Input, InputWrapper, Button } from './FormCompontentStyle'
import { formatDate } from '@/utils'

interface FormData {
  email: string
  date: string
  time: string
  days: number
}

interface Props {
  inputChange: (event: ChangeEvent<HTMLInputElement>) => void
  formData: FormData
  increment: (event: any) => void
  decrement: (event: any) => void
  count: number
  handleSubmit: (event: any) => void
}

const FormComponent = ({
  inputChange,
  formData,
  increment,
  decrement,
  handleSubmit,
  count
}: Props) => {
  const today = formatDate(new Date())

  const maxDate = '2023-12-27'
  const disabled =
    !formData.email || !formData.date || !formData.time || !formData.days

  return (
    <FormWrapperStyle onSubmit={handleSubmit}>
      <InputWrapper>
        <h3>Set a check back reminder</h3>
      </InputWrapper>
      <InputWrapper justicontent="space-between">
        <div className="grid-class">
          <Input
            type="date"
            name="date"
            min={today}
            max={maxDate}
            defaultValue={formData.date}
            onChange={inputChange}
            required
          />
          <Input
            type="time"
            id="time_id"
            name="time"
            defaultValue={'13:00'}
            onChange={inputChange}
            required
          />
          <ButtonCouter
            increment={increment}
            decrement={decrement}
            count={count}
          />
        </div>
      </InputWrapper>
      <InputWrapper>
        <Input
          width="100%"
          type="email"
          name="email"
          onChange={inputChange}
          placeholder="Enter your email"
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Button type='submit' disabled={disabled}>
          {disabled ? 'Complete the form' : 'Submit'}
        </Button>
      </InputWrapper>
    </FormWrapperStyle>
  )
}

export default FormComponent
