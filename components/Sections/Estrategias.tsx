import { LazyLoadImage, LazyLoadComponent} from 'react-lazy-load-image-component';

import AppService from '../../assets/img/app-service-web.svg';
import BingMaps from '../../assets/img/Bing_Maps-Logo.svg';
import Ai from '../../assets/img/Ai.png';

const Estrategias = () =>
<div>
    <div 
        className='uk-text-center uk-margin-large-top'
        data-uk-scrollspy="cls: uk-animation-slide-top; target: .uk-heading-medium; delay: 300; repeat: true" id='Nosotros'>
        <h2 className='uk-heading-medium uk-text-bold'>Estrategias a llevar a cabo</h2>
    </div>
    <div className='uk-container uk-container-large'>
    <LazyLoadComponent>
        <div className='uk-child-width-1-3@m uk-grid-medium uk-grid-match uk-margin-medium-top' data-uk-grid>
            <div>
                <div className="uk-card uk-card-default card">
                    <div className="uk-card-media-top uk-text-center uk-margin-top">
                        <LazyLoadImage src={AppService} className='uk-height-medium' />
                    </div>
                    <div className="uk-card-body">
                        <div>
                            <h3 className="uk-card-title uk-margin-remove-bottom">API</h3>
                            <h4 className="uk-margin-remove-bottom uk-margin-remove-top">Reportar focos de infección en la API</h4>
                        </div>
                        <hr/>
                        <div className="uk-text-center">
                            <a className="uk-button uk-button-default uk-width-medium uk-padding-remove">¡Ir a la API!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="uk-card uk-card-default card">
                    <div className="uk-card-media-top">
                        <LazyLoadImage src={BingMaps} />
                    </div>
                    <div className="uk-card-body">
                        <div>
                            <h3 className="uk-card-title uk-margin-remove-bottom">Zonas de riesgo</h3>
                            <h4 className="uk-margin-remove-bottom uk-margin-remove-top">Consultar focos de infección por medio de Bing Maps API</h4>
                        </div>
                        <hr/>
                        <div className="uk-text-center">
                            <a className="uk-button uk-button-default uk-width-medium uk-padding-remove">¡Ir a Bing Maps!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="uk-card uk-card-default card">
                    <div className="uk-card-media-top">
                        <LazyLoadImage src={Ai} />
                    </div>
                    <div className="uk-card-body">
                        <div>
                            <h3 className="uk-card-title uk-margin-remove-bottom">Inteligencia Articial</h3>
                            <h4 className="uk-margin-remove-bottom uk-margin-remove-top">Analiza la información para prevenir focos de infección y optimiza rutas de fumigación.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LazyLoadComponent>
    </div>
</div>

export default Estrategias;