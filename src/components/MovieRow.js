import React , {useState} from 'react';
import './MovieRow.css';



export default ({title, items, id}) => { 

const [scrollX, setScrollX] = useState(-600)


  const handLeftArrow = () => {  

      let x = scrollX + Math.round(window.innerWidth / 2);
    
      if(x > 0) {
      x = 0;
      }
      setScrollX(x);

  }
  const handLeRightArrow =() => { 
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;

    if((window.innerWidth - listW)> x){ 

      x = (window.innerWidth - listW) - 54;
    }

     setScrollX(x); 
  
  }
    return (

        <div className='movieRow'>
          <h2>{title}</h2>  
          <div className='movie-left' onClick={handLeftArrow}> 
          <img src="https://img.icons8.com/external-creatype-blue-field-colourcreatype/30/000000/
          external-arrow-arrows-creatype-blue-field-colourcreatype-74.png"/>
          </div>
          
          <div className='movie-right' onClick={handLeRightArrow}>
      
          <img style={{color: 'red'}} src="https://img.icons8.com/external-creatype-blue-field-colourcreatype/30/
          000000/external-arrow-arrows-creatype-blue-field-colourcreatype-87.png"/>

          </div>
          <div className="movieRow--listarea" >    
          <div className='movieRow--list' style={{
            marginLeft: scrollX,
            width: items.results.length * 150
          }}>  

          {items.results.length > 0 && items.results.map((item, key) =>(
             <div key={key} className='movieRow--item'>
           {item.id != '158280' ? <a href={`https://www.themoviedb.org/tv/${item.id}/watch?language=pt-BR`} target="_blank"> <img src={ `https://image.tmdb.org/t/p/w200${item.poster_path}`}/> </a>
            : <img src='https://image.tmdb.org/t/p/w200/dvTTuRqwvM6wkDuA0JviE58NSRp.jpg'/>}</div>))}
           </div>
          </div>
        </div>
        );
}