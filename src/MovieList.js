import {Component} from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends Component{
    
    render(){
        const {movies,addCart,addFav}=this.props;
        // console.log(movies);
        return (
            <>
            <div className='card-show'>
                {movies.map((movie,index)=><MovieCard key={index} movie={movie} addFavorite={addFav} addInCart={addCart}/>)}
                
               
            </div>
            </>
        )
    }
}