import App from 'next/app';

// ! Don't remove this import, it will cause a problem with importing less files,
// ! it's a bug with next-less package, wait for an offical update for the package
import './app.less';

class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}

export default MyApp
