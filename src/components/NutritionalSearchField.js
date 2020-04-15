import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NutritionalSearchItem from './NutritionalSearchItem';

class NutritionalSearchField extends Component {
    render() {
        const {
            name,
            handleNutritionSelectionChange,
            searchItems,
        } = this.props;
        return (
            <div className="form-group text-left">
                <label className="text-muted" htmlFor={name}>
                    {name}
                </label>
                <select
                    style={{ fontWeight: '400' }}
                    className="form-control"
                    name={name}
                    onChange={handleNutritionSelectionChange}
                >
                    <NutritionalSearchItem searchItems={searchItems} />
                </select>
            </div>
        );
    }
}

NutritionalSearchField.propTypes = {
    name: PropTypes.string.isRequired,
    searchItems: PropTypes.array.isRequired,
    handleNutritionSelectionChange: PropTypes.func.isRequired,
};

export default NutritionalSearchField;
