import React from 'react'
import { WatchWrapper,ProductWrap,ProductImg,H4,Text,PriceTag,ButtonCard} from '../StyledComponent/Styled.Watch';
import { StarReview } from '../StyledComponent/Styled.Start';
import watchpic from '../../assets/image/watchpic.jpg';

function Watch() {
    return (
        <WatchWrapper>
            <ProductWrap />
            <ProductImg src={watchpic} alt="watch.jpg" />
            <H4>CLUSE</H4>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</Text>
            <PriceTag color="#2CC9A6">$60</PriceTag>
            <div style={{textAlign:'center'}}>
                <StarReview />
                <StarReview />
                <StarReview/>
            </div>    
            <ButtonCard color="#FFFFFF" bgColor="#28C8A4">Add To Card</ButtonCard>
        </WatchWrapper>
    );
}

export default Watch
