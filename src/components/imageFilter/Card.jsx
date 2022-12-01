import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                <div className="card mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={props.img} className="img" alt="item" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p>{props.price}</p>
                                <p className="card-text">{props.dec}</p>
                                <button className='btn btn-warning'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
