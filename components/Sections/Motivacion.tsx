import { LazyLoadImage } from 'react-lazy-load-image-component'; 

import zamora from '../../assets/img/arton.jpg'

const Motivacion = () => 
<div>
    <div className='uk-section uk-section-default'>
        <div className='uk-container uk-container-expand uk-margin-top'>
            <div 
                className='image-division'
                style={{backgroundImage: `url(${zamora})`}}
                data-uk-scrollspy="cls: uk-animation-slide-top; target: .uk-heading-medium; delay: 300; repeat: true" id='Nosotros'>
                <h2 className='uk-heading-medium uk-text-bold'>Motivación del proyecto</h2>
            </div>
            <div className='uk-container uk-container-large'>
                <div className='uk-grid-large uk-margin-medium-top' data-uk-grid>
                    <div className='uk-width-expand@s'>
                        <h2 className='message uk-heading uk-heading-xlarge'>
                            <span className='hr'>Las</span><br/>
                            <span className='hr'>cosas</span><br/>
                            <span className='hr'>buenas</span><br/>
                            <span className='hr'>toman</span><br/>
                            <span className='hr'>tiempo</span>
                        </h2>
                    </div>
                    <div className='uk-width-1-2@s uk-text-right'>
                        <div className=''>
                            <h3>
                                ¡Hola! Mi nombre es Carlos Humberto, estoy en primer semestre de Ing. en Sistemas Computacionales en el ITESZ de la ciudad de Zamora, Michoacán. 
                                <br/>Frecuentemente en mi ciudad de origen en temporadas de lluvias surgen brotes de Dengue bastante alarmantes, que ponen en riesgo a la población en 
                                general... Por ello aprovechando todo el avance tecnológico del que nos brinda la nube de Azure e inteligencia artificial, presento mi proyecto para prevenir 
                                futuros brotes y focos de contagio.
                            </h3>
                        </div>
                        <div>
                            <LazyLoadImage src={zamora} className='image'></LazyLoadImage>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

export default Motivacion;