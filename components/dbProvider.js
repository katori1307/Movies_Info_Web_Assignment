import data from "../db/data.js";


export function fetchMovies(request) {
    const { type, m_class, pattern, params_obj } = parseRequest(request);
    if (params_obj === undefined) {
        console.log("obj is null");
    }
    // console.log("Type:", type);
    // console.log("Class:", m_class);
    // console.log("Pattern:", pattern);
    // console.log("Params obj: ", params_obj);
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
            // console.log("is in detail case");
            // console.log(data.Movies.find((item) => item.id === pattern));
            return Promise.resolve({
                detail: data.Movies.find((item) => item.id === pattern),
            });
        case "get":
            return Promise.resolve({
                get: data.Movies.slice((params.page - 1) * params.per_page, params.page * params.per_page),
            });
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
        return { type, m_class, pattern };
    }
}
export function myFunction() {
    console.log("Hello");
}
















// export default {
//     data() {
//         return {
//             movies_data: data
//         }
//     },
//     methods: {
//         fetchMovies(request) {
//             const { type, m_class, pattern, params } = this.parseRequest(request);
//             console.log(this.parseRequest(request));

//             switch (type) {
//                 case "search":
//                     break;
//                 case "detail":
//                     return Promise.resolve({
//                         detail: this.movies_data.Movies.find((item) => item.id === pattern),
//                     });
//                 case "get":
//                     break;
//             }
//         },
//         parseRequest(request) {
//             const [type, m_class, pattern_params] = request.split("/");
//             const [pattern, params] = pattern_params.split("?");
//             const params_obj = {};
//             if (params !== "") {
//                 const list_params = params.split("&");
//                 list_params.forEach((param) => {
//                     const [key, value] = param.split("=");
//                     params_obj[key] = value;
//                 });
//             }
//             return { type, m_class, pattern, params_obj }
//         },
//     },
// };

