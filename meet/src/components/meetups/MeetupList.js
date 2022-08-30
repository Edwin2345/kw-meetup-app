import MeetupItem from './MeetupItem';
import styles from './MeetupList.module.css';

function MeetupList(props) {
      return (
        <ul className={styles.list}>
            {props.meetups.map( (meetup) => (
                /* key is a mandatory prop when iterating*/
                <MeetupItem 
                key={meetup.id}  
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                date={meetup.date}
                description={meetup.description}
                />
                
             ))}
        </ul>
      );
}

export default MeetupList;
