import styled from "styled-components"

export const Container = styled.div`

position : relative;
  height: fit-content;
  margin: 0 0 0 60px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
 
 
  @media only screen and (max-width : 851px) and (min-width : 393px){
     display : none;	
}
  
`
export const SContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
 margin-top : 25px;
  
  
`
export const Header = styled.h2`
 margin: 10px;
  padding: 5px;
 
  border-top: solid 1px #a7a4a4;
  border-bottom: solid 1px #a7a4a4;
  text-align: center;
  font-family: "Varela Round", sans-serif;
  font-size: 12px;
  line-height: 19px;
  color: #222222;
  font-weight: 600;
  width : 250px;
  text-transform : uppercase;
`
export const Img = styled.img`

object-fit : cover;
border-radius : 25px;
margin-top : 15px;
width : 250px;
height:250px

`
export const Desc = styled.p`
text-align : left;
color : #000;
line-spacing : 1.6;
background : #fff;
font-family : "courier new",monospace;
padding : 30px;
width : 250px;
`
export const CategoryTitle = styled.h2`
font-family : "Arial,Verdana",sans-serif;
text-transform : uppercase;
color : #000;
line-height : 19px;
width : 250px;
font-size : 12px;
font-weight : 600;
text-align : center;
background : #fff;
margin-top : 15px;
border-top: solid 1px #a7a4a4;
  border-bottom: solid 1px #a7a4a4;
  text-decoration : none;
`
export const SidebarLink = styled.ul`
color : #000;
list-style-type : none;


margin-bottom : 30px;
li{
	text-decoration : none;
	display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
}
  
`
export const FollowSideTitle = styled.h2`
font-family : "Arial,Verdana",sans-serif;
text-transform : uppercase;
color : #000;
background : #fff;
font-size : 12px;
font-weight : 600;
margin-bottom : 10px;
border-top: solid 1px #a7a4a4;
  border-bottom: solid 1px #a7a4a4;
  
`
export const FollowLink = styled.div`

display : flex;
align-items : center;

justify-content : center;
width : 180px;
 margin-top : 15px;
 margin-left : 10px;
 font-size : 16px;
`