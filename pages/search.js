import { useState } from 'react';
import Layout from '../components/layout';
import axios from '../utils/axios-instance';
import {
    Row,
    Col,
    Pagination,
} from 'antd';
import Filters from '../components/searchPage/searchFilter';
import Controls from '../components/searchPage/searchControls';
import Product from '../components/product/product';
import '../styles/searchPage.less';
import Router from 'next/router';



const search = props => {
    const { query, items = [], error } = props;
    const [display, setDisplay] = useState('list');
    const paginateHandler = value => {
        console.log(value);
        const obj = { ...query };
        obj.skip = (value - 1) * obj._limit;

        searchHandler(obj);
    }

    const searchHandler = obj => {
        let search = '';
        Object.keys(obj).forEach(key => search += `${key}=${obj[key]}&`);
        search = search.slice(0, -1);
        Router.push(`/search?${search}`);
    }

    const displayChangedHandler = type => {
        setDisplay(type);
    }
    return (
        <Layout>
            <div className="container py-large">
                {/* <h1>{query._title}</h1> */}

                <Row type="flex">
                    <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                        <Filters query={query} searchHandler={searchHandler} />
                    </Col>
                    <Col xl={18} lg={18} md={24} sm={24} xs={24}>
                        <div className="search-results">
                            <Controls query={query}
                                searchHandler={searchHandler}
                                displayChangedHandler={displayChangedHandler} />
                            <div>
                                <Row type="flex">
                                    {items.map(item => {
                                        // ! just faking some data that jsonplaceholder don't return
                                        item.price = 200;
                                        item.image = '/images/item1.jpg';
                                        item.discount = item.id % 3 === 0 ? 150 : null;
                                        if (display === 'list') {
                                            return <Col key={item.id} xl={24} lg={24} md={24} sm={24} xs={24}>
                                                <Product type="list" item={item} />
                                            </Col>
                                        }

                                        return <Col key={item.id} xl={6} lg={8} md={8} sm={12} xs={12}>
                                            <Product type="grid" item={item} />
                                        </Col>;
                                    })}
                                </Row>
                            </div>
                            <div className="paginate mt-large">
                                <Pagination onChange={paginateHandler}
                                    defaultCurrent={1}
                                    total={Math.ceil(1000 / query._limit)} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
}

search.getInitialProps = async ({ query }) => {
    try {
        let search = '';
        // ? why using this?
        // * to map through the query and assign a query string/
        Object.keys(query).forEach(key => search += `${key}=${query[key]}&`);

        search = search.slice(0, -1);
        // * get request from jsonplaceholder to get posts matching this fake query.
        const response = await axios.get(`posts?${search}`);
        return { query, items: response.data }
    } catch (error) {

        // ! this can be changed to your prefering, what am doing here is 
        // ! checking the status code to handle errors (I think it's better for multilanguage)
        return { query, error: error.response ? error.response.status : '500' };
    }


}

export default search;
