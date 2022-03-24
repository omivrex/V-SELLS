import styles from '../styles/filter.module.css'
import { ReactElement } from 'react'

const Filter = ():ReactElement => {
    return ( 
        <li className={styles.filter}>
            <span className={styles.filterName}>
                Size
            </span> 
            <div className={styles.filterContentWrapper}>
                <div className={styles.content}>pomrglkmepdefqwed</div>
                <div className={styles.content}>pomrglkmepdefqwed</div>
                <div className={styles.content}>pomrglkmepdefqwed</div>
                <div className={styles.content}>pomrglkmepdefqwed</div>
                <div className={styles.content}>pomrglkmepdefqwed</div>
                <div className={styles.content}>pomrglkmepdefqwed</div>
                <div className={styles.content}>pomrglkmepdefqwed</div>
            </div>
        </li>
    );
}
 
export default Filter;