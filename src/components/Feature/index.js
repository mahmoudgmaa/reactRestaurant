import React from 'react'
import {FeatureButton, FeatureContainer} from "./FeatureElements"
const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>Large eastern Tuna Pizza with Mozzarella</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
