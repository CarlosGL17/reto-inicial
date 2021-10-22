import dynamic from 'next/dynamic';
const Wallpaper = dynamic(()=> import('../components/Wallpaper'))
const Navbar = dynamic(()=> import('../components/Navbar/Navbar'))
const Motivacion = dynamic(()=> import('../components/Sections/Motivacion'));
const Propuesta = dynamic(()=> import('../components/Sections/Propuesta'));
const Objetivos = dynamic(() => import('../components/Sections/Objetivos'))
const Desventajas = dynamic(() => import('../components/Sections/Desventajas'))
const Contacto = dynamic(() => import('../components/Sections/Contacto'))

const myApp = () =>
<div>
    <Wallpaper/>
    <Navbar/>
    <div>
        <Motivacion/>
        <Propuesta/>
        <Objetivos/>
        <div id="Desventajas"></div>
        <Desventajas/>
        <Contacto/>
    </div>
</div>

export default myApp;