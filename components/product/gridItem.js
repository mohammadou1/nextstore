import NoSSR from 'react-no-ssr';
import { Fragment } from "react";
import Link from 'next/link';
import { Button } from 'antd';
import Truncate from 'react-truncate';
import './gridItem.less';


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


const gridItem = props => {
    const {item} = props;
    const { id, image, title, slug, rating, price, discount } = item;

    return (
        <div className="product-item grid-item">
        <Link href={`/items/${id}`} as={`/items/${slug || id}`}>
            <a >
                <div className="mb product-image">
                    <img src={image} alt={title} />
                </div>
            </a>
        </Link>
        <div className="mt mb">
            <NoSSR>
                <Rating rating={rating} />
            </NoSSR>
        </div>
        <div className="mb details">
            <Link href={`/items/${id}`} as={`/items/${slug || id}`}>
                <h4 className="text mb product-title">
                    <Truncate lines={2} ellipsis={<span>...</span>}>
                        {title}
                    </Truncate>
                </h4>
            </Link>
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
    );
}

export default gridItem;
