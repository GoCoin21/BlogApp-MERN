import React from "react";
import { Container,TopLinkContent,SocialLink,ImpLinks,Element,Content,Search } from "./styles/style";

export default function TopHeader({children,...restProps}){
	return <Container {...restProps}>{children}</Container>
}
TopHeader.SocialContent = function TopContent({children,...restProps}){
	return <TopLinkContent {...restProps}>{children}</TopLinkContent>
}
TopHeader.Social = function TopSocial({children,...restProps}){
	return <SocialLink {...restProps}>{children}</SocialLink>
}
TopHeader.Links = function TopLinks({children,...restProps}){
	return <ImpLinks {...restProps}>{children}</ImpLinks>
}
TopHeader.Comp = function TopElement({children,...restProps}){
	return <Element {...restProps}>{children}</Element>
}
TopHeader.Content = function TopContent({children,...restProps}){
	return <Content {...restProps}>{children}</Content>
}

TopHeader.HeadSearch = function TopSearch({children}){
	return <Search>{children}</Search>
}