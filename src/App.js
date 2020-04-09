import React, { Component } from 'react';
import axios from 'axios';

import IngredientSearch from './components/IngredientSearch';
import Recipes from './components/Recipes';

import './App.css';

class App extends Component {
    state = {
        searchValue: '',
        recipes: [],
    };

    handleChange = (e) => {
        if (e.target.value === '') {
            this.setState({ searchValue: '' });
        } else {
            this.setState({ searchValue: e.target.value });
        }
    };

    submitSearch = (e) => {
        e.preventDefault();
        let searchTermsValidated = this.state.searchValue;
        // console.log(searchTermsValidated);
        // Hit the Spoonacular API
        const API = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTermsValidated}&number=2&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`;
        axios
            .get(API)
            .then((res) => this.setState({ recipes: res.data }))
            .catch((err) => console.log(err));

        console.log(this.state.recipes);
    };

    render() {
        // render is the only required lifecycle method
        return (
            <div className="container">
                <h2 className="mt-4">
                    Pantrymate |{' '}
                    <span className="text-muted">lets get cooking!</span>
                </h2>
                <p className="text-muted">
                    Find amazing recipes using the ingredients you already have.
                </p>
                <br></br>
                <IngredientSearch
                    searchValue={this.state.searchValue}
                    handleChange={this.handleChange}
                    submitSearch={this.submitSearch}
                />
                <br></br>
                <Recipes recipes={this.state.recipes} />
            </div>
        );
    }
}

export default App;
