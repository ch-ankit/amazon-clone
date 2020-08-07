import React from 'react';
import './Home.css'
import Product from './Product'

function Home(props) {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX1500_FMwebp_.jpg" alt="" />
            <div className="home__row">
                <Product
                    id={12345}
                    title="The Legend of Lost Matrix"
                    price={5000}
                    rating={5}
                    image="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
                />
                <Product
                    id={12345}
                    title="Headphone"
                    price={5000}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51sAtKgDkDL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={12345}
                    title="Fitbit Watch"
                    price={5000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_UL160_.jpg"
                />
                <Product
                    id={12345}
                    title="Bajaj Kitchen Robust Mixers"
                    price={5000}
                    rating={5}
                    image="https://prilin.com/wp-content/uploads/2020/01/Bajaj-Glory-500-1.jpg"
                />
                <Product
                    id={12345}
                    title="Colors Vacuum Cleaner-4500W"
                    price={5000}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/617+GZRV+jL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={12345}
                    title="Samsung 55'' UHD Curved Smart TV"
                    price={5000}
                    rating={5}
                    image="https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$"
                />
            </div>
        </div>
    );
}

export default Home;