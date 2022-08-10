import s from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={s.all} >
            <div className={s.project} style={props.style}>
                <button className={s.viewButton}>Смотреть</button>
            </div>
            <div className={s.name}>{props.name}</div>
            <div className={s.discription}>Discription</div>
        </div>
    )
}