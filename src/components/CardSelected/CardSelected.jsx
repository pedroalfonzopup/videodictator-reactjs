import "./CardSelected.css"

const CardSelected = ( {char} ) => {
    const { image, name, species, status, gender } = char
    return (
        <div className="card-selected-container">
            <div className="card-selected-portrait">
                <img src={image} alt={name} className="card-img" />
            </div>
            <div className="card-selected-info">
                <h5 className="card-species">
                    {species}
                </h5>
                <h6 className="card-gender">
                    {gender}
                </h6>
                <h5 className="card-name">
                    {name}
                </h5>
                <h6 className="card-status">
                    {status}
                </h6>
                
            </div>
        </div>
    )
}

export default CardSelected