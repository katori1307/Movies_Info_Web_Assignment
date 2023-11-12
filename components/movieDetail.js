export default {
    inject: ['movie_detail'],
    template: `
        <div id="movieDetail" class="card mb-3 w-100 my-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="movie_detail.image" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title fs-1 fw-bold text-center">{{movie_detail.title}}</h5>
                        <div class="director-list my-1">
                            <h5 class="card-title"><strong>Directors:</strong></h5>
                            <template v-for="d in movie_detail.directorList">
                                <p class="card-text">
                                    {{d.name}},
                                </p>
                            </template>
                        </div>
                        <div class="actor-list my-1">
                            <h5 class="card-title"><strong>Actors:</strong></h5>
                            <template v-for="a in movie_detail.actorList">
                                <p class="card-text">
                                    {{a.name}},
                                </p>
                            </template>
                        </div>
                        <p class="card-text fs-5 my-2"><strong>Release Date:</strong> {{movie_detail.releaseDate}}</p>
                        <div class="gern-list my-2">
                            <h5 class="card-title"><strong>Gern:</strong></h5>
                            <template v-for="g in movie_detail.genreList">
                                <p class="card-text">
                                    {{g.value}},
                                </p>
                            </template>
                        </div>
                        <p id="plot" class="card-text"><strong>Summary: </strong>{{movie_detail.plot}}</p>
                    </div>
                </div>
            </div>
        </div>
    
    
    `,
}