import React, {
  Component
} from 'react'

import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import TodayFood from './components/TodayFood';
export class App extends Component {

  state = {
    foods: foods,
    displayFoodForm: false,
    searchText : "",
    todayFood: []
  }



  displayForm = () => {
    this.setState({
      displayFoodForm: true
    })
  }

  addFood = (food) => {

    this.setState({
      foods: [food, ...this.state.foods],
      displayFoodForm: false
    })

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  addOrRemove = (event) => {

    const newArray = [...this.state.foods]

    const { name, value } = event.target;
    let i = newArray.findIndex(item => item.name === name)
    newArray[i].quantity = value;
 
    this.setState({
      foods: newArray
    })

  }

  addToList = (event) => {

    const newArray = [...this.state.foods]
    const { name } = event.target;
    let i = newArray.findIndex(item => item.name === name)

    const todayFood = [...this.state.todayFood];

    const toAdd = {
      name : newArray[i].name,
      quantity : Number(newArray[i].quantity),
      calories: newArray[i].calories
    }

    let j = todayFood.findIndex(item => item.name === name)

    console.log("j", j);

    if(j>=0) {
      todayFood[j].quantity = Number(newArray[i].quantity) + Number(todayFood[j].quantity);
    }
    else {
      todayFood.push(toAdd);
    }

    console.log(todayFood)

    newArray[i].quantity = 0;

    this.setState({
      foods: newArray,
      todayFood : todayFood
    })

  }

  render() {

    let form = ""

    let foodSearchResults = this.state.foods.filter((food) => {
      return food.name.toLowerCase().startsWith(this.state.searchText.toLowerCase())
    })

    const foodboxes = foodSearchResults.map((food) => {
      return <FoodBox key={food.name}
        img={food.image}
        food={food.name}
        cal={food.calories}
        quantity={food.quantity}
        addOrRemove = {this.addOrRemove}
        addToList = {this.addToList}
      />
    })

    if (this.state.displayFoodForm === true) {
      form = < AddFoodForm addFood={this.addFood} />
    } else {
      form = false;
    }

    const todayFood = this.state.todayFood.map((item)=> {
      return <TodayFood key = {item.name + Date.now() + Math.floor(Math.random() * 1000)} name = {item.name} quantity = {item.quantity} calories={item.calories}/>
    })

    let totalCalories = this.state.todayFood.reduce((acc, item) => {
      // console.log(acc, item)
      return acc = (acc) + (item.calories) * (item.quantity)
    }, 0)

    return (<div className="App" >
      <header className="App-header" >
      <div>Total calories {totalCalories}</div>

        <SearchBar searchText = {this.state.searchText} handleChange={this.handleChange}/>
        <button onClick={this.displayForm}> Add food </button>
        {form}
        {foodboxes}
        {todayFood}
      </header>
    </div>
    )
  }

}

export default App