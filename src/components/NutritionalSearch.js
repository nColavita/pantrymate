import React, { Component } from 'react';
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
        return this.fields.map((field) => (
            <NutritionalSearchField
                id={field.id}
                name={field.name}
                searchItems={field.searchItems}
                handleNutritionSelectionChange={
                    this.props.handleNutritionSelectionChange
                }
            />
        ));
    }
}

export default NutritionalSearch;
