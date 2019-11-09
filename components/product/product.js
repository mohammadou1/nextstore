
import { useState } from 'react';
import GridItem from './gridItem';
import ListItem from './listItem';

import dynamic from 'next/dynamic';
const ProductPreview = dynamic(import('./productPreview'), {
    ssr: false,
});



const product = props => {
    const { item, type = 'grid' } = props;
    const [preview, setPreview] = useState(false);

    const togglePreview = () => setPreview(!preview);

    return (<div>

        {preview && <ProductPreview preview={preview}
            toggle={togglePreview}
            productID={item.id} />}

        {type === 'grid' ? <GridItem item={item} togglePreview={togglePreview} /> :
            <ListItem item={item} togglePreview={togglePreview} />}
    </div>);
}

export default product;
