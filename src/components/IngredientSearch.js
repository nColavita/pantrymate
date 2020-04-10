import React, { Component } from 'react';

class IngredientSearch extends Component {
    render() {
        const { submitSearch, searchValue, handleChange } = this.props;
        return (
            <form className="form-inline">
                <div className="form-group" style={style.formGroup}>
                    <input
                        value={searchValue}
                        onChange={handleChange}
                        id="ingredientInput"
                        type="text"
                        className="form-control mr-4"
                        placeholder="What's in your pantry...(e.g. pork, thyme, butter)"
                        style={style.inputStyle}
                        name="ingredientList"
                    />
                    <button
                        onClick={submitSearch}
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
