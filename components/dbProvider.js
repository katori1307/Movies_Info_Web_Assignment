import data from "../db/data.js";


export function fetchMovies(request) {
    const { type, m_class, pattern, params_obj } = parseRequest(request);
    // console.log("Type:", type);
    // console.log("Class:", m_class);
    // console.log("Pattern:", pattern);
    // console.log("Params obj: ", params_obj);
    // console.log(params_obj.page);
    // console.log(params_obj.per_page);
    switch (type) {
        case "search":
            return Promise.resolve({
                search: pattern,
                page: params_obj.page || 1,
                per_page: params_obj.per_page,
                total_page: Math.ceil(data.Movies.length / params_obj.per_page),
                total: data.Movies.length,
                items: data.Movies.filter((item) => item.title.toLowerCase().includes(pattern.toLowerCase())),
            });
        case "detail":
            return Promise.resolve({
                detail: data.Movies.find((item) => item.id === pattern),
            });
        case "get":
            switch (m_class) {
                case "movie":
                    return Promise.resolve({
                        get: data.Movies.slice(
                            params_obj.per_page === 0 ? 0 : (params_obj.page - 1) * params_obj.per_page,
                            params_obj.per_page === 0 ? data.Movies.length : params_obj.page * params_obj.per_page
                        ),
                    });

                case "name":
                    return Promise.resolve({
                        get: data.Names.slice(
                            params_obj.per_page === 0 ? 0 : (params_obj.page - 1) * params_obj.per_page,
                            params_obj.per_page === 0 ? data.Names.length : params_obj.page * params_obj.per_page
                        ),
                    });
                case "review":
                    return Promise.resolve({
                        get: data.Reviews.slice(
                            params_obj.per_page === 0 ? 0 : (params_obj.page - 1) * params_obj.per_page,
                            params_obj.per_page === 0 ? data.Reviews.length : params_obj.page * params_obj.per_page
                        ),
                    });
                case "top50":
                    return Promise.resolve({
                        get: data.Top50Movies.slice(
                            params_obj.per_page === 0 ? 0 : (params_obj.page - 1) * params_obj.per_page,
                            params_obj.per_page === 0 ? data.Top50Movies.length : params_obj.page * params_obj.per_page
                        ),
                    });
                case "mostpopular":
                    return Promise.resolve({
                        get: data.MostPopularMovies.slice(
                            params_obj.per_page === 0 ? 0 : (params_obj.page - 1) * params_obj.per_page,
                            params_obj.per_page === 0 ? data.MostPopularMovies.length : params_obj.page * params_obj.per_page
                        ),
                    });
            }
    }
}
function parseRequest(request) {
    const [type, m_class, pattern_params] = request.split("/");
    if (pattern_params.includes("?")) {
        const [pattern, params] = pattern_params.split("?").trim();
        const params_obj = {};
        if (params !== "") {
            const list_params = params.split("&").trim();
            list_params.forEach((param) => {
                const [key, value] = param.split("=");
                params_obj[key] = value;
            });
        }
        return { type, m_class, pattern, params_obj };
    } else {
        const pattern = pattern_params;
        const params_obj = {
            page: 0,
            per_page: 0
        };
        return { type, m_class, pattern, params_obj };
    }
}
export function myFunction() {
    console.log("Hello");
}










