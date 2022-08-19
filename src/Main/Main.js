import styles from './Main.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 className={styles.name}>Hello I am <span className={styles.Nikita}>Nikita Sulakshin</span><p>Frontend Developer </p>

                    </h1>
                </div>
                <div>
                    <img className={styles.photo}
                         src='https://sun9-67.userapi.com/impg/k5xHPMzkp_dKpp7sJcp7_jxhkelLzYBZdkftog/UsF4hNQiO7M.jpg?size=825x1100&quality=96&sign=f7e03f99dc2433eaadffce26bc0c6ceb&type=album '/>
                </div>
            </div>
        </div>
    )
}