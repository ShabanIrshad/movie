import Navbar from './Navbar';
import MovieList from './MovieList';
import React from 'react';
import {movies} from './movieData';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      movies:movies,
      cartCount:0,
    }
  }
   addFav=(movie)=>{
        let {movies} =this.state;
        let mid=movies.indexOf(movie);
        movies[mid].fav===true?movies[mid].fav=false:movies[mid].fav=true;
        this.setState({
            movies:movies,
        })
    }
    addCart=(movie)=>{
         let {movies,cartCount} =this.state;
        let mid=movies.indexOf(movie);
        movies[mid].cart===true?movies[mid].cart=false:movies[mid].cart=true;
        // console.log(movies[mid].cart);
        if(movies[mid].cart){
          cartCount +=1;
        }else{
          cartCount -=1;
        }
        this.setState({
            movies:movies,
            cartCount,
        })
    }

  render(){
    return(
      <>
      <Navbar cartCount={this.state.cartCount}/>
      <MovieList movies={movies} addCart={this.addCart} addFav={this.addFav}/>
      </>
    );
  }
}
