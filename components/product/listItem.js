import NoSSR from 'react-no-ssr';
import { Fragment } from "react";
import Link from 'next/link';
import {
    Row,
    Col,
    Button
} from 'antd';
import Truncate from 'react-truncate';
import './listItem.less';


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


const listItem = props => {
    const { item } = props;
    const { id, image, title, slug, rating, price, discount,body:brief } = item;

    return (
        <div className="product-item list-item ">
            <Row type="flex">
                <Col xl={6} lg={6} md={8} sm={24} xs={24}>
                    <Link href={`/items/${id}`} as={`/items/${slug || id}`}>
                        <a >
                            <div className="mb product-image">
                                <img src={image} alt={title} />
                            </div>
                        </a>
                    </Link>
                </Col>
                <Col xl={18} lg={18} md={16} sm={24} xs={24}>
                    <div className="details">
                        <Link href={`/items/${id}`} as={`/items/${slug || id}`}>
                            <h4 className="text mb product-title">
                                <Truncate lines={3} ellipsis={<span>...</span>}>
                                    {title}
                                </Truncate>
                            </h4>
                        </Link>
                        <div className="mt mb">
                            <NoSSR>
                                <Rating rating={rating} />
                            </NoSSR>
                        </div>
                        <p className="text">
                            {brief}
                        </p>
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
                </Col>
            </Row>
        </div>
    );
}

export default listItem;
