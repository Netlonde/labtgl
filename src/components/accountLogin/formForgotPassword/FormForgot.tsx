import FormForgotContainer from "./styled";

function FormForgot(){
  return(
    <FormForgotContainer>
      <input type="email" placeholder="Email" />

      <div className="formforgot-sendLink">
        <button>Send link {"->"}</button>
      </div>
    </FormForgotContainer>
  )
}

export default FormForgot;
