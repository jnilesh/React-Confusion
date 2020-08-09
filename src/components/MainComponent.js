import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import DishDetail from './DishdetailComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(dishID) => this.onDishSelect(dishID)} />

                    {/* here filter function will return that element in an new array, from the actual
                     array which satisfies this condition that dish.id === this.state.selectedDish
                     and we will select first item from that array so we used [0] */}
                <DishDetail 
                    dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }
}


export default Main;