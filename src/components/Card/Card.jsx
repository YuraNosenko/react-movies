import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.cardInfo = props;
  }

  render() {
    const { Title, Poster, Type, Year } = this.cardInfo;

    return (
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {Poster === "N/A" ? (
            <img
              className="activator"
              src={`https://via.placeholder.com/300x400?text=${Title}`}
              alt=""
            />
          ) : (
            <img className="activator" src={Poster} alt="" />
          )}
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {Title}
          </span>
          <div className="card-info">
            <span>{Type}</span>
            <span>{Year}</span>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{Title}</span>
        </div>
      </div>
    );
  }
}

export { Card };
