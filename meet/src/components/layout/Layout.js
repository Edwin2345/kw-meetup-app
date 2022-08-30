import styles from './Layout.module.css'
import MainNavigation from './MainNavigation';

function Layout(props){
     return(
       <div>
         <nav><MainNavigation/></nav>
         <main className={styles.main}>{props.children}</main>
       </div>
     )
}

export default Layout
