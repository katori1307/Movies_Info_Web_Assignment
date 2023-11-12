export default {
    data() {
        return {
            searchText: "",
        }
    },
    template: `
        <nav id="searchBar" class="navbar navbar-light rounded-2">
            <div class="container-fluid">
            <i class="fa-solid fa-house mx-3 fs-3" @click="$emit('reloadPage')"></i>
            <form class="d-flex">
                <input v-model="searchText" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="button" @click="$emit('getSearchMovies', searchText)">Search</button>
            </form>
            </div>
        </nav>
    `,
}