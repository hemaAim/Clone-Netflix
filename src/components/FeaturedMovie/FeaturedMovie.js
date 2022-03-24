import React from "react";

import * as C from './FeaturedMovieStyled'





export default ({ item, API_KEY }) => {

    console.log(item)

    let firstDate = new Date(item.first_air_date)

    let genres = []
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    } 
    

    return (
        <C.Featured style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }}>
            <C.Featured__Vertical>
                <C.Featured__Horizontal>
                    <C.Featured__Name>{item.original_name}</C.Featured__Name>

                    <C.Featured__Info>
                        <C.Featured__Points>{item.vote_average} pontos</C.Featured__Points>
                        <C.Featured__Year>{firstDate.getFullYear()}</C.Featured__Year>
                        <C.Featured__Seasons>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</C.Featured__Seasons>
                    </C.Featured__Info>
                    <C.Featured__Description >{item.overview}</C.Featured__Description>
                    <C.Featured__Buttons>
                       <C.Featured__Buttons_watch href={`https://www.themoviedb.org/tv/${item.id}/watch?language=pt-BR&api_key=${API_KEY}`} target="_blank" >► Assistir</C.Featured__Buttons_watch>
                        <C.Featured__Buttons_list href={`/list/add/${item.id}`} >+ minha lista</C.Featured__Buttons_list>
                    </C.Featured__Buttons >
                    <C.Featured__Genres><strong>Generos:</strong><C.Link__Genres href={`https://www.themoviedb.org/genre/${genres}/tv`} target="_blank">{genres.join(', ')}</C.Link__Genres></C.Featured__Genres>
                </C.Featured__Horizontal>
            </C.Featured__Vertical>
        </C.Featured>
    )

}