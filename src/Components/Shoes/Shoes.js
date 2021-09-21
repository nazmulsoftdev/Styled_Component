import React from 'react'
import { ShoesWrapper, ProductWrap, ProductImg, H4, Text, PriceTag, ButtonCard } from '../StyledComponent/Styled.Shoes';
import { StarReview } from '../StyledComponent/Styled.Start';
import Shoeshpic from '../../assets/image/Shoes.jpg';

function Shoes() {
    return (
        <ShoesWrapper>
        <ProductWrap />
        <ProductImg src={Shoeshpic} alt="watch.jpg" />
        <H4>NIKE Shoes</H4>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</Text>
        <PriceTag color="#2CC9A6">$60</PriceTag>
        <div style={{textAlign:'center'}}>
            <StarReview/>
            <StarReview/>
            <StarReview/>
            <StarReview/>
         </div>  
        <ButtonCard color="#FFFFFF" bgColor="#FB552F">Add To Card</ButtonCard>
      </ShoesWrapper>
    )
}

export default Shoes
