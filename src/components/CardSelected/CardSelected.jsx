import "./CardSelected.css"

const CardSelected = ( {game} ) => {
    const { img, company, name, console, genre } = game
    return (
        <div className="card-selected-container">
            <div className="card-selected-portrait">
                <img src={img} alt={name} className="card-img" />
            </div>
            <div className="card-selected-info">
                <h5 className="card-name">
                    {name}
                </h5>
                <h6 className="card-genre">
                    {genre}
                </h6>
                <h5 className="card-company">
                    {company}
                </h5>
                <h6 className="card-console">
                    {console}
                </h6>
                
            </div>
        </div>
    )
}

export default CardSelected