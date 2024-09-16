type LikeBtnProps = {
  isFavorite: boolean;
  clickHandler: () => void
}

function LikeBtn({isFavorite, clickHandler}: LikeBtnProps) {
  
  return (
    <span 
      className={isFavorite ? 'like_button like_button-active' : 'like_button'}
      onClick={clickHandler}
    ></span>
  )
}
  
export default LikeBtn;