import React from "react";
import { Header } from "../components";
import { Container } from "../components/header/styles/style";

export default function HeaderPage(){
	return(
		<Container>
			<Header.Content>
				<Header.Title>Write & Share</Header.Title>
				
				<Header.BigTitle>Your THOUGTS</Header.BigTitle>
		    </Header.Content>

			
			<Header.Image src={require("../images/blogging.jpg")} alt="blog"/>
		
		</Container>
	)
}