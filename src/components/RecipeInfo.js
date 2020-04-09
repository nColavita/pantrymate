import React, { Component } from 'react';

class RecipeInfo extends Component {
    getStyle = () => {
        return {
            backgroundColor: 'rgba(0,0,0,0.75)',
            display: 'unset',
        };
    };

    render() {
        return (
            <div
                style={this.getStyle()}
                className="modal"
                tabIndex="-1"
                role="dialog"
            >
                <div
                    className="modal-dialog modal-dialog-scrollable"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {this.props.recipe.title}
                            </h5>
                            <button
                                onClick={this.props.closeModal}
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group">
                                {this.props.recipe.extendedIngredients.map(
                                    (ingredient) => {
                                        return (
                                            <li
                                                key={ingredient.name}
                                                className="list-group-item"
                                            >
                                                <h4>{ingredient.name}</h4>{' '}
                                                <span>
                                                    {ingredient.amount}{' '}
                                                    <strong>
                                                        {ingredient.unit}
                                                    </strong>
                                                </span>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                            <hr />
                            <p>{this.props.recipe.instructions}</p>
                        </div>
                        <div className="modal-footer">
                            <a
                                href={this.props.recipe.sourceUrl}
                                target="_blank"
                            >
                                Recipe Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeInfo;
