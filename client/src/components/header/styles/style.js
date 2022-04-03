import styled from "styled-components"

export const Container = styled.div`
width : 100%;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
color : #000;
`
export const HeadContent = styled.div`
display : flex;
flex-direction : column;
align-items : center;

@media only screen and (max-width:768px){
	margin-left : 25px;
}
`
export const SmallSpan = styled.span`
position : absolute;
font-size : 18px;
color : #000f04;
margin-bottom : 10px;
font-family : "Lucida Console",monospace;
`
export const BgTitle = styled.span`
position : absolute;
margin-top : 18px;
font-size : 32px;
color : #000f04;
z-index : 1;
font-family : "Lucida Handwriting", cursive;
`
export const Image = styled.img`

width : 100%;
height : 450px;
object-fit : cover;
margin-top : 38px;
@media only screen and (max-width : 768px){
	width : 100%;
	margin-left:29px;
	height : 150px;
}
`