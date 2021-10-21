import LazyBackground from './LazyBackground/LazyBackground';
import Portada2 from '../assets/img/pexels-erik-karits-9950359.jpg';
import Portada from '../assets/img/pexels-pixabay-86722.jpg'

const Background = () => 
    <div className='uk-section uk-flex-center uk-flex uk-flex-wrap sectionPresent' data-uk-scrollspy="cls: uk-animation-slide-top; target: .uk-heading-small, .uk-heading-xlarge; delay: 300; repeat: true">
        <LazyBackground classNames="front uk-flex uk-flex-center uk-flex-middle uk-text-center uk-flex-wrap loader" urlImage={Portada}
            childComp={<h1 style={{position: 'absolute'}} className='uk-heading-xlarge'>NUBE VS DENGUE</h1>}
        >
        </LazyBackground>
        <div className='subfront uk-flex uk-flex-center uk-flex-middle'>
            <LazyBackground classNames="imageSub uk-flex uk-flex-center uk-flex-middle uk-text-center loader" urlImage={Portada2} 
            childComp={<h2 style={{position: 'absolute'}} className='uk-heading-small'>Aplicación de la Nube <br/>contra el Dengue</h2>}
            >
            </LazyBackground>
        </div>
    </div>

export default Background;