const NavbarItems = () =>
<div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark;">
    <nav className="uk-navbar-container">
        <div className="uk-container nav uk-container-expand">
            <div data-uk-navbar>
                <div className="nav-overlay uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="#">TuTiendita</a>
                </div>

                <div className="nav-overlay uk-navbar-right">
                    <a className="uk-navbar-toggle" data-uk-search-icon data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
                    <ul className="uk-navbar-nav">
                        <li><a href="#"><span data-uk-icon='icon: cart'></span></a></li>
                        <li><a className="uk-navbar-toggle" data-uk-navbar-toggle-icon href="#offcanvas" data-uk-toggle="target: #offcanvas"></a></li>
                    </ul>
                </div>

                <div className="nav-overlay uk-navbar-right " hidden>
                    <div className="uk-navbar-item uk-width-expand">
                        <form className="uk-search uk-search-navbar uk-width-1-1">
                            <input className="uk-search-input" type="search" placeholder="Search" autoFocus={true}/>
                        </form>
                    </div>
                    <a className="uk-navbar-toggle" data-uk-close data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
                    <ul className="uk-navbar-nav">
                        <li><a href="#"><span data-uk-icon='icon: cart'></span></a></li>
                        <li><a className="uk-navbar-toggle" data-uk-navbar-toggle-icon href="#offcanvas" data-uk-toggle="target: #offcanvas"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div id="offcanvas" data-uk-offcanvas="flip: false; overlay: true">
        <div className="uk-offcanvas-bar">
            <h3>TuTiendita</h3>
            <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                <li>
                    <form className="uk-search uk-search-default uk-width-1-1">
                        <span data-uk-search-icon></span>
                        <input className="uk-search-input" type="search" placeholder="Buscar productos"/>
                    </form>
                </li>
                <li className="uk-nav-header uk-margin-small-bottom">
                    Categorias
                </li>
                <li className="uk-parent">
                    <a href="#">Desayunos</a>
                    <ul className="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
                <li className="uk-parent">
                    <a href="#">Bebidas</a>
                    <ul className="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
                <li className="uk-parent">
                    <a href="#">Cafes</a>
                    <ul className="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
                <li className="uk-parent">
                    <a href="#">Postres</a>
                    <ul className="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>

                <li className='uk-margin-small-top'><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: cart"></span> Carrito</a></li>
                <li><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: user"></span> Cuenta</a></li>
                <li className="uk-nav-divider uk-margin-top"></li>
                <li><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: facebook"></span> Facebook</a></li>
                <li><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: whatsapp"></span> WhatsApp</a></li>
                <li><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: instagram"></span> Instagram</a></li>
            </ul>
        </div>
    </div>
</div>


export default NavbarItems;