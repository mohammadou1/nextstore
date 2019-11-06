import { useState } from 'react';
import {
    Card,
    Select,
    Slider,
    Checkbox,
    Button
} from 'antd';
import './style.less';
import Router from 'next/router';
const { Option } = Select;


const options = [
    { value: 'A', text: 'Name (A-Z)' },
    { value: 'Z', text: 'Name (Z-A)' },
    { value: 'low', text: 'Price low > high' },
    { value: 'high', text: 'Price high > low' },
].map(option => <Option key={option.value} value={option.value}>{option.text}</Option>);

const searchFilters = props => {
    const { searchHandler, query } = props;
    const { _title = '', _limit } = query;

    const [prices, setPrices] = useState([100, 1000]);
    const [sort, setSort] = useState('A');
    const [offer, setOffer] = useState('A');
    const [fiveStars, setFiveStars] = useState(false);
    const [fourStars, setFourStars] = useState(false);
    const [threeStars, setThreeStars] = useState(false);
    const [twoStars, setTwoStars] = useState(false);
    const [oneStar, setOneStar] = useState(false);


    const changePriceHandler = value => setPrices(value);
    const changeSortHandler = value => setSort(value);
    const changeOfferHandler = value => setOffer(value.target.checked);
    const changeRatingFiveStars = value => setFiveStars(value.target.checked);
    const changeRatingFourStars = value => setFourStars(value.target.checked);
    const changeRatingThreeStars = value => setThreeStars(value.target.checked);
    const changeRatingTwoStars = value => setTwoStars(value.target.checked);
    const changeRatingOneStar = value => setOneStar(value.target.checked);

    const filterSearchHandler = () => {
        const params = {
            _title,
            sort,
            prices,
            offer,
            fiveStars,
            fourStars,
            threeStars,
            twoStars,
            oneStar,
            _limit,
        }
        searchHandler(params);
    }
    return (
        <Card className="filters mb-large" title="Filter"
            extra={<i className="fas fa-filter" aria-hidden={true}></i>}>
            <div className="controls">
                <ul>
                    <li>
                        <p>
                            Sort
                    </p>
                        <Select id="sort_filter"
                            onChange={changeSortHandler}
                            defaultValue={sort}>
                            {options}
                        </Select>
                    </li>
                    <li>
                        <p>
                            Price
                    </p>
                        <Slider id="price_filter" range
                            defaultValue={[prices[0], prices[1]]}
                            onChange={changePriceHandler}
                            step={1}
                            min={10} max={5000}
                        />
                        <div className="aligned mb">
                            <span>
                                $({prices[0]})
                             </span>
                            <span>
                                $({prices[1]})
                            </span>
                        </div>
                        <hr />
                    </li>
                    <li className="aligned">
                        <label htmlFor="offer_cb">
                            <Checkbox id="offer_cb"
                                onChange={changeOfferHandler} />
                            Offer
                    </label>
                        <span>
                            (181)
                    </span>
                    </li>

                    <li className="aligned">
                        <label htmlFor="five_stars_cb">
                            <Checkbox id="five_stars_cb"
                                onChange={changeRatingFiveStars} />
                            {[...Array(5)].map((_, idx) => {
                                return <i key={idx} className="fas fa-star star-filled" aria-hidden={true}></i>
                            })}
                        </label>
                        <span>
                            (55)
                    </span>
                    </li>

                    <li className="aligned">
                        <label htmlFor="four_stars_cb">
                            <Checkbox id="four_stars_cb"
                                onChange={changeRatingFourStars} />
                            {[...Array(4)].map((_, idx) => {
                                return <i key={idx} className="fas fa-star star-filled" aria-hidden={true}></i>
                            })}
                        </label>
                        <span>
                            (73)
                    </span>
                    </li>

                    <li className="aligned">
                        <label htmlFor="three_stars_cb">
                            <Checkbox id="three_stars_cb"
                                onChange={changeRatingThreeStars} />
                            {[...Array(3)].map((_, idx) => {
                                return <i key={idx} className="fas fa-star star-filled" aria-hidden={true}></i>
                            })}
                        </label>
                        <span>
                            (255)
                    </span>
                    </li>

                    <li className="aligned">
                        <label htmlFor="two_star_cb">
                            <Checkbox id="two_star_cb"
                                onChange={changeRatingTwoStars} />
                            {[...Array(2)].map((_, idx) => {
                                return <i key={idx} className="fas fa-star star-filled" aria-hidden={true}></i>
                            })}
                        </label>
                        <span>
                            (511)
                    </span>
                    </li>

                    <li className="aligned">
                        <label htmlFor="one_star_cb">
                            <Checkbox id="one_star_cb"
                                onChange={changeRatingOneStar} />
                            <i className="fas fa-star star-filled" aria-hidden={true}></i>
                        </label>
                        <span>
                            (1011)
                    </span>
                    </li>

                </ul>

                <hr />
                <Button onClick={filterSearchHandler} className="float-right" type="primary">
                    Filter
                </Button>
            </div>
        </Card>
    )
}

export default searchFilters;