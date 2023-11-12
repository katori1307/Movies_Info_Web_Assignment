export default {
    inject: ['search_movies'],
    template: `
        <div id="searchedMovies" class="container my-2">
            <div class="row row-cols-3">
                <template v-for="movie in search_movies">
                    <div class="col my-2">  
                        <div class="card mb-3 h-100">
                            <img :src="movie.image" class="card-img-top img-thumbnail" alt="..." @click="$emit('showMovieDetail', movie.id)">
                            <div class="card-body">
                                <h5 class="card-title text-center fw-bold">{{movie.fullTitle}}</h5>
                                <div class="gern-list">
                                    <template v-for="g in movie.genreList">
                                        <p class="card-text">
                                            {{g.value}},
                                        </p>
                                    </template>
                                </div>
                                <p class="card-text text-center">
                                    <strong>Rating:</strong> {{movie.ratings.imDb}}
                                </p>
                            </div>
                        </div>                  
                    </div>         
                </template>
            </div>
        </div>
    `,
}