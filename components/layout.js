// import stylesheet from 'antd/dist/antd.min.css';
import '../styles/index.less';
import Navbar from './navbar/navbar';

const Layout = ({ children }) => {

    return (<div>
        {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}

            <Navbar />
        <main>
            {children}
        </main>
        <footer>

        </footer>
    </div>);
}

export default Layout;