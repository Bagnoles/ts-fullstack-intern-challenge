import CatList from '../../components/cat-list/cat-list';
import Header from '../../components/header/header';
import { useAppSelector, useAppDispatch } from '../../hooks/store-hooks';
import { fetchCat } from '../../store/api-actions';
import { getFavoriteCats } from '../../store/cat/cat-selectors';
import { getLikes, getLikesLoadingStatus, getLikesErrorStatus } from '../../store/like/like-selectors';

function FavoriteScreen() {
  const dispatch = useAppDispatch();
  const likes = useAppSelector(getLikes);
  const isServerError = useAppSelector(getLikesErrorStatus);
  const isLoading = useAppSelector(getLikesLoadingStatus);
  const favoriteCats = useAppSelector(getFavoriteCats);

  if (likes.length > 0) {
    likes.slice().forEach((like) => dispatch(fetchCat(like.cat_id)));
  }

  if (isServerError) {
    return <p>Произошла ошибка. Попробуйте еще раз.</p>
  }
  
  return (
    <>
      <Header active="favorite" />
      <div className='container'>
        { isLoading ? 'Идет загрузка...' : favoriteCats.length === 0 ? 'Вы пока не выбрали любимых котиков...' : <CatList data={favoriteCats} /> }
      </div>
    </>
  )
}
  
export default FavoriteScreen;