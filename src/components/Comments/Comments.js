import React, {Component} from 'react';
import axios from 'axios';
import './Comments.css';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            text: ''
        }
        this.createComment = this.createComment.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
        axios.get('/api/allComments').then ( res => {
            this.setState({comments: res.data})
        })
    }

    createComment (event) {
        const {text} = this.state;
        if (event.key === "Enter" && text.length !== 0) {
            axios.post('/api/newcomment', {text}).then( res => {
                this.setState({comments: res.data})
            })
            this.setState({text: ''})
            console.log('state: ' + this.state);
        } 
    }
    


    handleChange (event) {
        this.setState({text: event.target.value})
    }



    render () {
        let commentsToDisplay = this.state.comments.map( (el, indx) => {
            return (
                <div className='comment' key={el+indx}>
                    <p>{el.text}</p>
                </div>
            )
        } )
        return (
            <div className='comments'>
                <input placeholder='Have some thoughts on dogs.....?'
                className='commentInput'
                onKeyPress={this.createComment}
                onChange={this.handleChange}
                value={this.state.text} />

            <section className='comments_section'>
            {commentsToDisplay}
            </section>
            </div>
        )
    }
}

export default Comments;