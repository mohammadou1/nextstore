

import { Fragment } from 'react';
import UpperNav from './upperNav';
import LowerNav from './lowerNav';
import './style.less';

const Navbar = () => {


    return (
        <Fragment>
            <UpperNav />
            <LowerNav />
        </Fragment>
    );
}

export default Navbar;
