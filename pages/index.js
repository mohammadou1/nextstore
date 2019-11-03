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
import Partners from '../components/partners/partners';
import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';



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
    component: <ItemsSlider slidesToShow={5} slidesToShowMobile={2} slidesToShowTablet={3} items={tempItems} />,
  },

];

const services = [
  { icon: 'fas fa-truck', title: 'Free Delivery', content: 'On orders with $100 and more.' },
  { icon: 'fas fa-hand-holding-usd', title: 'Money Back', content: 'Money back guarantee within 30 days.' },
  { icon: 'fas fa-headset', title: '24 Hours Support', content: 'Call us anytime you want.' },
  { icon: 'fas fa-gifts', title: 'Gifts On Payment', content: 'Earn a gift for each online payment.' },
];

const partners = [
  { id: 1, imageSrc: '/images/partner.jpg', name: 'Partner' },
  { id: 2, imageSrc: '/images/partner.jpg', name: 'Partner' },
  { id: 3, imageSrc: '/images/partner.jpg', name: 'Partner' },
  { id: 4, imageSrc: '/images/partner.jpg', name: 'Partner' },
  { id: 5, imageSrc: '/images/partner.jpg', name: 'Partner' },
  { id: 6, imageSrc: '/images/partner.jpg', name: 'Partner' },
  { id: 7, imageSrc: '/images/partner.jpg', name: 'Partner' },
  { id: 8, imageSrc: '/images/partner.jpg', name: 'Partner' },
];
const Index = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });
  const featuredTitle = <h1>
    Featured Items
</h1>;

  return (<Layout>
    <Fragment>
      <div className="container mt-large">
      <Row type="flex" className="justify-content-center mb-large">
        <Col xl={22} lg={22} md={24} sm={24} xs={24}>
          <NoSSR onSSR={<Loading />}>
            <AdSlider />
          </NoSSR>
        </Col>
      </Row>
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
            {!isMobile && <Col className="px" xl={4} lg={0} md={0} sm={24} xs={24}>
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
            </Col>}
            <Col xl={20} lg={24} md={24} sm={24} xs={24}>
              <ItemsSlider slidesToShow={4} slidesToShowMobile={2} slidesToShowTablet={3} items={tempItems} />
            </Col>
          </Row>
          <div className="mt-large">
            <div className="services">
              <Row type="flex">
                <NoSSR onSSR={<Loading />}>
                  {services.map((service, idx) => <Col key={idx} xl={6} lg={6} md={12} sm={12} xs={24}>
                    <div className="service-container">
                      <div >
                        <i className={service.icon}></i>
                      </div>
                      <div className="content">
                        <h4>
                          {service.title}
                        </h4>
                        <p className="text">
                          {service.content}
                        </p>
                      </div>
                    </div>
                  </Col>)}
                </NoSSR>
              </Row>
            </div>
          </div>
          <div className="mt-large mb-large">
            <NoSSR onSSR={<Loading />}>
              <Partners partners={partners} />
            </NoSSR>
          </div>
        </div>
      </div>
    </Fragment>
  </Layout>);
}

export default Index;

