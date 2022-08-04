import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./skills/Skills";
import {Work} from "./Work/Work";
import {Contact} from "./contact/Contact";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Work/>
            <Contact/>
            <Footer/>


        </div>
    );
}

export default App;
