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
          <Input width="30%" type="date"/> 
          <Input width="20%" type="time" id="time_id"/> 
          <ButtonCouter />
          {/* <Input width="35%" type="date"/>  */}
        </InputWrapper>
        <InputWrapper>
          <Input width="100%" type="email" placeholder="Enter your email"/> 
        </InputWrapper>
        <InputWrapper>
          <Button>Submit</Button>
        </InputWrapper>
    </FormWrapperStyle>
  )
}

export default FormComponent
