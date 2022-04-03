import React from "react";
import { Container,RegisterHeader,RegisterLabel,RegisterInput,Button,Login } from "./styles/style";
export default function Register({children,...restProps}){
	return <Container {...restProps}>{children}</Container>
}

Register.Header = function RegHeader({children}){
	return <RegisterHeader>{children}</RegisterHeader>
}
Register.Form = function RegForm({children,...restProps}){
	return <form {...restProps}>{children}</form>
}
Register.Label = function RegLabel({children}){
	return <RegisterLabel>{children}</RegisterLabel>
}
Register.Input = function RegInput({...restProps}){
	return <RegisterInput {...restProps}/>
}
Register.Button = function RegBtn({children,...restProps}){
	return <Button {...restProps}>{children}</Button>
}
Register.Login = function RegRegister({children,...restProps}){
	return <Login {...restProps}>{children}</Login>
}