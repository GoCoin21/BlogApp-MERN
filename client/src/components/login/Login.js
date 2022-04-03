import React from "react";
import { Container,LoginHeader,LoginLabel,LoginInput,Button,Register } from "./styles/style";
export default function Login({children,...restProps}){
	return <Container {...restProps}>{children}</Container>
}

Login.Header = function LogHeader({children}){
	return <LoginHeader>{children}</LoginHeader>
}
Login.Form = function LogForm({children,...restProps}){
	return <form {...restProps}>{children}</form>
}
Login.Label = function LogLabel({children}){
	return <LoginLabel>{children}</LoginLabel>
}
Login.Input = function LogInput({...restProps}){
	return <LoginInput {...restProps}/>
}
Login.Button = function LogBtn({children,...restProps}){
	return <Button {...restProps}>{children}</Button>
}
Login.Register = function LogRegister({children,...restProps}){
	return <Register {...restProps}>{children}</Register>
}