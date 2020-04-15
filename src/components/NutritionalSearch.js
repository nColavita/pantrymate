import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NutritionalSearchField from './NutritionalSearchField';

class NutritionalSearch extends Component {
    fields = [
        {
            id: 1,
            name: 'Cuisine',
            searchItems: [
                '',
                'African',
                'American',
                'British',
                'Cajun',
                'Caribbean',
                'Chinese',
                'Eastern European',
                'European',
                'French',
                'German',
                'Greek',
                'Indian',
                'Irish',
                'Italian',
                'Japanese',
                'Jewish',
                'Korean',
                'Latin American',
                'Mediterranean',
                'Mexican',
                'Middle Eastern',
                'Nordic',
                'Southern',
                'Spanish',
                'Thai',
                'Vietnamese',
            ],
        },
        {
            id: 2,
            name: 'Diet',
            searchItems: [
                '',
                'Gluent Free',
                'Ketogenic',
                'Vegetarian',
                'Lacto-Vegetarian',
                'Ovo-Vegetarian',
                'Vegan',
                'Pescetarian',
                'Paleo',
                'Primal',
                'Whole30',
            ],
        },
        {
            id: 3,
            name: 'Intolerance',
            searchItems: [
                '',
                'Dairy',
                'Egg',
                'Gluten',
                'Grain',
                'Peanut',
                'Seafood',
                'Sesame',
                'Shellfish',
                'Soy',
                'Sulfite',
                'Tree Nut',
                'Wheat',
            ],
        },
    ];

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
                {this.fields.map((field) => (
                    <NutritionalSearchField
                        id={field.id}
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
