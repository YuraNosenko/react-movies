import React from 'react';
import CardList from '../CardList/CardList';
import Progress from '../Progress/Progress';
import { Search } from '../Search/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        cardsArr: [],
        param: '',
        loading: true,
    };

    constructor() {
        super();

        this.serchNewMovies = this.serchNewMovies.bind(this);
        this.handleFilters = this.handleFilters.bind(this);
    }

    componentDidMount() {
        const { param } = this.state;

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ cardsArr: data.Search, loading: false })
            )
            .catch((error) => {
                console.log(error);
                this.setState({ loading: false });
            });
    }

    serchNewMovies(str, type = 'all') {
        this.setState({ loading: true });

        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str.trim()}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ cardsArr: data.Search, loading: false })
            )
            .catch((error) => {
                console.log(error);
                this.setState({ loading: false });
            });
    }

    handleFilters(str) {
        this.setState({ param: str });
    }

    render() {
        const { cardsArr, loading } = this.state;

        return (
            <>
                <main className='content container'>
                    <Search cb={this.serchNewMovies} />

                    <div className='content__inner'>
                        {loading ? (
                            <Progress />
                        ) : (
                            <CardList cardsArr={cardsArr} />
                        )}
                    </div>
                </main>
            </>
        );
    }
}

export { Main };
