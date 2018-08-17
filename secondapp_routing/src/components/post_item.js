import React,{ Component } from 'react';

class PostItem extends Component{
    constructor(props){
        super(props);

    }
    render(){
        console.log(this.props)
        return (
            <div>
                <div class="panel panel-primary">
                    <div class="panel-heading">Post  Item Page</div>
                    <div class="panel-body">Getting Product detail for item 
                            {this.props.match.params.id}</div>
                </div>
            </div>
        )
    }
}

export default PostItem;