import Slider from "react-slick";
import Product from '../product/product';
import './style.less';


const itemsSlider = props => {
    const { items = [], slidesToShow = 4, slidesToShowMobile, slidesToShowTablet } = props;

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
            {items.map(item => <Product key={item.id} item={item}/>)}
        </Slider>
    );
}

export default itemsSlider;
