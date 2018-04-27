import React, {Component} from 'react';
import axios from 'axios';
import './DogList.css';
import DoggyHeader from '../DoggyHeader/DoggyHeader';

export default class DogList extends Component {
    constructor () {
        super();
        this.state = {
            allDogInfo: []
        }
        this.getAllDogInfo = this.getAllDogInfo.bind(this);
        this.deleteDoggo = this.deleteDoggo.bind(this);
    }


    updateDoggo () {

    }

    deleteDoggo (id) {
        axios.delete(`/api/doggos/${id}`).then( res => {
            this.setState({allDogInfo: res.data})
        } )
    }

    getAllDogInfo () {
       axios.get('/api/doggos/newDog').then(
           res => {this.setState({allDogInfo: res.data})}
       )
    } 
    

     




    render () {
        let displayDog = this.state.allDogInfo.map( (el, indx) => {
            return (
                <div className="doggyDiv" key={el+indx}>
                    <p className="doggyName">{el.name}</p>
                    <img src={el.img} alt=''/>
                    <button className='del' onClick={() => {this.deleteDoggo(el.id)} }>I dont like this doggo</button>
                </div>
            )
        } )

        return (
            <div className="Main">
            <DoggyHeader />
                <button className='getDogs' onClick={ this.getAllDogInfo }>Show Doggos!</button>
                <br />
                {displayDog}
            </div>
        )
    }
}