import React from 'react'
import Product from './Product'
import './Home.css'

function Home(){
    return(
<div className="home">
    <img alt="" 
    src="" 
    className="home__image"/>
    <div className="home__row">
        <Product
        id="1"
        title="Book For Pray Learning"
        price={15}
        rating={0}
        image="/images/20.png"
        />

     <Product
        id="2"
        title="Samsong 15"
        price={210}
        rating={0}
        image="/images/13.png"
        />

    <Product
        id="3"
        title="HTC 9"
        price={204}
        rating={0}
        image="/images/14.png"
        /> 

    </div>

    


    <div className="home__row1">
        <Product
        id="4"
        title="Huawi 10"
        price={320}
        rating={0}
        image="/images/15.png"
        />

     <Product
        id="5"
        title="i Phone 14"
        price={11.23}
        rating={0}
        image="/images/16.png"
        />

    <Product
        id="6"
        title="Change your life"
        price={11.23}
        rating={0}
        image="/images/17.png"
        /> 

    </div>



    <div className="home__row2">
        <Product
        id="7"
        title="Success Keys"
        price={11.23}
        rating={0}
        image="/images/18.png"
        />

     <Product
        id="8"
        title="Azkar Almuslim"
        price={11.23}
        rating={0}
        image="/images/19.png"
        />

    <Product
        id="9"
        title="How to Pray"
        price={11.23}
        rating={0}
        image="/images/20.png"
        /> 

    </div>





    








</div>
    )
}

export default Home