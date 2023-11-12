import top from "./top.js";
import bottom from "./bottom.js";
import searchBar from "./searchBar.js";
import { fetchMovies } from "./dbProvider.js";
import data from "../db/data.js";
import topRevenue from "./topRevenue.js";
import mostPopularSlider from "./mostPopularSlider.js";
import topRatingSlider from "./topRatingSlider.js";
import movieDetail from "./movieDetail.js";
import searchedMovies from "./searchedMovies.js";
import { computed } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

export default {
    data() {
        return {
            movies: [],
            get_obj: {},
            movie_detail: {},
            top_5_revenue: [],
            top_15_popular: [],
            top_popular: [],
            top_15_rating: [],
            showDetail: false,
            search_pattern: "",
            search_obj: {},
            search_movies: [],
            show_searched_movies: false,

        }
    },
    provide() {
        return {
            top_5_revenue: computed(() => this.top_5_revenue),
            top_15_popular: computed(() => this.top_15_popular),
            top_15_rating: computed(() => this.top_15_rating),
            movie_detail: computed(() => this.movie_detail),
            search_movies: computed(() => this.search_movies),
        }
    },
    components: {
        top, searchBar, topRevenue, mostPopularSlider, topRatingSlider, bottom, movieDetail, searchedMovies
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
                    "background-color": "#F8EFD4",
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
        },
        reloadPage() {
            window.location.reload();
        },
        async showMovieDetail(id) {
            this.showDetail = true;
            this.show_searched_movies = false;
            this.get_obj = await this.getMovies("detail/movie/" + id);
            // this.get_obj = await this.getMovies("detail/movie/tt4154756");
            this.movie_detail = this.get_obj.detail;
            console.log(this.movie_detail);
        },
        async getSearchMovies(pattern) {
            this.show_searched_movies = true;
            this.showDetail = false;
            this.search_obj = {};
            this.search_movies = [];
            this.search_obj = await this.getMovies("search/movie/" + pattern + "?per_page=9&page=1");
            this.search_movies = this.search_obj.items;
            console.log(this.search_movies);
        },
        async getMoviesByActors(pattern) {
            this.show_searched_movies = true;
            this.showDetail = false;
            this.search_obj = {};
            this.search_movies = [];
            console.log(pattern);
            this.search_obj = await this.getMovies("get/name/" + pattern + "?per_page=9&page=1");
            this.search_movies = this.search_obj.get;
            console.log(this.search_movies);
        },
    },
    async mounted() {
        console.log(data);
        let getter = [];

        getter = await this.getMovies("get/movie/");
        this.movies = getter.get;

        getter = await this.getMovies("get/mostpopular/");
        this.top_15_popular = getter.get.slice(0, 15);

        this.top_5_revenue = this.sort_top_5_revenue();

        getter = await this.getMovies("get/top50/");
        this.top_15_rating = getter.get.slice(0, 15);
    },
    template: `
        <div class="container-movies-info">
            <top @darkModeChange="handleDarkMode"/>
            <searchBar @reloadPage="reloadPage"
                        @getSearchMovies="getSearchMovies"
                        @getMoviesByActors="getMoviesByActors"/>
            <div v-if="showDetail">
                <movieDetail/>
            </div>
            <div v-else-if="show_searched_movies">
                <searchedMovies @showMovieDetail="showMovieDetail"/>
            </div>
            <div v-else>
                <topRevenue @showMovieDetail="showMovieDetail"/>
                <mostPopularSlider @showMovieDetail="showMovieDetail"/>
                <topRatingSlider @showMovieDetail="showMovieDetail"/>
            </div>
            <bottom/>
        </div>
    `,
};