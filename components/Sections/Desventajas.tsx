import { LazyLoadImage, LazyLoadComponent} from 'react-lazy-load-image-component';

import costo from '../../assets/img/istock-1129146997.jpg';
import fake from '../../assets/img/fake.png'
import dudas from '../../assets/img/portabilidad-nomina.jpg'

const Desventajas = () =>
<div>
    <div 
        className='uk-text-center uk-margin-large-top'
        data-uk-scrollspy="cls: uk-animation-slide-top; target: .uk-heading-medium; delay: 300; repeat: true" id='Nosotros'>
        <h2 className='uk-heading-medium uk-text-bold'>Desventajas</h2>
    </div>
    <div className='uk-container uk-container-large'>
        <LazyLoadComponent>
            <div className='uk-child-width-1-3@m uk-grid-medium uk-grid-match uk-margin-medium-top' data-uk-grid>
                <div>
                    <div className="uk-card uk-card-default card">
                        <div className="uk-card-media-top uk-text-center uk-margin-top">
                            <LazyLoadImage src={costo} className='uk-height-medium' />
                        </div>
                        <div className="uk-card-body">
                            <div>
                                <h3 className="uk-card-title uk-margin-remove-bottom">Costo</h3>
                                <h4 className="uk-margin-remove-bottom uk-margin-remove-top">Mantener y desarrollar una solución así requiere una gran inversión.<br/>Pero la inversión vale la pena para erradicar el Dengue.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default card">
                        <div className="uk-card-media-top">
                            <LazyLoadImage src={fake} />
                        </div>
                        <div className="uk-card-body">
                            <div>
                                <h3 className="uk-card-title uk-margin-remove-bottom">Mal uso de la API</h3>
                                <h4 className="uk-margin-remove-bottom uk-margin-remove-top">Si la sociedad al reportar focos de infección le da un uso negativo a la API pueden producir 
                                información errónea al procesar los datos.
                                <br/>Por ello lo ideal es que un trabajador de la salud sea el que reporte focos.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default card">
                        <div className="uk-card-media-top">
                            <LazyLoadImage src={dudas} />
                        </div>
                        <div className="uk-card-body">
                            <div>
                                <h3 className="uk-card-title uk-margin-remove-bottom">Desconocimiento</h3>
                                <h4 className="uk-margin-remove-bottom uk-margin-remove-top">Apesar de la gran utilidad que proporcionaría para controlar el Dengue, la sociedad necesita seguir las recomendaciones de los expertos de la salud.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LazyLoadComponent>
    </div>
</div>

export default Desventajas;