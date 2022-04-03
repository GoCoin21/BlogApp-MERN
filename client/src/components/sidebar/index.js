import React from "react";
import { Container,
	     SContainer,
         Header,
		 Img,
		 Desc,
		 CategoryTitle,
		 SidebarLink,
		 FollowSideTitle,
		 FollowLink
       } from "./styles/style";

export default function Sidebar({children}){
	return <Container>{children}</Container>
}
Sidebar.SideContainer = function SidebarContainer({children}){
	return <SContainer>{children}</SContainer>
}

Sidebar.Header = function SideHeader({children}){
	return <Header>{children}</Header>
}
Sidebar.Image = function SideImg({...restProps}){
	return <Img {...restProps}/>
}
Sidebar.Desc = function SideDesc({children}){
	return <Desc>{children}</Desc>
}
Sidebar.CatTitle = function SideCatTitle({children}){
	return <CategoryTitle>{children}</CategoryTitle>
}
Sidebar.Link = function SideLink({children}){
	return <SidebarLink>{children}</SidebarLink>
}
Sidebar.FollowTitle = function SideFTitle({children}){
	return <FollowSideTitle>{children}</FollowSideTitle>
}
Sidebar.Follow = function SideFollow({children}){
	return <FollowLink>{children}</FollowLink>
}