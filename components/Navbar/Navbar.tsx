const Navbar = () =>
<div data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent display-none uk-light; top: 200">
    <nav className="uk-navbar-container display-none">
        <div className="uk-container nav uk-container-expand">
            <div data-uk-navbar>
                <div className="nav-overlay uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="#">#IARockstars</a>
                </div>

                <div className="nav-overlay uk-navbar-right">

                    <ul className="uk-navbar-nav">
                        <li><a className="uk-navbar-toggle" data-uk-navbar-toggle-icon href="#offcanvas" data-uk-toggle="target: #offcanvas"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div id="offcanvas" data-uk-offcanvas="flip: false; overlay: true">
        <div className="uk-offcanvas-bar">
            <h3>#IARockstars</h3>
            <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>

                <li className="uk-nav-header uk-margin-small-bottom">
                    Contenido
                </li>
                <li className="">
                    <a href="#Motivacion">Motivacion</a>
                </li>
                <li className="">
                    <a href="#Propuesta">Propuesta</a>
                </li>
                <li className="">
                    <a href="#Objetivos">Objetivos</a>
                </li>
                <li className="">
                    <a href="#Estrategias">Estrategias</a>
                </li>
                <li className="">
                    <a href="#Aplicacion">Aplicacion</a>
                </li>
                <li className="">
                    <a href="#Desventajas">Desventajas</a>
                </li>
                <li className="uk-nav-header uk-margin-small-bottom">
                    Redes sociales
                </li>
                <li><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: facebook"></span> Facebook</a></li>
                <li><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: instagram"></span> Instagram</a></li>
            </ul>
        </div>
    </div>
</div>

export default Navbar;