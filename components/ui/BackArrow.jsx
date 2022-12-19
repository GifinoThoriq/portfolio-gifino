import styles from './BackArrow.module.css'
import Link from 'next/link'

export default function BackArrow(){
    return (
        <Link href={"/"}>
            <i className={styles.arrow}></i>
        </Link>
    )
}