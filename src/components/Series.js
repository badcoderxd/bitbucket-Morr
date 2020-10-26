import React, { Component } from 'react';
import axios from 'axios';

class Series extends Component {

     state = {
         postser:[]
     }

    componentDidMount(){
        
          axios.get('https://jsonplaceholder.typicode.com/users')
             
            // axios.get('https://localhost:3500/users') /* dd752b83820b43df9cb4ebe05fc47ee6 https://jsonplaceholder.typicode.com/posts*/
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
export default Series;