import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
    return ( 
        <>
            <ScrollRestoration />
            <header className="bg-blue-600 p-4 sm:p-6 text-center">
                <h1 className="2xl font-bold text-neutral-100">Pokedex App</h1>
            </header>
            <main className="m-4">
                <Outlet />
            </main>
        </> 
    );
}
 
export default Layout;