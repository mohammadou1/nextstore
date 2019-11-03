// import stylesheet from 'antd/dist/antd.min.css';
import '../styles/index.less';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', _ => {
    console.log(_);
    NProgress.start()
});
Router.events.on('routeChangeComplete', _ => NProgress.done());
Router.events.on('routeChangeError', _ => NProgress.done());
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