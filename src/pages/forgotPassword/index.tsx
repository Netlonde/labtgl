import ForgotPasswordContainer, {FullForgotPasswordContainer} from "./styled";

import Slogan from "@components/slogan/Slogan";
import FormForgot from "@components/formForgotPassword/FormForgot";

function ForgotPassword(){
  return(
    <FullForgotPasswordContainer>
      <Slogan />
      <ForgotPasswordContainer>
        <h3 className="forgotpassword-title">Reset password</h3>
        <FormForgot />
        <a href="/login" className="forgotpassword-back">{"<-"} Back</a>
      </ForgotPasswordContainer>
    </FullForgotPasswordContainer>
  )
}

export default ForgotPassword;
