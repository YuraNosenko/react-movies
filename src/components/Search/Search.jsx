import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        searchParam: 'all',
    };

    constructor() {
        super();

        this.handleSearch = this.handleSearch.bind(this);
        this.sendQeury = this.sendQeury.bind(this);
        this.changeParam = this.changeParam.bind(this);
    }

    changeParam(event) {
        const { search } = this.state;

        this.setState({ searchParam: event.target.dataset.type });

        if (this.state.search.trim() !== '') {
            this.props.cb(search, event.target.dataset.type);
        }
    }

    handleSearch(event) {
        this.setState({ [event.target.type]: event.target.value });
    }

    sendQeury(event) {
        const { search, searchParam } = this.state;

        if (event.keyCode === 13 && this.state.search.trim() !== '') {
            this.props.cb(search, searchParam);
        }
    }

    render() {
        const { search, searchParam } = this.state;

        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        placeholder='Search'
                        id='search_inline'
                        type='search'
                        value={search}
                        onChange={this.handleSearch}
                        onKeyDown={this.sendQeury}
                    />

                    <button
                        className='waves-effect waves-light btn search-btn'
                        onClick={() => this.props.cb(search, searchParam)}
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
                                onChange={this.changeParam}
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
                                onChange={this.changeParam}
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
                                onChange={this.changeParam}
                            />
                            <span>Series only</span>
                        </label>
                    </p>
                </div>
            </div>
        );
    }
}

export { Search };
