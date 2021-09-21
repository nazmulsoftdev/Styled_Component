import styled from "styled-components";

export const WatchWrapper = styled.div`
  width: 280px;
  padding: 15px;
  background-color: #FFFFFF;
  position: relative;
  border-radius: 5px;
  margin: 10px;

`;


export const ProductWrap = styled.div`
padding: 60px;
background-color: #F5F5F5;
margin-top: 20px;

`;

export const ProductImg = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
position: absolute;
left: 0px;
right: 0px;
margin: auto;
top: 0px;
bottom: 250px;
`;

export const H4 = styled.h4`
text-align: center;
`;

export const Text = styled.p`
text-align: center;
`;

export const PriceTag = styled.p`
text-align: center;
color: ${(props) => props.color};
font-weight: bold;
font-size: 1.5em;
`;


export const ButtonCard = styled.button`
width: 280px;
padding: 15px;
color:${(props) => props.color};
background-color: ${(props) => props.bgColor};
box-sizing: border-box;
border: none;
&:hover{
cursor: pointer;
}
`;