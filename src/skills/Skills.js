import styles from './Skills.module.css'
import {Skill} from "./skill/Skill";
export const Skills = () => {
    return (
        <div className={styles.skillBlock}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.container}>

               <ul className={styles.ulStyle}>
                <li className={styles.liStyle}><Skill title='React' description='Lorem ipsumssssssssssv' url1={'https://camo.githubusercontent.com/4b852202f52f838329a8b433657e44eed91c6a894c9ac8cf0f2682d49345882f/68747470733a2f2f7777772e706e676974656d2e636f6d2f70696d67732f6d2f3636342d363634343530395f69636f6e2d72656163742d6a732d6c6f676f2d68642d706e672d646f776e6c6f61642e706e67'}/></li>
                <li className={styles.liStyle}><Skill title='Typescript' description='Lorem ipsumssssssssssv' url1={'https://miro.medium.com/max/1200/1*yv1FPiwQigh_ZPKN7sNNAA.png'}/></li>
                <li className={styles.liStyle}><Skill title='Html' description='Lorem ipsumssssssssssv' url1={'https://techmanyata.in/wp-content/uploads/2022/01/html5_logo.png'}/></li>
                <li className={styles.liStyle}><Skill title='Css' description='Lorem ipsumssssssssssv' url1={'https://homebusinessmag.com/wp-content/uploads/2015/10/CSS.jpg'}/></li>
                <li className={styles.liStyle}><Skill title='Redux' description='Lorem ipsumssssssssssv' url1={'https://miro.medium.com/max/1024/1*oxGOHKM__99W659JhC4neQ.jpeg'}/></li>
               </ul>
            </div>
        </div>
    )
}