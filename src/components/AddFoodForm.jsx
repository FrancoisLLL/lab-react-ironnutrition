import React, { Component } from 'react'

export class AddFoodForm extends Component {

    state = {
        name: "",
        image: "",
        calories: "",
        quantity: "0",

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      };


      handleSubmit = (event) => {
        event.preventDefault();
        
        const food = {
          name: this.state.name,
          image: this.state.image,
          calories: this.state.calories,
          quantity: 0
        };
        
        this.props.addFood(food);
      };

    render() {
        return (
            <div>
                <form className = "form" onSubmit = {this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}  name = "name" value={this.state.name} />
                    <input type="text" onChange={this.handleChange} name = "image" value= {this.state.image}/>
                    <input type="text" onChange={this.handleChange} name = "calories" value= {this.state.calories}/>
                    <input type="submit" defaultValue="Submit"/>
                </form>
            </div>
        )
    }
} 

export default AddFoodForm
