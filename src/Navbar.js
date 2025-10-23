import React from 'react';

export default class Navbar extends React.Component{
    render(){
        const {cartCount} =this.props;
        return (
            <>

                <div style={style.nav}>
                    <div style={style.title}>Movie App
                        <img alt='any' style={style.titleImg} src='https://cdn-icons-png.flaticon.com/128/777/777242.png' />
                    </div>
                    <div>
                        <img alt='any' style={style.cartIcon} src='https://cdn-icons-png.flaticon.com/128/2038/2038854.png'/>
                        <span style={style.cart}>{cartCount}</span>
                    </div>
                </div>
            </>
        );
    }
}
const style={
    nav:{
        display:"flex",
        justifyContent:"space-between",
        backgroundColor:"SlateBlue",
        margin:"0px",
        height:'60px',
        width:'100%',
    },
    title:{
        padding:'10px',
        fontWeight:'700',
        fontSize:'2rem',
        color:'white',
        marginLeft:'20px',
    },
    titleImg:{
        width:'30px',
        height:'30px',
    },
    cartIcon:{
        width:'60px',
        height:'40px',
        marginRight:'20px',
        marginTop:'10px',

    },
    cart:{
        color:'white',
        borderRadius:'50%',
        height:'15px',
        fontWeight:'700',
        padding:'5px',
        backgroundColor:'black',
        position:'absolute',
        top:15,
        right:30,
    }
}