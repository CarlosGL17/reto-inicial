import { LazyLoadImage } from 'react-lazy-load-image-component'; 

import Step1 from '../../assets/img/undraw_Alert_re_j2op.svg';
import Step2 from '../../assets/img/undraw_medical_research_qg4d.svg';
import Step3 from '../../assets/img/undraw_map_1r69.svg';
import Step4 from '../../assets/img/undraw_Artificial_intelligence_re_enpp.svg';
import Step5 from '../../assets/img/undraw_studying_s3l7.svg'

const Aplicacion = () =>
<div>
        <div 
            className='division-dark uk-margin-large-top'
            data-uk-scrollspy="cls: uk-animation-slide-top; target: .uk-heading-medium; delay: 300; repeat: true" id='Nosotros'>
            <h2 className='uk-heading-medium uk-text-bold'>¿Cómo se aplicaría?</h2>
        </div>
        <div className='uk-container uk-container-large'>
                <div className='uk-grid-large uk-margin-medium-top uk-flex uk-flex-middle uk-text-center' data-uk-grid>
                    <div className='uk-width-1-2@s'>
                        <div>
                            <LazyLoadImage src={Step1} className='uk-height-large'></LazyLoadImage>
                        </div>
                    </div>
                    <div className='uk-width-1-2@s uk-text-left'>
                        <div className=''>
                            <h2>
                                1. El usuario o trabajador de la salud reporta en la API el foco de infección
                            </h2>
                        </div>
                    </div>

                    <div className='uk-width-1-2@s uk-text-left'>
                        <div className=''>
                            <h2>
                                2. Reporte de los datos de los centros de salud a la API
                            </h2>
                        </div>
                    </div>
                    <div className='uk-width-1-2@s'>
                        <div>
                            <LazyLoadImage src={Step2} className='uk-height-large'></LazyLoadImage>
                        </div>
                    </div>

                    <div className='uk-width-1-2@s'>
                        <div>
                            <LazyLoadImage src={Step3} className='uk-height-large'></LazyLoadImage>
                        </div>
                    </div>
                    <div className='uk-width-1-2@s uk-text-left'>
                        <div className=''>
                            <h2>
                                3. Se pueden consultar las zonas de infección recopiladas por la API usando Mapas proporcionados por Bing Maps API 
                            </h2>
                        </div>
                    </div>

                    <div className='uk-width-1-2@s uk-text-left'>
                        <div className=''>
                            <h2>
                                4. La Inteligencia Artificial predice zonas de infección y optimiza rutas de fumigación
                            </h2>
                        </div>
                    </div>
                    <div className='uk-width-1-2@s'>
                        <div>
                            <LazyLoadImage src={Step4} className=''></LazyLoadImage>
                        </div>
                    </div>

                    <div className='uk-width-1-2@s'>
                        <div>
                            <LazyLoadImage src={Step5} className=''></LazyLoadImage>
                        </div>
                    </div>
                    <div className='uk-width-1-2@s uk-text-left'>
                        <div className=''>
                            <h2>
                                5. ¡Aprovecha la información brindada y sigue siempre las recomendaciones!
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
</div>

export default Aplicacion;