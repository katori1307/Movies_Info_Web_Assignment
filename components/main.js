import top from "./top.js";
import searchBar from "./searchBar.js";
import { myFunction } from "./dbProvider.js";
import { fetchMovies } from "./dbProvider.js";
import data from "../db/data.js";
import topRevenue from "./topRevenue.js";
import { computed } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

export default {
    data() {
        return {
            movies: data.Movies,
            movie_detail: {},
            top_5_revenue: [],
        }
    },
    components: {
        top, searchBar, topRevenue
    },
    provide() {
        return {
            top_5_revenue: computed(() => this.top_5_revenue),
        }

    },
    methods: {
        getMovies(query) {
            const promise = fetchMovies(query);
            // console.log(promise);
            return promise;
        },

        sort_top_5_revenue() {
            const moviesCopies = [...this.movies];
            // console.log(moviesCopies);

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
            this.top_5_revenue = moviesCopies.slice(0, 5);
            // console.log(this.top_5_revenue)
        }
    },
    async mounted() {
        console.log(data);
        this.movie_detail = await this.getMovies("detail/movie/tt0012349");
        // console.log(this.movie_detail.detail.id);
        // console.log(data.Movies.length);
        this.sort_top_5_revenue();
    },
    template: `
        <top/>
        <searchBar/>
        <topRevenue/>
    `,
};