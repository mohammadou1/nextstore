import { useState, useEffect } from "react";
import { Modal, Row, Col, Input, Button } from "antd";
import Link from "next/link";
import axios from "../../utils/axios-instance";
import Skeleton from "react-loading-skeleton";
import Magnifier from "react-magnifier";
import Rating from "./rating";
import "./productPreview.less";

const ProductSkelton = () => (
  <Row type="flex">
    <Col xl={8} lg={8} md={24} sm={24} xs={24}>
      <Skeleton height={200} />
    </Col>
    <Col xl={16} lg={16} md={24} sm={24} xs={24}>
      <div className="preview-details-skeleton">
        <Skeleton height={35} />
        <Skeleton count={3} />
      </div>
    </Col>
  </Row>
);

const Image = ({ src, alt }) => <Magnifier src={src} alt={alt} />;

const productPreview = ({ preview, toggle, productID }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`/posts/${productID}`);
      setTimeout(() => setProduct(response.data), 1000);
    };
    getProduct();
  }, []);

  const quantityChangedHandler = e => setQuantity(e.target.value || 0);

  return (
    <Modal
      width={800}
      visible={preview}
      onCancel={toggle}
      footer={null}
      centered
    >
      <div className="preview">
        {!product ? (
          <ProductSkelton />
        ) : (
          <Row type="flex">
            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
              <Image src="/images/item1.jpg" alt="alt" />
            </Col>
            <Col xl={16} lg={16} md={24} sm={24} xs={24}>
              <div className="preview-details">
                <Link
                  href={`/items/${product.id}`}
                  as={`/items/${product.slug || product.id}`}
                >
                  <a>
                    <h3 className="product-title">{product.title}</h3>
                  </a>
                </Link>
                <Rating rating={4} />
                <ul>
                  <li>
                    <span>Availability:</span>
                    Out of Stock
                  </li>
                  <li>
                    <span>Product Code:</span>
                    131
                  </li>
                  <li>
                    <span>Ex Tax:</span>
                    $10
                  </li>
                </ul>
                <p className="primary-color bold  discounted">$250</p>
                <p className="primary-color bold mt price">$200</p>

                <div className="flex controls">
                  <Input
                    type="number"
                    min={0}
                    defaultValue={0}
                    onChange={quantityChangedHandler}
                  />
                  <Button
                    type="primary"
                    size="large"
                    disabled={quantity <= 0}
                    onClick={() => addToCardHandler()}
                  >
                    <i className="fas fa-cart-plus"></i>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </Modal>
  );
};

export default productPreview;
