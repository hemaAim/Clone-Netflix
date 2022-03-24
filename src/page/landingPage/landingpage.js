import React, { useEffect, useState } from 'react';
import '../../App.css'
import Tmdb from '../../Tmdb';
import MovieRow from '../../components/MovieRow'; 
import FeaturedMovie from '../../components/FeaturedMovie/FeaturedMovie';

function Landing(){ 
    const [movielist, setMovielist] = useState([]);
    const [featuredData, setFeaturedData] = useState(null); 
  
    useEffect(() => {
      const loadAll = async () => { 
  
        //pegando a lista total
        let list = await Tmdb.getHomeList(); 
        
       
       
        setMovielist(list);
   
  
        //pegando o featured
        let originals = list.filter(i=>i.slug === 'originals'); 
       //gerando um numero aleatorio. gerando esse numero ele vai mutiplicar pelo total de numeros. 
       //e como uma rray comeca no zero ele vai tirar um
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv') ;
        setFeaturedData(chosenInfo);
  
      }
      loadAll();
    }, []); 
  
  
    return ( 
      <div className="page"> 
     {featuredData &&
     <FeaturedMovie item={featuredData}/>
    }
     
        <section className="lists">
          {movielist.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} overview={item.overview} id={item.id}/>
          ))}
        </section>
      </div>);
}
export default  Landing;