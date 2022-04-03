import React from "react";
import { Container,HeadContent,SmallSpan,BgTitle,Image } from "./styles/style";
export default function Header({children}){
	return <Container>{children}</Container>
}
Header.Content = function HeaderContent({children}){
	return <HeadContent>{children}</HeadContent>
}
Header.Title = function Title({children}){
	return <SmallSpan>{children}</SmallSpan>
}
Header.BigTitle = function HeadTitle({children}){
	return <BgTitle>{children}</BgTitle>
}
Header.Image = function HeaderImg({...restProps}){
	return <Image {...restProps}/>
}