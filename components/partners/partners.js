import Slider from "react-slick";
import './style.less';

const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 7,
    lazyLoad: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 2
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            },
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 6
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 7
            },
        },
    ]

};
const partners = props => {
    return (
        <div className="partners-slider">
            <Slider {...settings}>
                {props.partners.map(partner => <div key={partner.id} className="partner">
                    <img src={partner.imageSrc} alt={partner.name} />
                </div>)
                }
            </Slider>
        </div>
    );
}

export default partners;
