import ButtonCouter from "./ButtonCouter";
import { FormWrapperStyle } from "./FormCompontentStyle";
import { Input, InputWrapper, Button } from './FormCompontentStyle'

const FormComponent = () => {
  return (
    <FormWrapperStyle>
        <InputWrapper>
          <h3>Set a check back reminder</h3>
        </InputWrapper>
        <InputWrapper justiContent="space-between">
          <div className="grid-class">
            <Input type="date"/> 
            <Input type="time" id="time_id"/> 
            <ButtonCouter />
          </div>
        </InputWrapper>
        <InputWrapper>
          <Input 
            width="100%" 
            type="email" 
            placeholder="Enter your email"
          /> 
        </InputWrapper>
        <InputWrapper>
          <Button>Submit</Button>
        </InputWrapper>
    </FormWrapperStyle>
  )
}

export default FormComponent
