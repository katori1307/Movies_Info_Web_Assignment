import top from "./top.js";
import bottom from "./bottom.js";
import searchBar from "./searchBar.js";
import { fetchMovies } from "./dbProvider.js";
import data from "../db/data.js";
import topRevenue from "./topRevenue.js";
import mostPopularSlider from "./mostPopularSlider.js";
import topRatingSlider from "./topRatingSlider.js";
import { computed } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

export default {
    data() {
        return {
            movies: [],
            movie_detail: {},
            top_5_revenue: [],
            top_15_popular: [],
            top_popular: [],
            top_15_rating: [],
        }
    },
    provide() {
        return {
            top_5_revenue: computed(() => this.top_5_revenue),
            top_15_popular: computed(() => this.top_15_popular),
            top_15_rating: computed(() => this.top_15_rating),
        }
    },
    components: {
        top, searchBar, topRevenue, mostPopularSlider, topRatingSlider, bottom
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
        },
        get_top_15_popular_movies() {
            return this.most_popular_movies.slice(0, 15);
        },
        handleDarkMode(darkMode) {
            if (darkMode === true) {
                const body = $(".container-movies-info");
                body.css({
                    "background-color": "#373A40",
                });
                $("#movieInfoTop").css({
                    "background-color": "#B46060",
                });
                $("#searchBar").css({
                    "background-color": "#176B87",
                });
                $(".categories_label").css({
                    "background-color": "#5B8FB9",
                });
                $("#moviesInfoBottom").css({
                    "background-color": "#5C3D2E",
                    "color": "beige",
                });


            } else {
                const body = $(".container-movies-info");
                body.css({
                    "background-color": "#F0F0F0",
                });
                $("#movieInfoTop").css({
                    "background-color": "#FFBF9B",
                });
                $("#searchBar").css({
                    "background-color": "#64CCC5",
                });
                $(".categories_label").css({
                    "background-color": "#C0EEF2",
                });
                $("#moviesInfoBottom").css({
                    "background-color": "#E0C097",
                    "color": "#5C3D2E",
                });
            }
        }

    },
    async mounted() {
        console.log(data);
        let getter = [];
        this.movie_detail = await this.getMovies("detail/movie/tt0012349");

        getter = await this.getMovies("get/movie/");
        this.movies = getter.get;

        getter = await this.getMovies("get/mostpopular/");
        this.top_15_popular = getter.get.slice(0, 15);

        this.top_5_revenue = this.sort_top_5_revenue();

        getter = await this.getMovies("get/top50/");
        this.top_15_rating = getter.get.slice(0, 15);

        // console.log(this.top_15_popular);
        // console.log(this.top_popular.get.slice(0, 15));
        // console.log("this.movies: ", this.movies);
        // console.log("temp.get: ", this.temp.get);

        // this.handleDarkMode();
    },
    template: `
        <div class="container-movies-info">
            <top @darkModeChange="handleDarkMode"/>
            <searchBar/>
            <topRevenue/>
            <mostPopularSlider/>
            <topRatingSlider/>
            <bottom/>
        </div>
    `,
};