import React, { useState, useEffect } from 'react';
import CardList from '../CardList/CardList';
import Progress from '../Progress/Progress';
import { Search } from '../Search/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [cardsArr, setCardsArr] = useState([]);
    const [loading, setLoading] = useState(true);

    const serchNewMovies = (str, type = 'all') => {
        setLoading(true);

        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str.trim()}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) => {
                setCardsArr(data.Search);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((response) => response.json())
            .then((data) => {
                setCardsArr(data.Search);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <main className='content container'>
                <Search cb={serchNewMovies} />

                <div className='content__inner'>
                    {loading ? <Progress /> : <CardList cardsArr={cardsArr} />}
                </div>
            </main>
        </>
    );
};

export { Main };
