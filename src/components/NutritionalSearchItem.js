import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NutritionalSearchItem extends Component {
    render() {
        const { searchItems } = this.props;
        return searchItems.map((searchItem) => {
            return (
                <option key={searchItem} value={searchItem}>
                    {searchItem}
                </option>
            );
        });
    }
}

NutritionalSearchItem.propTypes = {
    searchItems: PropTypes.array.isRequired,
};

export default NutritionalSearchItem;
