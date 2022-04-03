import React from "react";
import { Container,Header,SubHead,SetLabel,Image,Input,Button } from "./styles/style";
export default function Setting({children}){
	<Container>{children}</Container>
}

Setting.Header = function SetHeader({children}){
	return <Header>{children}</Header>
}

Setting.SubHeader = function SetSub({children}){
	return <SubHead>{children}</SubHead>
}
Setting.Label = function SettingLabel({children}){
	return <SetLabel>{children}</SetLabel>
}
Setting.Image = function SettingImage({...restProps}){
	return <Image {...restProps}/>
}
Setting.Input = function SetInput({...restProps}){
	return <Input {...restProps}/>
}
Setting.Button = function SetButton({children,...restProps}){
	return <Button {...restProps}>{children}</Button>
}