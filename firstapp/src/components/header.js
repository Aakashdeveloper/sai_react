import React, { Component } from 'react';

class Header extends Component{

    constructor(props){
        super(props)

        this.state={
            fruits:"Apple",
            cars:  "BMW",
            keywords:''
        }
    }

    inputchange(event){
        console.log(event.target.value)
        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value)
    }
    render(){
        return(
            <header className="header">
                <div className="logo"
                onClick={()=>console.log("hii")}>Logo</div>
                <center>
                    <input placeholder="Enter your Search.."
                        onChange={this.inputchange.bind(this)}
                        />
                    <p>{this.state.keywords}</p>
                </center>
                <hr/>
            </header>
        )
    }
}


export default Header;



/*
const Header = ( ) => {
    return(
        <header>
            <div>Logo</div>
            <input/>
            <hr/>
        </header>
       
    )
}



const styles = {
            logo:{
                color:'green',
                fontSize : '30px'
            },
            header:{
                background:'#D3D3D3'
            }
        }

<p>{this.state.fruits}</p>
 <p>{this.state.cars}</p>
*/