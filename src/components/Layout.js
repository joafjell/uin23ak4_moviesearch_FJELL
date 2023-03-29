import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div className="container">
            <header>
                <Link to="/">
                    <h1 className="pageTitle">Moviepage</h1>
                </Link>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                
            </footer>
        </div>
    )
}