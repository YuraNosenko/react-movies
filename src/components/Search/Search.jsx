import React, { useState } from 'react';

const Search = (props) => {
    const [search, setSearch] = useState('');
    const [searchParam, setSearchParam] = useState('all');

    const changeParam = (event) => {
        setSearchParam(event.target.dataset.type);

        if (search.trim() !== '') {
            props.cb(search, event.target.dataset.type);
        }
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const sendQeury = (event) => {
        if (event.keyCode === 13 && search.trim() !== '') {
            props.cb(search, searchParam);
        }
    };

    return (
        <div className='row'>
            <div className='input-field'>
                <input
                    className='validate'
                    placeholder='Search'
                    id='search_inline'
                    type='search'
                    value={search}
                    onChange={handleSearch}
                    onKeyDown={sendQeury}
                />

                <button
                    className='waves-effect waves-light btn search-btn'
                    onClick={() => props.cb(search, searchParam)}
                >
                    Find new movies
                </button>
            </div>

            <div className='filters'>
                <p>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='all'
                            checked={searchParam === 'all'}
                            onChange={changeParam}
                        />
                        <span>All</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            checked={searchParam === 'movie'}
                            onChange={changeParam}
                        />
                        <span>Movies only</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            checked={searchParam === 'series'}
                            onChange={changeParam}
                        />
                        <span>Series only</span>
                    </label>
                </p>
            </div>
        </div>
    );
};

export { Search };
