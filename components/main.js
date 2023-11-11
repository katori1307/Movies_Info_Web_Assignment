import top from "./top.js";
import searchBar from "./searchBar.js";
import { fetchMovies } from "./dbProvider.js";
import data from "../db/data.js";
import topRevenue from "./topRevenue.js";
import mostPopularSlider from "./mostPopularSlider.js";
import { computed } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

export default {
    data() {
        return {
            movies: data.Movies,
            most_popular_movies: data.MostPopularMovies,
            movie_detail: {},
            top_5_revenue: [],
            top_15_popular: [],
        }
    },
    provide() {
        return {
            top_5_revenue: computed(() => this.top_5_revenue),
            top_15_popular: computed(() => this.top_15_popular)
        }
    },
    components: {
        top, searchBar, topRevenue, mostPopularSlider
    },
    methods: {
        getMovies(query) {
            const promise = fetchMovies(query);
            return promise;
        },

        sort_top_5_revenue() {
            const moviesCopies = [...this.movies];

            moviesCopies.forEach((movie) => {
                if (movie.boxOffice?.cumulativeWorldwideGross !== undefined) {
                    movie.boxOffice.cumulativeWorldwideGross = Number(movie.boxOffice.cumulativeWorldwideGross.replace(/[^0-9.-]+/g, ""));
                } else {
                    movie.boxOffice = {
                        cumulativeWorldwideGross: 0,
                    }
                }
            });
            moviesCopies.sort((a, b) => b.boxOffice.cumulativeWorldwideGross - a.boxOffice.cumulativeWorldwideGross);
            return moviesCopies.slice(0, 5);
            // console.log(this.top_5_revenue)
        },
        get_top_15_popular_movies() {
            return this.most_popular_movies.slice(0, 15);
        }
    },
    async mounted() {
        console.log(data.MostPopularMovies);
        this.movie_detail = await this.getMovies("detail/movie/tt0012349");
        // console.log(this.movie_detail.detail.id);
        // console.log(data.Movies.length);
        // this.sort_top_5_revenue();
        this.top_5_revenue = this.sort_top_5_revenue();
        this.top_15_popular = this.get_top_15_popular_movies();
        console.log(this.top_15_popular);
    },
    template: `
        <div class="container-movies-info">
            <top/>
            <searchBar/>
            <topRevenue/>
            <mostPopularSlider/>
        </div>
    `,
};