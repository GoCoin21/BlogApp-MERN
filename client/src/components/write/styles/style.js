import styled from "styled-components";


export const Container = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
text-align : left;

`
export const WImage = styled.img`
width : 800px;
height : 250px;
border-radius : 15px;
outline : none;
margin : 5px auto;
object-fit : cover;

`
export const Label = styled.label`
display : grid;
grid-template-column : repeat(2,1fr);
align-items : center;
margin : 5px 5px 2px 15px
`
export const Icon = styled.i`
width : 25px;
height : 25px;
border: 1px solid;
border-radius : 50%;
display : flex;
align-items : center;
justify-content : center;
color: rgb(129, 125, 125);
font-size : 12px;
cursor : pointer;
`
export const Input = styled.input`
font-family : "Arial,Verdana",sans-serif;
font-size : 25px;
color : #000;
width : 50vw;
display : none;

padding : 20px;
`
export const Form = styled.form`


	position: fixed;
	margin-top: 550px;
	margin-left: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

 
@media only screen and (max-width : 768px){
	
		margin-left: 200px;
		margin-top: 350px;
	

}
`
export const Title = styled.input`
font-family : "Arial,Verdana",sans-serif;
font-size : 25px;
outline : none;
background-color : #FFFDE4;
border: none;
color : #000;
width : 550px;
text-transform : capitalize;
padding : 20px;
`
export const Textarea = styled.textarea`
display : flex;
flex-direction : column;
width : 100%;
line-height : 1.5;
height : 150px;
padding : 12px 20px;
background-color : #f8f8f8;
resize : none;
overflow : hidden;
border : none;
outline : none;
font-size : 16px;
font-family: "Georgia",serif;
`
export const Button = styled.button`
color : #fff;
background-color : #c21f1f;
border-radius : 7px;
padding : 7px 20px;
outline : none;
cursor : pointer;

@media only screen and (max-width:768px){
position : fixed;
left : 0;
color : #fff;
cursor : pointer;

margin-top : 650px;
border-radius : 7px;
padding : 7px 20px;
outline : none;
background-color : #c21f1f;
text-align : center;
line-height : 1.2;

}


`