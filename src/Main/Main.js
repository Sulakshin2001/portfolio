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
                         src='https://sun9-57.userapi.com/impg/Xrsnqb3OM9UCbRJJZ14K7WORHL3o868yteGI1Q/s82TLmUVRwY.jpg?size=1197x1600&quality=96&sign=929ed3dcfc4d90fddeb2c67917b4e8db&type=album '/>
                </div>
            </div>
        </div>
    )
}