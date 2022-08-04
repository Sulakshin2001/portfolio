import s from './Footer.module.css'
export const Footer = () =>{
    return(
<div className={s.footer}>
    <div className={s.container}>
        <div><h1>Nikita Sulakshin</h1></div>
        <div className={s.href}>
            <div className={s.gray}></div>
            <div className={s.gray}></div>
            <div className={s.gray}></div>

        </div>
        <div className={s.author}><h3 > © 2022 Все права защищены </h3></div>
    </div>

</div>
    )
}