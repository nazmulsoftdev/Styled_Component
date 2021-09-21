import React from 'react'
import ShartImg from '../../assets/image/tshart.jpg';
import { StarReview } from '../StyledComponent/Styled.Start';
import { WatchWrapper, ProductWrap, ProductImg, H4, Text, PriceTag, ButtonCard } from '../StyledComponent/Styled.Watch';



function Shart() {
    return (
        <WatchWrapper>
        <ProductWrap />
        <ProductImg src={ShartImg} alt="shart.jpg" />
        <H4>CLUSE</H4>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</Text>
        <PriceTag color="#2CC9A6">$60</PriceTag>
         <div style={{textAlign:'center'}}>
            <StarReview/>
            <StarReview/>
            <StarReview/>
            <StarReview/>
         </div>    
        <ButtonCard color="#FFFFFF" bgColor="#FFB42E">Add To Card</ButtonCard>
    </WatchWrapper>
    )
}

export default Shart
