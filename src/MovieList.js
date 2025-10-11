import {Component} from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends Component{
      constructor(){
        super();
        this.state={
            title:'The Nun',
            price:199,
            desc:'Horror and Thriller movie based on the truth of locality from turkey and believing in jinns and supernatural Gods.',
            rating:8.9,
            stars:0,
            fav:true,
            cart:false,
        }

    }
    render(){
        return (
            <>
            <div className='movie-list'>
                <h1>Movie List</h1>
            </div>
            <div className='card-show'>
                <MovieCard movie={this.state}/>
               
            </div>
            </>
        )
    }
}