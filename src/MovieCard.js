import React from 'react';

export default class MovieCard extends React.Component{
  
    addStar=()=>{
        if(this.state.stars>=5){
            return;
        }
        this.setState({
            stars:this.state.stars+0.5,
        })

    }
    lessStar=()=>{
        if(this.state.stars<=0){
            return;
        }
        this.setState((prevState)=>{
            return {
                stars:prevState.stars-0.5,
            }
        })

    }
    handleFav=()=>{
        this.setState({
            fav:!this.state.fav,
        })
    }
    handleCart=()=>{
        this.setState({
            cart:!this.state.cart,
        });
        
    }
    render(){
        const {title,price,desc,rating,stars,fav,cart}=this.props.movie;
        return(
            <>
            <div className='card'>
                <div className='left'>
                    <img width='100%' height='100%' alt='any' src='https://www.tallengestore.com/cdn/shop/products/Joker_-_Joaquin_Phoenix_-_Hollywood_Action_Movie_Poster_4d1b0644-dd78-42f8-996a-5d0c5bdc21b5.jpg?v=1573629455'/>
                </div>
                <div className='right'>
                   <h2 className='title'>{title}</h2>                   
                   <p><strong>Rs.{price}/-</strong></p>
                   <p>{desc}</p>
                   <hr></hr>
                   <div className='footer'>
                        <div className='f-left'>
                            <p className='rating'><strong>Rating :&nbsp;{rating}</strong></p>
                            <div className='star-div'>
                                <img alt='star' className='stars' onClick={this.lessStar} src='https://cdn-icons-png.flaticon.com/128/2801/2801932.png'/>
                                <img alt='star' className='main-star' src='https://cdn-icons-png.flaticon.com/128/616/616490.png'/>
                                <img alt='star'  className='stars' onClick={this.addStar} src='https://cdn-icons-png.flaticon.com/128/748/748113.png'/>
                                <span>&nbsp;<strong>{stars}</strong></span>
                            </div>
                        </div>
                        <div className='f-right'>
                           
                            <button className={cart?'rm-btn':'add-btn'} onClick={this.handleCart}>{cart?'Remove Cart':'Add to Cart'}</button>
                             <button className={fav?'fav-btn':'un-fav-btn'} onClick={this.handleFav}>{fav?'Favorites':'un-Favorites'}</button>
                        </div>
                   </div>
                </div>
              
                
            </div>
            </>
        );

        
    }
}