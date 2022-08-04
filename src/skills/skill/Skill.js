import s from './Skill.module.css'

export const Skill = (props) =>{
    return(
        <div className={s.skill}>
            <div className={s.ikon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>

                {props.description}
            </span>

        </div>

    )
}