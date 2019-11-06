

import GridItem from './gridItem';
import ListItem from './listItem';
const product = props => {
    const { item, type = 'grid' } = props;
    return type === 'grid' ? <GridItem item={item} /> : <ListItem item={item} />;
}

export default product;
