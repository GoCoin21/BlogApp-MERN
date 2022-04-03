import styled from "styled-components";

export const Container = styled.div`
display : block;
flex-direction : column;
align-items : center;
justify-content : space-between;
box-sizing : border-box;
margin-top : 25px;
`
export const Header = styled.span`
font-family : "Times New Roman",serif;
font-size: 45px;
color : teal;
margin-left : 125px;
text-transform : capitalize;
`
export const Image = styled.img`
border-radius : 50%;
width : 50px;
height : 50px;
outline : none;
object-fit: cover;
`
export const SubHead = styled.span`
font-family : "Arial",sans-serif;
font-size : 12px;
color : red;
margin-right : 125px;
text-transform : capitalize;
cursor : pointer;
`
export const SetLabel = styled.label`
color : #000;
text-transform : capitalize;
font-size: 25px;
font-family : "Georgia",serif;
text-align : left;

`
export const Input = styled.input`
font-family : "Arial,Verdana",sans-serif;
font-size : 15px;
color : #000;
width : 50vw;
border:none;

padding : 20px;

`
export const Button = styled.button`
 box-sizing : border-box;
 color : #fff;
 cursor:  pointer;
 background-color : #4A58F2;
  text-align : center;
  font-size : 20px;
  padding : 3px 55px;
  border-radius : 7px;
  outline : none;
  margin-top : 5px;
  margin-bottom: 10px;
`
