import React from "react";

function Card({ img, alt, name, post, note }) {
    return (
        <div className="container">
            <div className="row-10">
                <div className="col">
                    <div className="col">
                        <div className="card" style={{ maxWidth: "15rem" }}>
                            <img src={require(`../../img/${img}.jpg`)} className="card-img-top img-fluid" alt={alt} />
                            <div className="card-body">
                                <h5 className="card-name">{name}</h5>
                                <p className="card-post">{post}</p>
                                <p className="card-note">{note}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;