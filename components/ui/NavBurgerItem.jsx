import styles from './NavBurger.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function NavBurgerItem({item, index, navIndex, onListHandler}){

    function clickHandler(i) {
        onListHandler(i)
    }

    const { asPath } = useRouter();

    if (asPath === '/'){ 
        return(
            <li 
                className={styles.active}
                onClick={()=>{clickHandler(index)}}
            >
                {item}
            </li>
        )
    } else{
        return(
            <li
                onClick={()=>{clickHandler(index+1)}}
                className={navIndex === index+1 ? styles.active : ''}
            >
                {item}
            </li>
        )
    }

}