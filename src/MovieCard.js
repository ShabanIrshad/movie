import React from 'react';

export default class MovieCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movie:this.props.movie,
        }
    }
    //Handling functions within child 
    
    addStar=()=>{
        if(this.state.movie.stars>=5){
            return;
        }
        let mv=this.state.movie;
        mv.stars+=0.5;
        this.setState({
            movie:mv,
        })
       
    }
    lessStar=()=>{
        if(this.state.movie.stars<=0){
            return;
        }
        let mv=this.state.movie;
        mv.stars-=0.5;
        this.setState({
            movie:mv,
        })

    }
  
    render(){
        // console.log(this.state);
        const {title,price,desc,rating,stars,fav,cart,img}=this.props.movie;
        return(
            <>
            <div className='card'>
                <div className='left'>
                    <img width='100%' height='100%' alt='any' src={img}/>
                </div>
                <div className='right'>
                   <h2 className='title'>{title}</h2>                   
                   <p><strong>Rs.{price}/-</strong></p>
                   <p>{desc}</p>
                   <hr></hr>
                   <div className='footer'>
                        <div className='f-left'>
                            <p className='rating'><strong>IMDB Rating :&nbsp;{rating}</strong></p>
                            <div className='star-div'>
                                <img alt='star' className='stars' onClick={this.lessStar} src='https://cdn-icons-png.flaticon.com/128/2801/2801932.png'/>
                                <img alt='star' className='main-star' src='https://cdn-icons-png.flaticon.com/128/616/616490.png'/>
                                <img alt='star'  className='stars' onClick={this.addStar} src='https://cdn-icons-png.flaticon.com/128/748/748113.png'/>
                                <span>&nbsp;<strong>{stars}</strong></span>
                            </div>
                        </div>
                        <div className='f-right'>
                           
                            <button className={cart?'rm-btn':'add-btn'} onClick={()=>this.props.addInCart(this.props.movie)}>{cart?'Remove Cart':'Add to Cart'}</button>
                             <button className={fav?'un-fav-btn':'fav-btn'} onClick={()=>this.props.addFavorite(this.props.movie)}>{fav?'un-Favorites':'Favorites'}</button>
                        </div>
                   </div>
                </div>
              
                
            </div>
            </>
        );

        
    }
}