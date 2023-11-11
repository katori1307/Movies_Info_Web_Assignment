
export default {
    inject: ['top_5_revenue'],
    template: `
        <div id="topRevenue" class="carousel slide my-3" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#topRevenue" data-bs-slide-to="0" class="active bg-black" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#topRevenue" data-bs-slide-to="1" class="bg-black" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#topRevenue" data-bs-slide-to="2" class="bg-black" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#topRevenue" data-bs-slide-to="3" class="bg-black" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#topRevenue" data-bs-slide-to="4" class="bg-black" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <template v-for="(movie, index) in top_5_revenue">
                    <div :class="{'carousel-item': true, 'active': index === 0}">
                        <img :src="movie.image" class="d-block" alt="...">
                    </div>                
                </template>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#topRevenue" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#topRevenue" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `,
} 