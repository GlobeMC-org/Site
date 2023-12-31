import { Outlet } from "react-router-dom";

const Nav = () => {
    const Home   = () => window.location.href = "/";
    const Map     = () => window.location.href = "http://65.108.18.28:25663";
    const Guide   = () => window.location.href = "/guide";
    const Rules   = () => window.location.href = "/rules";
    const Mods    = () => window.location.href = "/mods";
    const Discord = () => window.location.href = "/discord";

    return(
      <>
        <nav>
          <ul>
            <li onClick={Home}><b>GlobeMC</b></li>
            <li onClick={Map}>Map</li>
            <li onClick={Guide}>Guide</li>
            <li onClick={Rules}>Rules</li>
            <li onClick={Mods}>Mods</li>
            <li onClick={Discord}>Discord</li>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </>
    )
}

export default Nav;
