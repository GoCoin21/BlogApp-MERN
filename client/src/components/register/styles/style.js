import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../../images/background4.jpg";
export const Container = styled.div`
margin : 300px;
display : grid;
grid-template-columns : min-content;
align-items : center;
justify-content : center;
padding : 15px 0px;
background-image : url(${background});
object-fit : cover;


@media only screen and (max-width :851px) and (min-width : 393px){
	margin : 250px auto;
	margin-left : 0px;
}

`

export const RegisterHeader = styled.span`
color : #000;
font-size : 50px;
font-family : "Times New Roman,Georgia",serif;
text-align : center;
font-weight : 500;
margin-bottom : 20px;
`
export const RegisterLabel = styled.label`
color : #000;
font-size : 15px;
text-align : left;
padding : 5px 0px;
font-family : "helvetica",sans-serif;

`
export const RegisterInput = styled.input`
background : #fff;
border-radius : 3px;
outline: none;
margin-bottom:5px;
line-spacing : 1.5;
color : #000;
padding : 7px 7px;
padding-right : 12px;
`
export const Button = styled.button`
 box-sizing : border-box;
 color : #fff;
 cursor:  pointer;
 background-color : #000;
  text-align : center;
  font-size : 20px;
  padding : 3px 55px;
  border-radius : 7px;
  outline : none;
  margin-top : 5px;
  margin-bottom: 10px;
`
export const Login = styled(Link)`
position : fixed;
right : 0;
color : #fff;
border-radius : 7px;
padding : 7px 20px;
outline : none;
background-color:lightcoral;
text-align : center;
line-height : 1.2;

`