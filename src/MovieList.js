import {Component} from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends Component{
      constructor(){
        super();
        this.state={
            movies:[
              {
                    title:'The Nun',
                    price:199,
                    desc:'A young nun travels with a priest to Romania to uncover the secrets behind a malevolent spirit haunting a sacred site.',
                    rating:8.9,
                    stars:4,
                    img:'https://upload.wikimedia.org/wikipedia/en/b/bc/The_Nun_II_%282023%29.jpg',
                    fav:true,
                    cart:false,
                },{
                    title:'Joker',
                    price:899,
                    desc:'Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.',
                    rating:7.5,
                    stars:3,
                    img:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkNeYGwWeQEwOoPhxW93QIeNUWnLmEvMPwTw9AlDBGN4uXjIAcOEwz2z2yZL8BpXHp3ZYyjQ',
                    fav:true,
                    cart:false,
                },
                {
                    title:'The Avengers',
                    price:1299,
                    desc:'S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.',
                    rating:8.9,
                    stars:5,
                    img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQluFl3GfQDXohBaH-xG3GuRi8T4MDIQPRpCqUGLiE5tXdXbUO0hRFwnshvzg07igEgGg7i',
                    fav:true,
                    cart:false,
                }
            ]
        };

    }
    
    render(){
        // console.log(this.state.movies);
        return (
            <>
            <div className='movie-list'>
                <h1>Movie List</h1>
            </div>
            <div className='card-show'>
                {this.state.movies.map((movie)=><MovieCard movie={movie}/>)}
                
               
            </div>
            </>
        )
    }
}