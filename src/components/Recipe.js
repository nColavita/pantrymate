import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        return (
            <div className="card shadow" style={style.cardStyle}>
                <img
                    className="card-img-top"
                    src={this.props.recipe.image}
                ></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.recipe.title}</h5>
                    <ul className="list-group list-group-flush"></ul>
                    <a href="#" className="btn btn-primary">
                        View Recipe
                    </a>
                </div>
            </div>
        );
    }
}

const style = {
    cardStyle: {
        width: '18rem',
        margin: '0.25em',
    },
};

export default Recipe;
