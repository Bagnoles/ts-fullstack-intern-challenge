import CatList from '../../components/cat-list/cat-list';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks/store-hooks';
import { getCats, getLoadingStatus, getErrorStatus } from '../../store/cat/cat-selectors';


function MainScreen() {
  const cats = useAppSelector(getCats);
  const isServerError = useAppSelector(getErrorStatus);
  const isLoading = useAppSelector(getLoadingStatus);

  if (isServerError) {
    return <p>Произошла ошибка. Попробуйте еще раз.</p>
  }

  return (
    <>
      <Header active="main" />
      <div className='container'>
        { isLoading ? 'Идет загрузка...' : <CatList data={cats} /> }
      </div>
    </>
  )
}
  
export default MainScreen;