import styled from 'styled-components';

export const Featured = styled.div`
height: 110vh;   
`;
export const Featured__Vertical = styled.div`
 width: inherit;
 height: inherit;
 background:  linear-gradient(to top, rgb(17, 17, 17) 10%, transparent 90%);
 `;

export const Featured__Horizontal = styled.div` 
    width: inherit;
    height: inherit;
    background:linear-gradient(to right, rgb(17, 17, 17)20%,  transparent 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 50px; 
    margin-top: -50px;
`;
export const Featured__Name = styled.div`
    font-size: 60px;
    font-weight: bold;
    `; 

export const Featured__Info = styled.div` 
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
` ;
export const Featured__Points = styled.div`
color: #46d369;
display: inline-block;
margin-right: 15px;
` ;
export const Featured__Year = styled.div`

display: inline-block;
margin-right: 15px;
` ;
export const Featured__Seasons = styled.div`

display: inline-block;
margin-right: 15px;
` ; 
export const Featured__Description = styled.div` 
   margin-top: 30px;
    font-size: 20px;
    color: #9999;
    max-width: 520px; 
    margin-bottom: 30px; 
`; 

export const Featured__Buttons = styled.div`
margin-top: 15px; 
margin-bottom:10px;
`
export const Featured__Buttons_watch = styled.a`
    background-color: #fff;
    color: black;

    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
    &:hover {
     opacity: 0.7;  
    }

`
export const Featured__Buttons_list = styled.a`
    background-color: #333;
    color: #fff;

    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s; 
    &:hover {
     opacity: 0.7;  
    }
` 
export const Featured__Genres = styled.div`
 margin-top: 15px;
    font-size: 18px;
    color: #999;
` ;
export  const Link__Genres = styled.a` 
text-decoration: none ;
color: white; 
margin-left:5px ;
&:hover {  
    transition: all ease 0.3s;
    color: rgb(175, 175, 175);
}
 `