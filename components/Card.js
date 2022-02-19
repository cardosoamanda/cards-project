import React from "react"

export default function Card(props) {
    
     return (
        <div>
        <div className="card-mobile">
        <div className="container-fluid-mob">
            <div className="card-mob">
                <div className="card-line"></div>
                <div className="card-info-mob">
                    <img src={`../images/${props.item.foto}`}
                        className="card-img-mob" />
                    <h1>{props.item.nome}</h1>
                    <h5><span>———</span>{props.item.telefone}<span>———</span></h5>
                    <h4>{props.item.cargo}</h4>

                </div>
            </div>
        </div>
        </div>
        
        <div className="device-card">
        <div className="container-fluid">
           <div className="card-list">
                <div className="card-container">
                    <div className="row card">
                        <div className="col-sm-5 card-left">
                            <img src={`../images/${props.item.foto}`}
                                className="card-img" />
                            <div className="card-icons">
                                <ion-icon name="information-outline"></ion-icon>
                                <ion-icon name="call-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="col-sm-7 card-info">
                            <h1 className="card-name">{props.item.nome}</h1>
                            <h3 className="card-phone"><span>———</span> {props.item.telefone} <span>———</span></h3>
                        </div>
                    </div>

                    <div className="card-bottom">
                        <div className="card-line"></div>
                        <div className="card-job">{props.item.cargo}
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
        </div>
    )
}