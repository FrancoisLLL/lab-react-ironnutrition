import React, { Component } from 'react'

export class FoodBox extends Component {


    render() {
        return (
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={this.props.img} alt ="" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{this.props.food}</strong> <br />
                                    <small>{this.props.cal} cal</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" onChange = {this.props.addOrRemove} name = {this.props.food} type="number" value={this.props.quantity} />
                                </div>
                                <div className="control">
                                    <button className="button is-info" name = {this.props.food} onClick = {this.props.addToList}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
        )
    }
}

export default FoodBox
