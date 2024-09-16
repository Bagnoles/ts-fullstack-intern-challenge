import { useState } from 'react';
import { Cat } from '../../types/cat.type';
import LikeBtn from '../like-btn/like-btn';

type CatCardProps = {
  info: Cat;
}

function CatCard({info}: CatCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const changeFavoriteStatus = () => {
    setIsFavorite(!isFavorite);
  } 
  
  return (
    <li className="cat_item">
      <img src={info.url} alt="Кот" className="cat_image" />
      <LikeBtn isFavorite={isFavorite} clickHandler={changeFavoriteStatus} />
    </li>
  )
}
  
export default CatCard;