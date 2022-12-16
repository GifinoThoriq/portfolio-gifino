import NavBurger from "../../ui/NavBurger"
import NavDefault from "./NavDefault"
import styles from "../style/navigation/NavProject.module.css"

export default function NavProject({width, onNavIndex}){

    function indexChangeHandler(i){
        onNavIndex(i)
    }

    const list = ["UI UX Design", "Web Development", "Internet of Things"]

    return(
        <nav className={styles.navProject}>
            { width <= 768 
                ? <NavBurger
                    onIndexChange={indexChangeHandler}
                    list = {list}

                /> 
                : <NavDefault
                    onIndexChange={indexChangeHandler}
                /> 
            }
        </nav>
    )
}