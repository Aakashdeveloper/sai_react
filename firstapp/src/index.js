import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            news:JSON
        }
    }
   

    render(){
        return(
            <div>
                <Header/>
                <NewsList sai={this.state.news}></NewsList>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))





/*
<img src=""/>
const App = () => {
    return( 
            <div>
                <Header/>
            </div>)
}

function add(a,b){
    return a+b
}

var add = (a,b) => { return a+b }

functional=> light weight less functinality

class based=> bit hevay but more functionlity
State
Props

let
var
const

rendering=> MAin component
export=> uslitiesed in main

jsx


state==> local variable

props==>  use to transfer the value



saved in state od index
|props
|
|
|
|
state of news list
*/