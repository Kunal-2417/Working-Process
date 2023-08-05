import React, { useState, useEffect } from 'react';
import './FilterMenu.css';
import PropTypes from 'prop-types';

const Sidebar = (props) => {
    const { brand, onApplyFilters } = props;
    // console.log(brand);

    const [isclear, setClear] = useState(true);
    const [reviewFilter, setReviewFilter] = useState('all');
    const [minPriceFilter, setMinPriceFilter] = useState('');
    const [maxPriceFilter, setMaxPriceFilter] = useState('');
    const [companyNameFilter, setCompanyNameFilter] = useState([]);
    const [uniqueWords, setUniqueWords] = useState([]);

    const applyFilters = (isClear = false) => {
        const filterValues = {
            reviewFilter,
            minPriceFilter,
            maxPriceFilter,
            companyNameFilter,
        };
        onApplyFilters(filterValues, isClear);
    };

    const pricerange1 = () => {
        if (minPriceFilter === 0 && maxPriceFilter === 500) {
            setMinPriceFilter('');
            setMaxPriceFilter('');
        } else {
            setMinPriceFilter(0);
            setMaxPriceFilter(500);
        }
    };

    const pricerange2 = () => {
        if (minPriceFilter === 500 && maxPriceFilter === 1000) {
            setMinPriceFilter('');
            setMaxPriceFilter('');
        } else {
            setMinPriceFilter(500);
            setMaxPriceFilter(1000);
        }
    };

    const pricerange3 = () => {
        if (minPriceFilter === 1000 && maxPriceFilter === 2500) {
            setMinPriceFilter('');
            setMaxPriceFilter('');
        } else {
            setMinPriceFilter(1000);
            setMaxPriceFilter(2500);
        }
    };

    const pricerange4 = () => {
        if (minPriceFilter === 2500 && maxPriceFilter === 100000000000) {
            setMinPriceFilter('');
            setMaxPriceFilter('');
        } else {
            setMinPriceFilter(2500);
            setMaxPriceFilter(100000000000);
        }
    };


    const clearFilters = async() => {
        try {
            setReviewFilter('all');
            setMinPriceFilter(-1);
            setMaxPriceFilter(100000000000000);
            setCompanyNameFilter([]);
            applyFilters();
        } catch (error) {
            console.log(error);
        }
        
        // applyFilters();
    };

    const extractFirstWords = () => {
        const words = brand.map((item) => item.split(' ')[0]);
        const uniqueWords = [...new Set(words)];
        setUniqueWords(uniqueWords);
    };

    const handleReviewButtonClick = (value) => {
    setReviewFilter(value);
  };

    const handleBrandButtonClick = (word) => {
        if (companyNameFilter.includes(word)) {
            setCompanyNameFilter(companyNameFilter.filter((brand) => brand !== word));
        } else {
            setCompanyNameFilter([...companyNameFilter, word]);
        }
    };

    useEffect(() => {
        const delay = 2000; // 2 seconds delay

        const timer = setTimeout(() => {
            extractFirstWords();
        }, delay);

        return () => clearTimeout(timer);
    }, [uniqueWords]);

    return (
        <div className="filtermenu" >
            <div className="sidebar-content">
                <div className="filter-option">
                    <label>Filter by Review:</label>
                    <div className="review-buttons">
                        <button
                            className={`selectButton ${reviewFilter === '5star' ? 'selected' : ''}`}
                            onClick={() => handleReviewButtonClick('5star')}
                        >
                            5 ☆☆☆☆☆
                        </button>
                        </div>
                    <div className="review-buttons">

                        <button
                            className={`selectButton ${reviewFilter === '4star' ? 'selected' : ''}`}
                            onClick={() => handleReviewButtonClick('4star')}
                        >
                            4 ☆☆☆☆
                        </button>
                    </div>
                    <div className="review-buttons">
                        <button
                            className={`selectButton ${reviewFilter === '3star' ? 'selected' : ''}`}
                            onClick={() => handleReviewButtonClick('3star')}
                        >
                            3 ☆☆☆
                        </button>
                    </div>
                    <div className="review-buttons">
                        <button
                            className={`selectButton ${reviewFilter === '2star' ? 'selected' : ''}`}
                            onClick={() => handleReviewButtonClick('2star')}
                        >
                            2 ☆☆
                        </button>
                    </div>
                    <div className="review-buttons">
                        <button
                            className={`selectButton ${reviewFilter === '1star' ? 'selected' : ''}`}
                            onClick={() => handleReviewButtonClick('1star')}
                        >
                            1 ☆
                        </button>
                    </div>
                </div>
                <div className="filter-option">
                    <label htmlFor="minPriceFilter">Filter by Price:</label>
                    <div>
                        <div className="pricerange">
                            <button
                                className={`selectButton ${minPriceFilter === 0 ? 'selected' : ''}`}
                                onClick={() => pricerange1()}
                            >
                                0-500
                            </button>
                        </div>
                        <div className="pricerange">
                            <button
                                className={`selectButton ${minPriceFilter === 500 ? 'selected' : ''}`}
                                onClick={() => pricerange2()}
                            >
                                500-1000
                            </button>
                        </div>
                        <div className="pricerange">
                            <button
                                className={`selectButton ${minPriceFilter === 1000 ? 'selected' : ''}`}
                                onClick={() => pricerange3()}
                            >
                                1000-2500
                            </button>
                        </div>
                        <div className="pricerange">
                            <button
                                className={`selectButton ${minPriceFilter === 2500 ? 'selected' : ''}`}
                                onClick={() => pricerange4()}
                            >
                                more than 2500
                            </button>
                        </div>
                    </div>
                </div>
                <div className="filter-option brands">
                    <label htmlFor="companyNameFilter">Filter by Brand Name:</label>
                    {uniqueWords
                        .sort((a, b) => a.localeCompare(b)) // Sort the brand names alphabetically
                        .map((word) => (
                            <button
                                key={word}
                                className={`selectButton ${companyNameFilter.includes(word) ? 'selected' : ''}`}
                                onClick={() => handleBrandButtonClick(word)}
                            >
                                {word}
                            </button>
                        ))}
                </div>

                <button className="apply-btn" onClick={applyFilters}>
                    Apply Filters
                </button>
                <button className="apply-btn" onClick={clearFilters}>
                    Clear Filters
                </button>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    onApplyFilters: PropTypes.func.isRequired,
    brand: PropTypes.array.isRequired,
};

export default Sidebar;
