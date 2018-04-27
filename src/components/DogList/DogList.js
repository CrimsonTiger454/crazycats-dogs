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
        axios.delete('/api/doggos/:id').then( res => {
            this.setState({allDogInfo: res.data})
        } )
    }

    getAllDogInfo () {
       
        axios.get('https://dog.ceo/api/breeds/image/random').then(
            res => {
               let dogImgData = res.data.message;              
                axios.get('/api/doggos/name').then(
                    res => { 
                        let dogID = res.data.id;
                    let dogNameData = res.data.name;
                    let fullDoggo = {
                        name: dogNameData,
                        img: dogImgData,
                        id: dogID
                        } 
                    let dogState = this.state.allDogInfo.slice(0);
                    dogState.push(fullDoggo);
                    this.setState({allDogInfo: dogState});
                    }
                ).catch( (error) => {console.log(error)} );
            }
         )
    } 
    

     




    render () {

        let displayDog = this.state.allDogInfo.map( (el, indx) => {
            return (
                <div className="doggyDiv" key={el+indx}>
                    <p className="doggyName">{el.name}</p>
                    <img src={el.img} alt=''/>
                    <button className='del' onClick={() => {this.deleteDoggo(el.id)} }>{el.id}</button>
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