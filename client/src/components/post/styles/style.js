import styled from "styled-components";


export const Container = styled.div`
display : flex;
flex-direction : column;
width: 385px;
align-items : flex-start;
margin: 35px 25px 40px 55px;
list-style-type : none;


`

export const PtImage = styled.img`
height : 280px;
object-fit : cover;
border-radius : 7px;
width : 385px;
display : block-inline;
transition : all 0.2s ease-in-out;

&:hover{
	transform : scale(1.1);
}
`
export const Subtitle = styled.span`
font-size : 10px;
margin-top : 15px;
color : #525452;
display : block-inline;

opacity : 0.5;
cursor : pointer;
display: flex;
display : block-inline;
  flex-direction: column;
  align-items: center;
`
export const Header = styled.h2`
font-size : 15px;
text-align:center;
font-family : "Helvetica",sans-serif;
margin-top : 15px;
color : #000;
text-transform : capitalize;
display : block-inline;
`
export const BlogTime = styled.span`
font-size : 10px;
margin-bottom : 15px;
color : #525452;
opacity : 0.5;
display : block-inline;
text-align:center;
`
export const Description = styled.p`
max-length : 25;
text-align : left;
font-size : 14px;
display : block-inline;
z-index : 1;
overflow : hidden;
text-overflow : ellipsis;
font-weight: 400;
color: #444444;
margin-top: 2px;
display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`