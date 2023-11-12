export default {
    inject: ['top_15_popular'],
    template: `
        <div id="mostPopularAlert" class="categories_label alert alert-info fw-bold fs-3" role="alert">
            Most popular
        </div>
        <div id="mostPopularMovies" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#mostPopularMovies" data-bs-slide-to="0" class="active bg-black" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#mostPopularMovies" data-bs-slide-to="1" class="bg-black" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#mostPopularMovies" data-bs-slide-to="2" class="bg-black" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#mostPopularMovies" data-bs-slide-to="3" class="bg-black" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#mostPopularMovies" data-bs-slide-to="4" class="bg-black" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <template v-for="i in Math.ceil(top_15_popular.length / 3)">
                    <div :class="{'carousel-item': true, 'active': i === 1}">
                        <div class="row">
                            <template v-for="(movie, j) in top_15_popular.slice((i - 1) * 3, i * 3)">
                                <div class="col">
                                    <img :src="movie.image" class="d-block" alt="...">
                                </div>
                            </template>
                        </div>
                    </div>                
                </template>
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