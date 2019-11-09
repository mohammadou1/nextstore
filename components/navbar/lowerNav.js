import { useState } from 'react';
import {
    Menu,
    Row,
    Col,
    Icon,
    Drawer
} from 'antd';
const { Item, SubMenu } = Menu;
import NoSSR from 'react-no-ssr';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { withRouter } from 'next/router';



const links = [
    { title: 'Home', href: '/' },
    { title: 'Brands', href: '/brands', },
    { title: 'New Collection', href: '/collections/new', className: '/new-collection' },
    { title: 'Offers / Specials', href: '/offers', as: '/special-offers', className: 'offer', },
    { title: 'Contact Us', href: '/contact', },
].map(link => <Item key={link.as || link.href}>
    <Link href={link.href}
        as={link.as || link.href}>
        <a className={link.className || ''}>
            {link.title}
        </a>
    </Link>
</Item>
);

const LowerNav = props => {
    const [toggled, setToggled] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 992px)' });
    const { router } = props;
    const toggleMenu = () => setToggled(!toggled);

    const selectedPath = router.pathname !== '/_error' ? router.pathname : router.asPath;
    return (
        <header className="lower-menu sticky">
            <div className="container">
                {!isMobile ? <Row type="flex">
                    <Col sm={24} md={14}>
                        <NoSSR>
                            <Menu selectedKeys={[selectedPath]} mode="horizontal">
                                {links}
                            </Menu>
                        </NoSSR>
                    </Col>
                    <Col className="text-right" sm={24} md={10}>
                        <Menu mode="horizontal">
                            <SubMenu title={<span className="submenu-title-wrapper secondary-color bold">
                                <Icon type="caret-down" /> Account
                                    </span>}>
                                <Item key="setting:1">
                                    <Link href="/login">
                                        <a>  Login </a>
                                    </Link>
                                </Item>
                                <Item key="setting:2">
                                    <Link href="/register">
                                        <a> Register </a>
                                    </Link>
                                </Item>
                            </SubMenu>
                            <Item>
                                <Link href="/cart" as="shopping-cart">
                                    <a className="flex">
                                        <Icon type="shopping-cart" />
                                        <div className="flex-column pb">
                                            My Cart
                                        <span>$0.00</span>
                                        </div>
                                    </a>
                                </Link>
                            </Item>
                        </Menu>
                    </Col>
                </Row> : <div>
                        <span onClick={toggleMenu} className="menu-toggler">
                            <Icon type={toggled ? "menu-fold" : "menu-unfold"} />
                        </span>
                        <Drawer placement="left"
                            visible={toggled}
                            onClose={toggleMenu}>
                            <Menu mode="vertical">
                                {links}
                                <Item key="setting:1">
                                    <Link href="/login">
                                        <a>  Login </a>
                                    </Link>
                                </Item>
                                <Item key="setting:2">
                                    <Link href="/register">
                                        <a> Register </a>
                                    </Link>
                                </Item>
                                <Item>
                                    <Link href="/cart" as="shopping-cart">
                                        <a className="flex">
                                            <Icon type="shopping-cart" />
                                            <div className="flex-column pb">
                                                My Cart
                                        <span>0.00$</span>
                                            </div>
                                        </a>
                                    </Link>
                                </Item>
                            </Menu>
                        </Drawer>
                    </div>}
            </div>
        </header>
    );
}

export default withRouter(LowerNav);
