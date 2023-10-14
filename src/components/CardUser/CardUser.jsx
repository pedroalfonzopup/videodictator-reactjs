import "./CardUser.css"

const CardUser = ( {char} ) => {
    const { image, name, species, status } = char
    return (
        <div className="card">
            <img src={image} alt={name} className="card-img" />
            <h5 className="card-name">
                {name}
            </h5>
            <h6 className="card-species">
                {species}
            </h6>
            <h6 className="card-status">
                {status}
            </h6>
        </div>
    )
}

export default CardUser