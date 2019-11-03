import Layout from '../components/layout';
import {withRouter} from 'next/router';


const error = (props) => {

    const { code } = props;
    const statusCode = code ? code : 404;



    return <Layout title={statusCode}>
        <p>
            {code ? `Something went wrong :( server responeded with ${code}` : 'Page not found :('}
        </p>
        <p>
            Error occured at : {props.router.asPath}
        </p>
    </Layout>
}



export default withRouter(error);