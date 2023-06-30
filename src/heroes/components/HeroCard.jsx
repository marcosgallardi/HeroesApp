import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImgUrl = `./assets/heroes/${id}.jpg`;

    return (

        <div className="col">
            <div className="card animate__animated animate__fadeIn">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImgUrl} className="card-img" alt="heroes" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title"> {superhero} </h5>
                            <p className="card-text"> {alter_ego} </p>
                            {
                                (alter_ego !== characters) && <p> {characters} </p>
                            }

                            <p className="card-text text-muted"><small> {first_appearance} </small></p>

                            <Link to={`/hero/${id}`}>Mas...</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

