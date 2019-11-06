
import {
    Button,
    Select
} from 'antd';
const { Option } = Select;

const options = [
    { value: 10 },
    { value: 25 },
    { value: 50 },
].map((option, idx) => <Option key={idx} value={option.value}>{option.value}</Option>);

const searchControls = props => {
    const {query ,searchHandler,displayChangedHandler} = props;
    const limit = query._limit;


    const limitChangedHandler = value => {
        query._limit = value;
        searchHandler(query);
    }

    return (
        <div className="search-controls mb-large">
            <div className="float-left">
                <Button type="link" onClick={() => displayChangedHandler('list')}>
                    <i className="fas fa-th-list" aria-hidden={true}></i>
                </Button>
                <Button type="link" onClick={() => displayChangedHandler('grid')}>
                    <i className="fas fa-th" aria-hidden={true}></i>
                </Button>
            </div>
            <div className="float-right">
                <label htmlFor="filter_limit">
                    Show: {' '}
                    <Select id="filter_limit" defaultValue={limit}
                        onChange={limitChangedHandler}>
                        {options}
                    </Select>
                </label>
            </div>
        </div>
    );
}

export default searchControls;
