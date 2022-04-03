import styled from "styled-components";
import {Link} from  "react-router-dom"
export const Container = styled.div`
width : 100%;
background : #fff;
color : #000;
display : flex;

margin-right : 15px;
flex-wrap : nowrap;
align-items : center;
justify-content : space-around;
z-index : 999;
top : 0;
position : fixed;

@media only screen and(max-width : 768px){
	width : min-content;
	display : flex;
    flex-wrap : nowrap;
    align-items : center;
    justify-content : space-around;
    z-index : 999;
    top : 0;
    position :sticky;


}
`
export const TopLinkContent = styled.div`
flex : 3;
display : flex;
justify-content : center;
align-items : center;


`
export const SocialLink = styled(Link)`
 margin-right : 10px;
 font-size : 18px;
 margin-top : 6px;
 &:grow{
	 transition : all .2s ease-in-out;
	 
 }
 &:hover{
	 transform : scale(1.5);
 }
 @media only screen and (max-width : 768px){
	 display : none;
 }
`
export const ImpLinks = styled.ul`
flex : 6;
display : flex;
justify-content : center;
align-items : center;



`
export const Element = styled(Link)`
opacity : 0.8;
font-size : 18px;
margin-left : 12px;
cursor : pointer;
color : #000;
text-decoration : none;
font-family : "Verdana",sans-serif;
&:hover {
	color : #000;

}
`
export const Content = styled.div`
 flex : 3;
 display : flex;
 right : 0;
 justify-content : center;
 align-items : center;

 @media only screen and(max-width:768px){
	 display : flex-end
	 margin-top:11px;
	
 }
`
export const Search = styled.div`
display : inline-block;
@media only screen and (max-width : 768px){
	display : none;
	
}
`