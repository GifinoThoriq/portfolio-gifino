import styles from '../styles/NavigationProject.module.css'
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function NavigationProject(){

    const router = useRouter()

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <nav className={styles.navContainer}>
                    <ul>
                        <li className={(router.pathname == '/project' ? styles.active : '')}>
                            <Link href={"/project"}>
                                UI UX Design
                            </Link>
                        </li>
                        <li className={(router.pathname == '/project/web' ? styles.active : '')}>
                            <Link href={"/project/web"}>
                                Web Development
                            </Link>
                        </li>
                        <li className={(router.pathname == '/project/iot' ? styles.active : '')}>
                            <Link href={"/project/iot"}>
                                Internet of Things
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.titleSection}>
                    <span>Projects</span>
                </div>
            </div>
        </div>
    )
}