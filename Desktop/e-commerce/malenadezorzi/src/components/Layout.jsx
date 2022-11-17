import './../scss/app.scss';
import { NavBar } from "./NavBar";


export const Layout = ({children}) => {
    
    return (
        <main className='main-malena'>
            <NavBar/>
            {children}
        </main>
    )
}