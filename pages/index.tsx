import dynamic from 'next/dynamic';
const Wallpaper = dynamic(()=> import('../components/Wallpaper'))
const Navbar = dynamic(()=> import('../components/Navbar/Navbar'))
const Motivacion = dynamic(()=> import('../components/Sections/Motivacion'));

const myApp = () =>
<div>
    <Wallpaper/>
    <Navbar/>
    <div>
        <Motivacion/>
    </div>
</div>

export default myApp;