import styles from "./Card.module.css";

/*want to wrap this component around */
function Card(props){
    return <div className={styles.card}>
        {props.children}
    </div>
}

export default Card;
