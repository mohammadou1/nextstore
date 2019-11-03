import './style.less';
import {
    Row,
    Col,
    Input,
    Form,
} from 'antd';
import Link from 'next/link';

const aboutLinks = [
    { title: 'About Us', href: '/about', },
    { title: 'Privacy & Policy', href: '/privacy-policy', },
    { title: 'FAQ', href: '/faq', },
    { title: 'Contact Us', href: '/contact', as: 'contact-us' },
].map((link, idx) => <li key={idx}>
    <Link href={link.href || '/'} as={link.as || link.href || '/'}>
        <a>
            {link.title}
        </a>
    </Link>
</li>);

const pagesLinks = [
    { title: 'Home', href: '/', },
    { title: 'Brands', href: '/brands', },
    { title: 'Collections', href: '/faq', },
    { title: 'Offers', href: '/offers', as: '/special-offers' },
].map((link, idx) => <li key={idx}>
    <Link href={link.href || '/'} as={link.as || link.href || '/'}>
        <a>
            {link.title}
        </a>
    </Link>
</li>);

const accountLinks = [
    { title: 'My Account', href: '/account', },
    { title: 'Order History', href: '/history', as: '/order-history' },
    { title: 'Terms & Conditions', href: '/terms', as: '/terms-conditions' },
    { title: 'Delivery Information', href: '/delivery', as: '/delivery-information' },
].map((link, idx) => <li key={idx}>
    <Link href={link.href || '/'} as={link.as || link.href || '/'}>
        <a>
            {link.title}
        </a>
    </Link>
</li>);

const footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Row type="flex">
                    <Col xl={16} lg={16} md={24} sm={24} xs={24}>
                        <Row type="flex">
                            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                                <h5>
                                    About
                            </h5>
                                <ul>
                                    {aboutLinks}
                                </ul>
                            </Col>
                            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                                <h5>
                                    Pages
                            </h5>
                                <ul>
                                    {pagesLinks}
                                </ul>
                            </Col>
                            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                                <h5>
                                    Account
                            </h5>
                                <ul>
                                    {accountLinks}
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                        <h5>
                            Newsletter
                        </h5>
                        <p>
                            Subscribe to our newsletter get 10% off your first purchase.
                        </p>
                        <Form onSubmit={e => {
                            e.preventDefault();
                            console.log(e.target.email.value);
                        }}>
                            <Input placeholder="Email"
                                name="email"
                                addonAfter={<i className="far fa-paper-plane" aria-hidden="true">
                                </i>} />
                        </Form>
                    </Col>
                </Row>
            </div>
            <hr />
            <div className="text-center footer-end">
                <p>

                    Powered by  <a target="_blank" href="https://github.com/mohammadou1/nextstore">
                        NextStore
                    </a> &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}

export default footer;
