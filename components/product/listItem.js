import NoSSR from 'react-no-ssr';
import { Fragment } from "react";
import Link from 'next/link';
import {
    Row,
    Col,
} from 'antd';
import Truncate from 'react-truncate';
import Controls from './controls';
import Rating from './rating';
import './listItem.less';


const listItem = props => {
    const { item,togglePreview } = props;
    const { id, image, title, slug, rating, price, discount, body: brief } = item;


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
                            <a>
                                <h3 className=" mb product-title">
                                    <Truncate lines={3} ellipsis={<span>...</span>}>
                                        {title}
                                    </Truncate>
                                </h3>
                            </a>
                        </Link>
                        <div className="mt mb">
                            <NoSSR>
                                <Rating rating={rating} />
                            </NoSSR>
                        </div>
                        <p className="text">
                            <Truncate lines={3} ellipsis={<span>...</span>}>
                                {brief}
                            </Truncate>
                        </p>
                        <p className="primary-color bold mt">
                            {discount ? <Fragment>
                                ${discount}
                                <span className="discounted">${price}</span>
                            </Fragment> : <span>${price}</span>}
                        </p>
                        <NoSSR>
                            <Controls addToCardHandler={() => console.log('add to cart')} previewHandler={togglePreview} />
                        </NoSSR>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default listItem;
