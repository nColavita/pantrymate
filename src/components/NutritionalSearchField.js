import React, { Component } from 'react';
import NutritionalSearchItem from './NutritionalSearchItem';

class NutritionalSearchField extends Component {
    render() {
        return (
            <div id={this.props.id} className="form-group text-left">
                <label htmlFor={this.props.name}>{this.props.name}</label>
                <select
                    className="form-control"
                    name={this.props.name}
                    onChange={this.props.handleNutritionSelectionChange}
                >
                    <NutritionalSearchItem
                        id={this.props.name}
                        searchItems={this.props.searchItems}
                    />
                </select>
            </div>
        );
    }
}

export default NutritionalSearchField;
