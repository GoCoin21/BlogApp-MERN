import styled from "styled-components";



export const Container = styled.div`
flex: 9;
padding: 20px;
padding-right: 0;

`
export const Image = styled.div`

img{
      width : 790px;
	  height : 550px;
	  
	  border-radius : 5px;
}
h1{
	text-align : center;
	font-family : 'Georgia',serif;
	font-size : 28px;
	margin : 10px;
	margin-top : 5px;
	color : #000;
}
@media only screen and (max-width:768px){
	h1{
		font-size: 32px;
		margin-top : 30px;
		margin-right:60px;
	}
	img{
      width : 790px;
	  height : 550px;
	  
	  border-radius : 5px;
}
}
span{
	margin-left: 10px;
	display:flex;
	justify-content : space-around;
  cursor: pointer;
   float : right;
   font-size : 16px;
}
`
export const Info = styled.div`
display : flex;
justify-content : space-between;
font-size : 16px;
color : #be9656;
margin-bottom : 20px;
font-family: "Varela Round", Arial, Helvetica, sans-serif;

h3{
	margin-left : 5px;
	margin-top : 11px;
	font-size : 45px;
}
@media only screen and (max-width:768px)
{
	display : flex;
	flex-wrap : wrap;
}

`
export const Description = styled.p`
color : #666;
font-size : 18px;
line-height : 25px;
@media only screen and (max-width:768px)
{
	font-size : 32px;
    line-height : 40px;
}
`
