import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RecipeInfo extends Component {
    render() {
        const { recipe, closeModal } = this.props;
        return (
            <div
                style={getStyle.modal}
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
                                                className="list-group-item text-left"
                                            >
                                                <p className="text-left p-10 m-0 d-inline">
                                                    <strong>
                                                        {ingredient.name}
                                                    </strong>
                                                </p>{' '}
                                                <span style={getStyle.span}>
                                                    {ingredient.amount}{' '}
                                                    {ingredient.unit}
                                                </span>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                            <h3 className="text-left my-3">Instructions:</h3>
                            <hr
                                className="m-0"
                                style={{ background: '#CFCFCF' }}
                            />
                            <p className="text-left p-10 mt-3">
                                {recipe.instructions}
                            </p>
                        </div>
                        <div className="modal-footer">
                            <a
                                href={recipe.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <strong>Recipe Website ></strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const getStyle = {
    modal: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        display: 'unset',
    },
    span: {
        float: 'right',
    },
    hr: {
        background: '#3333',
    },
};

RecipeInfo.propTypes = {
    recipe: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default RecipeInfo;
