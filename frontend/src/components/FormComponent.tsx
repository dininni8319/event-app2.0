import { 
  ChangeEvent,
  MouseEvent
} from 'react'
import ButtonCouter from './ButtonCouter'
import { FormWrapperStyle } from './FormCompontentStyle'
import { Input, InputWrapper, Button } from './FormCompontentStyle'

interface FormData {
  email: string
  date: string
  time: string
  days: number
}

interface Props {
  inputChange: (event: ChangeEvent<HTMLInputElement>) => void
  formData: FormData
  increment: (event: MouseEvent<HTMLButtonElement>) => void
  decrement: (event: MouseEvent<HTMLButtonElement>) => void
  count: number
}

const FormComponent = ({
  inputChange,
  formData,
  increment,
  decrement,
  count
}: Props) => {
  const maxDate = '2023-12-27'
  const disabled =
    !formData.email || !formData.date || !formData.time || !formData.days

  return (
    <FormWrapperStyle>
      <InputWrapper>
        <h3>Set a check back reminder</h3>
      </InputWrapper>
      <InputWrapper justiContent="space-between">
        <div className="grid-class">
          <Input
            type="date"
            name="date"
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
        <Button disabled={disabled}>
          {disabled ? 'Complete the form' : 'Submit'}
        </Button>
      </InputWrapper>
    </FormWrapperStyle>
  )
}

export default FormComponent
