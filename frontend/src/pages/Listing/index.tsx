import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination/indes";
import { BASE_URL } from "Utils/request";
function Listing() {
    
    //teste de forma errada
    axios.get(`${BASE_URL}/movies?size12&page=0`)
    .then(response =>{
        console.log(response.data);
    });

    return (
        <>
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