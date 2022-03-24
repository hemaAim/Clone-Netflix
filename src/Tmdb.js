import MovieRow from "./components/MovieRow";

const API_KEY = '69385739a951f7e42a83ae7857a936bb';
const API_BASE = 'https://api.themoviedb.org/3'; 


const basicFetch = async (endpoint) => { 

    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default { 
    
    getHomeList: async () => { 
        
        return [ 
            {
                slug: 'originals',
                title: "Originais do Netflix",
                
                items: await basicFetch(`/discover/tv?with_network=123&language=pt-BR&api_key=${API_KEY}`),
              
            },
        
            {
                slug: 'trending',
                title: "Recomendados para Você",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: "Em Alta",
                items: await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            }, {
                slug: "comedy",
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
          
        ];
    },

getMovieInfo: async( movieId, type) => { 
    let info = {} ; 
    if(movieId) {
        switch(type){ 
             case 'movie': 
               info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
            case 'tv': 
            info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            if(movieId == '158280'){  
               
              info = await  basicFetch(`/tv/125030?language=pt-BR&api_key=${API_KEY}`);
              
               
            }
                
                break; 

                default: 
                info = null; 
                break;
        }
    } 
    return info;
}

} 