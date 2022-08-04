import styles from './Skills.module.css'
import {Skill} from "./skill/Skill";
export const Skills = () => {
    return (
        <div className={styles.skillBlock}>
            <div className={styles.container}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}></div>
                <Skill title='React' description='Lorem ipsum Lorem ipsusssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssv'/>
                <Skill title='Typescript' description='Lorem ipsum Lorem ipsss'/>
                <Skill title='Html' description='Lorem ipsum Lorem ipsuv'/>
                <Skill title='Css' description='Lorem ipsum Lorem ipsuv'/>
                <Skill title='Redux' description='Lorem ipsum Lorem ipsuv'/>
            </div>
        </div>
    )
}