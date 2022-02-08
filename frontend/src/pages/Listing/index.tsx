import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination/indes";
import { BASE_URL } from "Utils/request";
import { MoviePage } from "types/movie";
function Listing() {

    const [pageNumber, setPageNumer] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size12&page=0`)
            .then(response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPageNumer(data.number);
            });
    }, []);



    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Listing;