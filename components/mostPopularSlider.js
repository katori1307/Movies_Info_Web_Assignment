export default {
    inject: ['top_15_popular'],
    template: `
        <div class="alert alert-info fw-bold fs-3" role="alert">
            Most popular
        </div>
        <div id="mostPopularMovies" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#mostPopularMovies" data-bs-slide-to="0" class="active bg-black" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#mostPopularMovies" data-bs-slide-to="1" class="bg-black" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#mostPopularMovies" data-bs-slide-to="2" class="bg-black" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">         
                        <div class="col">   
                            <img src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                             
                        </div>
                        <div class="col">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                           
                        </div>
                        <div class="col">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                           
                        </div>
                        <div class="col">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                           
                        </div>
                        <div class="col">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                           
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">         
                        <div class="col">   
                            <img src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                             
                        </div>
                        <div class="col">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                           
                        </div>
                        <div class="col">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                           
                        </div>
                        <div class="col">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                           
                        </div>
                        <div class="col">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                           
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">         
                        <div class="col">   
                            <img src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                             
                        </div>
                        <div class="col">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                           
                        </div>
                        <div class="col">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                           
                        </div>
                        <div class="col">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                           
                        </div>
                        <div class="col">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6762_AL_.jpg"
                                class="d-block mx-auto" alt="...">                           
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#mostPopularMovies" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#mostPopularMovies" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `,
}