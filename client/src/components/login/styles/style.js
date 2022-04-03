import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../../images/background5.jpg";
export const Container = styled.div`
margin : 300px;
display : grid;
grid-template-columns : min-content;
align-items : center;
justify-content : center;
padding : 15px 0px;
background-image : url(${background});


@media only screen and (max-width :851px) and (min-width : 393px){
	margin : 250px auto;
	margin-left : 5px;
}

`

export const LoginHeader = styled.span`
color : #fff;
font-size : 50px;
font-family : "Times New Roman,Georgia",serif;
text-align : center;
font-weight : 500;
margin-bottom : 20px;
`
export const LoginLabel = styled.label`
color : #fff;
font-size : 15px;
text-align : left;
padding : 3px 0px;
font-family : "helvetica",sans-serif;

`
export const LoginInput = styled.input`
background : #fff;
border-radius : 3px;
outline: none;
margin-bottom:5px;
line-spacing : 1.5;
color : #000;
padding : 5px 5px;
padding-right : 12px;
`
export const Button = styled.button`
 box-sizing : border-box;
 color : #fff;
 cursor:  pointer;
 background-color : #605bc2;
  text-align : center;
  font-size : 20px;
  padding : 3px 65px;
  border-radius : 7px;
  outline : none;
  margin-top : 5px;
  margin-bottom: 10px;
`
export const Register = styled(Link)`
position : fixed;
right : 0;
color : #fff;
border-radius : 7px;
padding : 7px 20px;
outline : none;
background-color : #c21f1f;
text-align : center;
line-height : 1.2;

`