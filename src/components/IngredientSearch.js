import React, { Component } from 'react';

class IngredientSearch extends Component {
    render() {
        const { submitSearch, searchValue, handleChange } = this.props;
        return (
            <div className="px-2">
                <form className="form-inline">
                    <div
                        className="form-group justify-content-center"
                        style={{ width: '100%' }}
                    >
                        <input
                            className="form-control mr-4 d-inline"
                            style={{ width: '60%' }}
                            value={searchValue}
                            onChange={handleChange}
                            id="ingredientInput"
                            type="text"
                            placeholder="What's in your pantry...(e.g. pork, thyme, butter)"
                            name="ingredientList"
                        />
                        <button
                            onClick={submitSearch}
                            className="btn btn-primary btn-md"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

// const style = {
//     inputStyle: {
//         width: '65%',
//     },
//     btnStyle: {
//         fontSize: '1em',
//     },
// };

export default IngredientSearch;
