import Layout from '../components/layout';
import NoSSR from 'react-no-ssr';
import {
  Row,
  Col,
} from 'antd';
import Loading from '../components/loading/loading';
import AdSlider from '../components/adSlider/adSlider';
import TabbedItems from '../components/tabbedItems/tabbedItems';
import ItemsSlider from '../components/itemsSlider/itemsSlider';
import Banner from '../components/banner/banner';
import Widget from '../components/widget/widget';
import { Fragment } from 'react';



const tempItems = [
  {
    id: '1',
    image: '/images/item1.jpg',
    title: 'Item name or title',
    slug: 'item-name-slug',
    rating: 4,
    price: 250,
    discount: 150,
  },
  {
    id: '1',
    image: '/images/item1.jpg',
    title: 'Item name or title',
    slug: 'item-name-slug',
    rating: 4,
    price: 250,
    discount: 150,
  },
  {
    id: '1',
    image: '/images/item1.jpg',
    title: 'Item name or title',
    slug: '/item-name-slug',
    rating: 4,
    price: 250,
  },
  {
    id: '1',
    image: '/images/item1.jpg',
    title: 'Item name or title',
    slug: 'item-name-slug',
    rating: 4,
    price: 250,
  },
  {
    id: '1',
    image: '/images/item1.jpg',
    title: 'Item name or title',
    slug: 'item-name-slug',
    rating: 4,
    price: 250,
  },
];
const tabs = [
  {
    title: "Sales",
    component: <ItemsSlider slidesToShow={5} slidesToShowMobile={2} slidesToShowTablet={3} items={tempItems} />,
  },
  {
    title: "Best Seller",
    component: <ItemsSlider slidesToShow={5} slidesToShowMobile={2} slidesToShowTablet={3}  items={tempItems} />,
  },
];

const Index = () => {

  const featuredTitle = <h1>
    Featured Items
</h1>;

  return (<Layout>
    <Fragment>
      <Row type="flex" className="justify-content-center">
        <Col xl={22} lg={22} md={24} sm={24} xs={24}>
          <NoSSR onSSR={<Loading />}>
            <AdSlider />
          </NoSSR>
        </Col>
      </Row>
      <div className="container mt-large">
        <TabbedItems extraContent={featuredTitle} tabs={tabs} />
        <div className="mt-large text-center">
          <NoSSR onSSR={<Loading />}>
            <Banner imageSrc="/images/banner.gif">

              {/* <div className="banner-content">
                <h3 className="banner-title">
                  banner title
                </h3>
                <p className="banner-description">
                  Some banner text here.
                </p>
              </div> */}

            </Banner>
          </NoSSR>
        </div>
        <div className="mt-large">
          <Row type="flex">
            <Col  className="px" xl={4} lg={0} md={0} sm={24} xs={24}>
              <Widget imageSrc="/images/sample2.jpg" href="/some-url" hrefAs="some-slug-url">
                <div className="widget-content overlay">
                    <h4>
                      Some Title Here
                    </h4>
                    <p>
                      some text here to describe an advertisement or something.
                    </p>
                </div>
              </Widget>
            </Col>
            <Col xl={20} lg={24} md={24} sm={24} xs={24}>
              <ItemsSlider slidesToShow={4} slidesToShowMobile={2}  slidesToShowTablet={3} items={tempItems} />
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  </Layout>);
}

export default Index;

