import NoSSR from 'react-no-ssr';
import { Fragment } from "react";
import Link from 'next/link';
import Truncate from 'react-truncate';
import Controls from './controls';
import Rating from './rating';
import './gridItem.less';


const gridItem = props => {
    const { item, togglePreview } = props;
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
                    <a>
                        <h4 className="text mb product-title">
                            <Truncate lines={2} ellipsis={<span>...</span>}>
                                {title}
                            </Truncate>
                        </h4>
                    </a>
                </Link>
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
        </div>
    );
}

export default gridItem;
