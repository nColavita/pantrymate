import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NutritionalSearchField from './NutritionalSearchField';
import { returnSearchFields } from '../../utils/Utils';

class NutritionalSearch extends Component {
    componentDidMount() {
        this.props.handlePageChange();
    }

    render() {
        const {
            handleNutritionSelectionChange,
            submitNutritionSearch,
        } = this.props;
        return (
            <div
                className="container"
                style={{ width: '65%', maxWidth: '600px' }}
            >
                {returnSearchFields().map((field) => (
                    <NutritionalSearchField
                        key={field.id}
                        name={field.name}
                        searchItems={field.searchItems}
                        handleNutritionSelectionChange={
                            handleNutritionSelectionChange
                        }
                    />
                ))}
                <button
                    type="Submit"
                    className="btn btn-primary mt-4"
                    onClick={submitNutritionSearch}
                >
                    Find recipes!
                </button>
            </div>
        );
    }
}

NutritionalSearch.propTypes = {
    handleNutritionSelectionChange: PropTypes.func.isRequired,
    submitNutritionSearch: PropTypes.func.isRequired,
};

export default NutritionalSearch;
