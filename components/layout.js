// import stylesheet from 'antd/dist/antd.min.css';
import '../styles/index.less';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
const Layout = ({ children }) => {

    return (<div>
        {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}

            <Navbar />
        <main>
            {children}
        </main>
            <Footer/>
    </div>);
}

export default Layout;