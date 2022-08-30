import {useContext} from 'react';
import styles from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';


function MeetupItem(props){
    const favoritesCtx = useContext(FavoritesContext)
    
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)
    
    function toggleFavoriteHandler(){
        if(itemIsFavorite){
          favoritesCtx.removeFavorite(props.id);
        }else{
          favoritesCtx.addFavorite({
            key: props.id,
            id: props.id,
            title: props.title,
            description: props.description,
            date: props.date,
            image: props.image,
            address: props.address
          });
        }
    }

    return(
      <li className={styles.item}>
         <Card>
           <div className={styles.image}>
               <img src={props.image} alt={props.image} />
           </div>
           <div className={styles.content}>
               <h3>{props.title}</h3>
               <p> <b> Location: {props.address}</b></p>
               <p><b>Date: {props.date}</b></p>
               <p>{props.description}</p>
           </div>
           <div className={styles.actions}>
               <button onClick={toggleFavoriteHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorite'}</button>
           </div>
         </Card>
      </li>
    )
}

export default MeetupItem;
