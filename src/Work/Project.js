import s from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={s.all}>
            <div className={s.project}>
                <div>
                    {props.title}
                </div>
                <div className={s.look}>
                    Look

                </div>
            </div>
            <div className={s.name}>Project name</div>
            <div className={s.discription}>Discription</div>
        </div>
    )
}