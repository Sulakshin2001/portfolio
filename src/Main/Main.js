import styles from './Main.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <h1>I am Nikita Sulakshin</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photo}>
                    <img className={styles.photo}
                         src='https://sun9-8.userapi.com/impg/zBsosChAiUwYDsyuCSOsx4ArCFG9bnQhlU8nAQ/yItqAolIGHQ.jpg?size=1620x2160&quality=96&sign=f9890c76be5632057927fa7c2edf56e7&type=album'/>
                </div>
            </div>
        </div>
    )
}