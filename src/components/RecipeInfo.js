import React, { Component } from 'react';

class RecipeInfo extends Component {
    getStyle = {
        modal: {
            backgroundColor: 'rgba(0,0,0,0.75)',
            display: 'unset',
        },
        p: {
            display: 'inline-block',
        },
        span: {
            float: 'right',
        },
    };

    render() {
        const { recipe, closeModal } = this.props;
        return (
            <div
                style={this.getStyle.modal}
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
                            <h5 className="modal-title">{recipe.title}</h5>
                            <button
                                onClick={closeModal}
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
                                {recipe.extendedIngredients.map(
                                    (ingredient) => {
                                        return (
                                            <li
                                                key={ingredient.name}
                                                className="list-group-item"
                                            >
                                                <p style={this.getStyle.p}>
                                                    {ingredient.name}
                                                </p>{' '}
                                                <span
                                                    style={this.getStyle.span}
                                                >
                                                    <strong>
                                                        {ingredient.amount}{' '}
                                                        {ingredient.unit}
                                                    </strong>
                                                </span>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                            <hr />
                            <p>{recipe.instructions}</p>
                        </div>
                        <div className="modal-footer">
                            <a
                                href={recipe.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
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
