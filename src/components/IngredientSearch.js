import React, { Component } from 'react';

class IngredientSearch extends Component {
    render() {
        return (
            <form className="form-inline">
                <div className="form-group" style={style.formGroup}>
                    <input
                        value={this.props.searchValue}
                        onChange={this.props.handleChange}
                        id="ingredientInput"
                        type="text"
                        className="form-control mr-4"
                        placeholder="What's in your pantry...(ex: pork, thyme, butter)"
                        style={style.inputStyle}
                        name="ingredientList"
                    />
                    <button
                        onClick={this.props.submitSearch}
                        className="btn btn-primary"
                        style={style.btnStyle}
                    >
                        Search
                    </button>
                </div>
            </form>
        );
    }
}

const style = {
    formGroup: {
        width: '100%',
    },
    inputStyle: {
        width: '65%',
    },
    btnStyle: {
        fontSize: '1em',
    },
};

export default IngredientSearch;
