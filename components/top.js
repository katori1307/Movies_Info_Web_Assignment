export default {
    data() {
        return {
            darkMode: false,
        }
    },
    template: `
        <nav id="movieInfoTop" class="navbar navbar-light my-2 rounded-2">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold">21127147</a>
                <p class="text-center my-0 fs-2 fw-bold">Movies Info</p>
                <div class="switch-group">
                    <label class="switch">
                        <input type="checkbox" v-model="darkMode" @change="$emit('darkModeChange', this.darkMode)">
                        <span class="slider round"></span>
                    </label>
                    <i class="fa-solid fa-gear mx-3 fs-2"></i>
                </div>
            </div>
        </nav>
    `,
}