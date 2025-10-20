import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return (
            <>
                <div style={{
                    width:'100%',
                    backgroundColor:'blue',
                    height:'60px',
                    display:'flex',
                    justifyContent:'space-between',
                }}>
                    <div>Title</div>
                    <div>
                        <img alt='any'/>
                        <span>0</span>
                    </div>
                </div>
            </>
        );
    }
}