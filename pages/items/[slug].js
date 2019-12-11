import { Fragment } from "react";
import Layout from "../../components/layout";
import { Row, Col } from "antd";
import Meta from "../../components/meta/meta";
import { useRouter } from "next/router";
import { DOMAIN_URL } from "../../utils/URLS";

// * NextJS can handle routing in multiple ways
// * in fact you can modify it via express server as well
// * but it recommends 2 ways
// * first use query params, which is easy but confusing when you want a slashed url
// * the second one called "clean url"
// * which what am using here, its to treat this "dynamic" page that depends on a param received from the route
// * adding [] to the file name will make next relize that this page will recieve a prop inside props.query (like query param) named as the file name inside the []
// * this page is called [slug].js, so the prop will be named slug
// ! remember that the folder pathing is important, since now inside items folder, it will be as followed /items/[slug]

const fake = {
  seo: {
    title: "Mobile Phone",
    meta_keywords: "Mobile,Phone,Mobile Phone",
    meta_description: "Fast, cheap and strong mobile phone.",
    robots: "index,follow",
    og_type: "product",
    og_image: "/images/partner.jpg",
    og_description: "The best mobile phone ever."
  },
  name: ""
};
const Item = ({ slug }) => {
  const { seo } = fake;
  return (
    <Layout>
      
      <Fragment>
        <Meta
          title={seo.title}
          description={seo.meta_description}
          keywords={seo.meta_keywords}
          robots={seo.robots}
          ogTitle={seo.title}
          ogType={seo.og_type}
          ogImage={seo.og_image}
          ogDescription={seo.og_description}
          ogUrl={`${DOMAIN_URL}${useRouter().asPath}`}
        />
        <div className="mt-large container">
          <Row type="flex">
            <Col xl={18} lg={18} md={24} sm={24} xs={24}>
              LEFT SIDE
            </Col>
            <Col xl={6} lg={6} md={24} sm={24} xs={24}>
              RIGHT SIDE
            </Col>
          </Row>
        </div>
      </Fragment>
    </Layout>
  );
};
Item.getInitialProps = async props => {
  const { slug } = props.query;
  // * We can fetch the item using the slug recieved.
  return {
    slug
  };
};

export default Item;
