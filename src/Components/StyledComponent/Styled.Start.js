import styled from "styled-components";
import StarComponent from "../StartComponent/StarComponent";

export const StarReview = styled(StarComponent)`
 color:${(props)=>props.color};
 display: inline;
 text-align: center;
`;