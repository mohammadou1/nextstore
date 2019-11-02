import { useState } from "react";
import Slider from "react-slick";
import Link from 'next/link';
const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    lazyLoad:true,
    slidesToScroll: 1,

};
const PrevArrow = props => {
    const { className, onClick } = props;
    return (<div className={className} onClick={onClick}>
        <i className="fas fa-chevron-left"></i>
    </div>);
}
const NextArrow = props => {
    const { className, onClick } = props;
    return (<div className={className} onClick={onClick}>
        <i className="fas fa-chevron-right"></i>
    </div>);
}




const adSlider = () => {


    const [isSliding, setIsSliding] = useState(false);

    // * to check if slick slider is being dragged to prevent conflict between click and swipe.
    const isSlidingHandler = e => {
        if (isSliding) {
            e.preventDefault();
        }
    }

    const ads = [
        { id: 1, src: "/images/slider.jpg", href: "items/some-item-slug" },
        { id: 2, src: "/images/slider.jpg", href: "items/some-item-slug" },
    ].map((ad, idx) => <div key={idx}>

        <Link href={`/items/${ad.id}` || '/'}
            as={`/items/${ad.href || ad.id}`}>
            <a onClick={isSlidingHandler}>
                <img className="img-fluid" src={ad.src} />
            </a>
        </Link>

    </div>);

    return (
        <Slider beforeChange={() => setIsSliding(true)}
            afterChange={() => setIsSliding(false)}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}  {...settings}>
            {ads}
        </Slider>
    );
}

export default adSlider;
