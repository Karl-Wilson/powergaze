"use client"
import Header from "../container/header";
import Form from "../container/form";
import FormLayoutWrapper from "../core/formLayoutWrapper";
import HeaderLayoutWrapper from "../core/headerLayoutWrapper";
import LayoutWrapper from "../core/layoutWrapper";
import InputGroup from "../container/inputGroup";
import ErrorMsg from "../core/errorMsg";
import useLogin from "../../persistence/login";


type loginLayout = {

}

const LoginLayout = (props: loginLayout) =>{
    const Page = "login"
    const {error, submit, change} = useLogin()

    return(
        <LayoutWrapper>
            <HeaderLayoutWrapper>
                <Header title="Sign in" class="col-start-1"/>
            </HeaderLayoutWrapper>
            <FormLayoutWrapper>
                <Form class="col-start-1 md:col-start-2 md:col-span-2" page={Page} id="login" submit={submit}>
                    {error && <ErrorMsg error={error} class="mb-6"/>}
                    <InputGroup page={Page} error={error} change={change}/>
                </Form>
            </FormLayoutWrapper>
        </LayoutWrapper>
    )
}

export default LoginLayout;