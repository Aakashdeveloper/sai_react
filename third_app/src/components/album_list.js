import React from 'react';

const AlbumList = (props) => {

    const showList = ({albumlist}) =>{
        if(albumlist){
            return albumlist.map((item, index) => {
                return(
                    <div>
                        <img key={index} src={`/images/albums/${item.cover}.jpg`}/>
                        <h1>{item.title}</h1>
                   </div>
                )
            })
        }
    }

    return(
        <div className="albums_list">
                {showList(props)}
        </div>
    )
}

export default AlbumList;