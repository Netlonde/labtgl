import { FaArrowLeft } from 'react-icons/fa';

import FormSignUp from "@components/accountLogin/formSignUp/FormSignUp";
import Slogan from "@components/accountLogin/slogan/Slogan";
import SignUpContainer, { FullSignUpContainer } from "./styled";

function SignUp(){
  return(
    <FullSignUpContainer>
      <Slogan />
      <SignUpContainer>
        <h3 className="signup-title">Registration</h3>
        <FormSignUp />
        <a href="/login" className="signup-back"> <FaArrowLeft /> Back</a>
      </SignUpContainer>
    </FullSignUpContainer>
  )
}

export default SignUp;
