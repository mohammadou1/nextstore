import Slider from "react-slick";
import './style.less';
import NoSSR from 'react-no-ssr';
import { Fragment } from "react";
import Link from 'next/link';
import { Button } from 'antd';

const Rating = ({ rating = 0 }) => (
    <div className="mb">
        {
            [...Array(5)].map((_, idx) => {
                if ((idx + 1) <= rating) {
                    return <i key={idx} className="fas fa-star star-filled"></i>
                }
                return <i key={idx} className="fas fa-star star-not-filled"></i>
            })
        }
    </div>
);


const itemsSlider = props => {
    const { items = [], slidesToShow = 4, slidesToShowMobile,slidesToShowTablet } = props;

    const settings = {
        arrows: false,
        infinite: false,
        slidesToShow,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: slidesToShowMobile || slidesToShow
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: slidesToShowTablet || slidesToShow
                },
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: slidesToShow
                },
            },
        ]

    };

    return (
        <Slider className="products-slider" {...settings}>
            {items.map(({ id, image, title, slug, rating, price, discount }) => (
                <Fragment key={id}>

                    <div className="product-item ">
                        <Link href={`/items/${id}`} as={`/items/${slug || id}`}>
                            <a >
                                <div className="mb">
                                    <img src={image} alt={title} />
                                </div>
                            </a>
                        </Link>
                        <div className="mb relative details">
                            <NoSSR>
                                <Rating rating={rating} />
                            </NoSSR>
                            <h4 className="text mb product-title">
                                {title}
                            </h4>
                            <p className="primary-color bold mt">
                                {discount ? <Fragment>
                                    ${discount}
                                          <span className="discounted">${price}</span>
                                </Fragment> : <span>${price}</span>}
                            </p>
                            <NoSSR>
                                <div className="product-controls">
                                    <Button type="primary" size="large" onClick={() => console.log('add to cart')}>
                                        <i className="fas fa-cart-plus"></i>
                                    </Button>
                                    <Button size="large" onClick={() => console.log('quick view')}>
                                        <i className="fas fa-eye"></i>
                                    </Button>
                                </div>
                            </NoSSR>
                        </div>
                    </div>

                </Fragment>
            ))}
        </Slider>
    );
}

export default itemsSlider;
