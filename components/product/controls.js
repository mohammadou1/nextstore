import { Button } from 'antd';

const controls = ({addToCardHandler,previewHandler}) => {
    return (
        <div className="product-controls">
            <Button type="primary" size="large" onClick={() => addToCardHandler()}>
                <i className="fas fa-cart-plus"></i>
            </Button>
            <Button size="large" onClick={() => previewHandler()}>
                <i className="fas fa-eye"></i>
            </Button>
        </div>
    );
}

export default controls;
