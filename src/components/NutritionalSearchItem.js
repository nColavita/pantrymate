import React, { Component } from 'react';

class NutritionalSearchItem extends Component {
    render() {
        return this.props.searchItems.map((searchItem) => {
            return <option value={searchItem}>{searchItem}</option>;
        });
    }
}

export default NutritionalSearchItem;
