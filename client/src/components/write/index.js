import React from "react";
import { Container,WImage,Label,Input,Icon,Title,Textarea,Button,Form} from "./styles/style";
export default function Write({children}){
	return <Container>{children}</Container>
}

Write.Image = function Image({...restProps}){
	return <WImage {...restProps}></WImage>
}

Write.Label = function WLabel({children,...restProps}){
	return <Label {...restProps}>{children}</Label>
}
Write.Form = function WForm({children,...restProps}){
	return <Form {...restProps}>{children}</Form>
}
Write.Input = function WInput({...restProps}){
	return <Input {...restProps}/>
}
Write.Title = function WTitle({...restProps}){
	return <Title {...restProps}/>
}
Write.Icon = function WIcon({children,...restProps}){
	return <Icon {...restProps}>{children}</Icon>
}
Write.Text = function WText({...restProps}){
	return <Textarea {...restProps}></Textarea>
}
Write.Button = function WButton({children}){
	return <Button>{children}</Button>
}
