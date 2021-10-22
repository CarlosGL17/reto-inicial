import { LazyLoadImage } from 'react-lazy-load-image-component'; 

import innovaccion from '../../assets/img/innovaccion.jpg'
import azure from '../../assets/img/azure.png';
import microsoft from '../../assets/img/microsoft.jpg'

const Contacto = () =>
<div className='uk-container uk-container-large uk-margin-large-top uk-margin-bottom contacto' id='Contacto'>
    <div className='uk-text-center' data-uk-grid>
        <div className='uk-width-1-1'>
            <h2 className='message uk-heading uk-heading-large'>
                <span className='hr'>Espero te<br/>haya gustado!</span><br/>
            </h2>
        </div>
        <div className='contact uk-width-1-1 uk-child-width-1-1 uk-flex uk-flex-center uk-flex-wrap'>
            <h3 className='uk-button-text uk-width-medium uk-margin-remove-bottom uk-margin-remove-left uk-margin-remove-right uk-margin-top uk-heading'><a href="https://www.facebook.com/profile.php?id=100005198865641" className='uk-link-reset'><span className="uk-margin-small-right" data-uk-icon="icon: facebook; ratio: 2.3"></span> Facebook</a></h3>
            <h3 className='uk-button-text uk-width-medium uk-margin-remove-bottom uk-margin-remove-left uk-margin-remove-right uk-margin-top uk-heading'><a href="https://www.instagram.com/carlos_lira17/" className='uk-link-reset'><span className="uk-margin-small-right" data-uk-icon="icon: instagram; ratio: 2.3"></span> Instagram</a></h3>
        </div>
        <div className='uk-width-1-1 uk-visible@m'>
            <h2 className='message uk-heading uk-heading-medium uk-margin-medium-top'>
                <span className='hr'>Mis redes<br/>sociales</span><br/>
            </h2>
        </div>
        <div className='uk-width-1-1 uk-hidden@m uk-margin-medium-top'>
            <h2 className='message uk-heading'>
                <span className='hr'>Mis redes<br/>sociales</span><br/>
            </h2>
        </div>
       <div className='uk-width-1-3@m'>
            <LazyLoadImage src={innovaccion} className='uk-height-small'></LazyLoadImage>
       </div>
       <div className='uk-width-1-3@m'>
            <LazyLoadImage src={azure}></LazyLoadImage>
       </div>
       <div className='uk-width-1-3@m'>
            <LazyLoadImage src={microsoft}></LazyLoadImage>
       </div>
    </div>
</div>

export default Contacto;