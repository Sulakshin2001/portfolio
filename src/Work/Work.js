import s from './Work.module.css'
import {Project} from "./Project";
import socialImage from '../../src/Assets/sotsset-2048x1846.jpg'
import totolistImage from '../../src/Assets/printable-to-do-list-sq.webp'

export const Work = () => {
    const socialNetwork={
        color:'blue',
        backgroundImage:`url(${socialImage})`
    }
    const todolist={
        color:'blue',
        backgroundImage:`url(${totolistImage})`
    }
    return (
        <div className={s.work}>
            <div className={s.container}>
                <div className={s.title} >
                    <h2>
                        My Works
                    </h2>
                </div>


                <div className={s.project}>
                    <Project title='Project 1' style={socialNetwork} name={'Social Network'}/>
                    <Project title='Project 2' style={todolist} name={'ToDoList'}/>

                </div>
            </div>
        </div>
    )
}