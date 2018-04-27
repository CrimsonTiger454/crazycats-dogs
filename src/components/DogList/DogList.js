import React, {Component} from 'react';
import axios from 'axios';
import './DogList.css';

export default class DogList extends Component {
    constructor () {
        super();
        this.state = {
            allDogInfo: []
        }
        this.getAllDogInfo = this.getAllDogInfo.bind(this);
    }


    updateDoggo () {

    }

    deleteDoggo () {

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
                    console.log(this.state.allDogInfo);
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
                </div>
            )
        } )

        return (
            <div className="Main">
                <button onClick={ this.getAllDogInfo }>Show Doggos!</button>
                <br />
                {displayDog}
            </div>
        )
    }
}