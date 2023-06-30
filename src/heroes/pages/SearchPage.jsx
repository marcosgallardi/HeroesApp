import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../Hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroByName } from "../helpers";



export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroByName(q);

    const showSearch = (q.length === 0)

    const showError = (q.length > 0) && heroes.length === 0;


    const { searchText, onInputChange } = useForm({

        searchText: ''
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        if (searchText.trim().lenght <= 1) return;

        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5 mt-3">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={onSearchSubmit}>
                        <input
                            autoComplete="off"
                            name="searchText"
                            type="text"
                            className="form-control"
                            placeholder="search a hero"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline-danger mt-3">Search</button>
                    </form>
                </div>

                <div className="col-7 mt-3">
                    <h4>Results</h4>
                    <hr />
                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>
                    <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}>
                        no with hero <b> {q} </b>
                    </div>

                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }

                </div>
            </div>

        </>
    )
}
