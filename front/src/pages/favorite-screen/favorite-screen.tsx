import Header from '../../components/header/header';

function FavoriteScreen() {
  
  return (
    <>
      <Header active="favorite" />
      <div className='container'>
        Здесь будет список любимых котиков.
      </div>
    </>
  )
}
  
export default FavoriteScreen;