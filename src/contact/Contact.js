import s from './Contact.module.css'

export const Contact = () =>{
    return(
        <div className={s.contact}>
            <div className={s.container}>
            <h1>Contact</h1>
            <form className={s.form}>
                <input className={s.input}/>
                <input className={s.input}/>
                <textarea className={s.textarea}/>

            </form>
                <button className={s.button}>Send</button>
        </div>
        </div>
    )
}