import React from 'react';

const newsList = (props) => {

    console.log(props)

    const items = props.sai.map((item)=>{
        return(
            <div>
                <h1>{item.id}</h1>
                <h2>{item.title}</h2>
                <h4>{item.feed}</h4>
            </div>
        )
    })
    return(
        <div>
            {items}
        </div>
    )
}

export default newsList;