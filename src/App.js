import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Header from './components/Header';
import IngredientSearch from './components/IngredientSearch';
import NutritionalSearch from './components/NutritionalSearch';
import Recipes from './components/Recipes';
import RecipeInfo from './components/RecipeInfo';

import './App.css';

class App extends Component {
    state = {
        searchValue: '',
        recipes: [],
        recipe: [],
        viewRecipe: false,
        Cuisine: '',
        Diet: '',
        Intolerance: '',
    };

    handleChange = (e) => {
        if (e.target.value === '') {
            this.setState({ searchValue: '' });
        } else {
            this.setState({ searchValue: e.target.value });
        }
    };

    handleNutritionSelectionChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitSearch = (e) => {
        e.preventDefault();
        // Gather searches from App State
        const searchTermsValidated = this.state.searchValue;
        // Hit the Spoonacular Find By Ingredient API
        const recipeAPI = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTermsValidated}&number=10&instructionsRequired=true&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`;
        axios
            .get(recipeAPI)
            .then((response) => this.setState({ recipes: response.data }))
            // .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };

    submitNutritionSearch = (e) => {
        e.preventDefault();
        // Hit the Spoonacular Find By Ingredient API
        const recipeAPI = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${this.state.Cuisine}&diet=${this.state.Diet}&intolerances=${this.state.Intolerance}&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`;
        axios
            .get(recipeAPI)
            .then((response) =>
                this.setState({ recipes: response.data.results })
            )
            // .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };

    getRecipe = (id) => {
        // Hit the Spoonacular Get Recipe Information API
        const ingredientsAPI = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`;
        axios
            .get(ingredientsAPI)
            .then((response) =>
                this.setState({
                    recipe: response.data,
                    viewRecipe: true,
                })
            )
            .catch((err) => console.log(err));
    };

    closeModal = () => {
        this.setState({
            viewRecipe: false,
        });
    };

    render() {
        // Conditional Component Rendering of Modal
        let recipeModal = null;
        if (this.state.viewRecipe) {
            recipeModal = (
                <RecipeInfo
                    recipe={this.state.recipe}
                    viewRecipe={this.state.viewRecipe}
                    closeModal={this.closeModal}
                />
            );
        }

        return (
            <Router>
                <div className="App">
                    <Nav />
                    <div className="container text-center">
                        <Header />
                        <Route
                            exact // only loads the contained components
                            path="/"
                            render={(props) => (
                                <React.Fragment>
                                    <IngredientSearch
                                        searchValue={this.state.searchValue}
                                        handleChange={this.handleChange}
                                        submitSearch={this.submitSearch}
                                    />
                                </React.Fragment>
                            )}
                        ></Route>
                        <Route
                            exact
                            path="/nutritionalsearch"
                            render={(props) => (
                                <div className="container">
                                    <NutritionalSearch
                                        handleNutritionSelectionChange={
                                            this.handleNutritionSelectionChange
                                        }
                                    />
                                    <button
                                        type="Submit"
                                        className="btn btn-primary mt-4"
                                        onClick={this.submitNutritionSearch}
                                    >
                                        Find recipes!
                                    </button>
                                </div>
                            )}
                        ></Route>
                        <div className="flex mt-4">
                            <Recipes
                                recipes={this.state.recipes}
                                getRecipe={this.getRecipe}
                            />
                            {recipeModal}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
