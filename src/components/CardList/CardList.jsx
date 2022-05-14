import { Card } from '../Card/Card';

function CardList(props) {
    const { cardsArr } = props;

    return (
        <div className='content__inner'>
            {cardsArr ? (
                cardsArr.map((card) => {
                    return <Card key={card.imdbID} {...card} />;
                })
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}

export default CardList;
