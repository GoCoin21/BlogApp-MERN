import React from "react";
import { Container,Image,Info,Description } from "./styles/style";
export default function SinglePost({children}){
	return <Container>{children}</Container>
}
SinglePost.ImageContainer = function SingleImage({children,...restProps}){
	return <Image {...restProps}>{children}</Image>
}
SinglePost.Info = function SingleInfo({children}){
	return <Info>{children}</Info>
}
SinglePost.Desc = function SingleDesc({children}){
	return <Description>{children}</Description>
}