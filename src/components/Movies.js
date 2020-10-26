import React, { Component } from 'react';
import axios from 'axios';

class Movies extends Component {

     state = {
         postser:[]
     }

    componentDidMount(){
        
          axios.get('https://jsonplaceholder.typicode.com/users')
             .then(res => {
                 console.log(res)
                 this.setState({
                     postser: res.data

                 })
             })
    }
    
    render(){

        const {postser} = this.state;
        const postList = postser.length ? (
            postser.map(post => {
                return(
                    
             <div class="content"><p>{post.username}</p></div>
                     

                )
            })
        ) 
        :

         (<div>Loading</div>)

        return(

            <div> 
        <div class="popular">Popular Titles</div>  
        <div class="wrapper">
    
        {postList}
              
            </div>
        </div>
     
        )
    }
}
export default Movies;