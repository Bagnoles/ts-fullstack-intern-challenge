import { useAppSelector, useAppDispatch } from '../../hooks/store-hooks';
import { getLikes } from '../../store/like/like-selectors';
import { Cat } from '../../types/cat.type';
import LikeBtn from '../like-btn/like-btn';
import { createLike, deleteLike } from '../../store/api-actions';

type CatCardProps = {
  info: Cat;
}

function CatCard({info}: CatCardProps) {
  const dispatch = useAppDispatch();
  const likes = useAppSelector(getLikes);
  const isFavorite = !!likes.filter((like) => like.cat_id === info.id).length;

  const changeFavoriteStatus = () => {
    if (isFavorite) {
      dispatch(deleteLike(info.id));
    } else {
      dispatch(createLike({
        cat_id: info.id,
        created_at: new Date().toISOString()
      }));
    }
  } 
  
  return (
    <li className="cat_item">
      <img src={info.url} alt="Кот" className="cat_image" />
      <LikeBtn 
        isFavorite={isFavorite} 
        clickHandler={changeFavoriteStatus} 
      />
    </li>
  )
}
  
export default CatCard;