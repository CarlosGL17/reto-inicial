import dynamic from 'next/dynamic';
const LazyBackground = dynamic(() => import('../LazyBackground/LazyBackground'));

import mosquito from '../../assets/img/mosquito.webp'

const Motivacion = () => 
<div>
    <div className='uk-section uk-section-default' id="Propuesta">
        <div className='uk-container uk-container-expand'>
            <div 
                className='uk-text-center'
                data-uk-scrollspy="cls: uk-animation-slide-top; target: .uk-heading-medium; delay: 300; repeat: true" id='Nosotros'>
                <h2 className='uk-heading-medium uk-text-bold'>Propuesta</h2>
            </div>
            <div className='uk-container uk-container-large'>
                <div className='uk-grid-large uk-margin-medium-top' data-uk-grid>
                    <div className='uk-width-1-2@s'>
                    <LazyBackground
                            classNames='uk-card uk-inline uk-height-large card-image'
                            urlImage={mosquito}
                            childComp={
                                <div className='flex light'>
                                    <div className='contain'>
                                        <p>Mosco del Dengue (Aedes Aegypti)</p>
                                    </div>
                                </div>
                            }
                        ></LazyBackground>
                    </div>
                    <div className='uk-width-1-2@s uk-text-justify'>
                        <div className='uk-card uk-card-default uk-card-body'>
                            <p>
                                La solución que propongo a la problemática anteriormente planteada utilizando la nube e inteligencia artificial es la siguiente.
                            </p>
                            <h3 className="uk-card-title uk-margin-remove-top">API</h3>
                            <p>
                                A grandes rasgos consiste en crear una <span className='uk-text-bold'>API (App Service en Azure) para reportar focos de infección</span> de Dengue. 
                                <br/>
                                La API estaría disponible para todo el público, pero su principal uso está destinado a 
                                instituciones de salud/salubridad que realizan inspecciones periódicamente a los domicilios, pudiendo así reportar focos de infección gracias a la API.
                                También permitiría reportar la información de origen de pacientes con Dengue que lleguén a los centros de salud con el objetivo de obtener aún más datos.
                                <br/>Los usuarios podrían consultar el <span className='uk-text-bold'>estado actual de las zonas</span> proporcionadas por el API con <span className='uk-text-bold'>implementación de Bing Maps API</span> para tomar las medidas necesarias y recomendadas.
                                <br/>
                            </p>
                            <h3 className="uk-card-title uk-margin-remove-top">Inteligencia Artificial</h3>
                            <p>
                                Una vez recolectados los datos de la API con ayuda de la <span className='uk-text-bold'>inteligencia artificial de Azure</span>, se crearía un modelo para <span className='uk-text-bold'>predecir futuros focos de infección y optimizar rutas para fumigar</span> las zonas también con el uso de Bing Maps API.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

export default Motivacion;