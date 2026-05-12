function Iconify() {
    return (
        <div className="card-exercicio">
            <h2>🦖 Iconify</h2>
            <p><a target="_blank" rel="noopener noreferrer" href="http://iconify.design">Site do Iconify</a></p>
            
            <div className="icones-container">
                <img src="./icones/mdi--dinosaur-pixel.svg" alt="Dino rosa" width="50" />
                <button className="btn-icone">
                    <img src="./icones/game-icons--dinosaur-rex.svg" alt="T-Rex" width="30" />
                </button>
            </div>
        </div>
    )
}

export default Iconify