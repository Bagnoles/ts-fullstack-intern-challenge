import { Cat } from '../../types/cat.type';
import CatCard from '../cat-card/cat-card';

type CatListProps = {
  data: Cat[];
}

function CatList({data}: CatListProps) {
  
  return (
    <ul className="cats_list">
      {data.map((item) => <CatCard info={item} key={item.id} />)}
    </ul>
  )
}
  
export default CatList;