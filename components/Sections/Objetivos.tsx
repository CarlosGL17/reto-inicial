import dynamic from 'next/dynamic';
import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const LazyBackground = dynamic(() => import('../LazyBackground/LazyBackground'));

import reducir from '../../assets/img/reducir.jpg'
import prevenir from '../../assets/img/prevenir.jpeg'
import salvar from '../../assets/img/salvare.jpg';

const Estrategias = dynamic(() => import('../Sections/Estrategias'));
const Aplicacion = dynamic(() => import('../Sections/Aplicacion'));

const Objetivos = () =>
<div id="Objetivos">
    <div className='uk-section uk-section-default'>
        <div className='uk-container uk-container-expand'>
            <div 
                className='uk-text-center'
                data-uk-scrollspy="cls: uk-animation-slide-top; target: .uk-heading-medium; delay: 300; repeat: true" id='Nosotros'>
                <h2 className='uk-heading-medium uk-text-bold'>Objetivos</h2>
            </div>
            <div className='uk-container uk-container-large'>
                <LazyLoadComponent>
                    <div className='uk-grid-small uk-flex-center uk-margin-medium-top uk-text-center' data-uk-grid>
                        <div className='uk-width-1-3@m'>
                            <LazyBackground
                                classNames='uk-card uk-inline uk-height-large card-image'
                                urlImage={prevenir}
                                childComp={
                                    <div className='flex light'>
                                        <div className='contain'>
                                            <h3>Prevenir focos de infección</h3>
                                        </div>
                                    </div>
                                }
                            ></LazyBackground>
                        </div>
                        <div className='uk-width-1-3@m'>
                            <LazyBackground
                                classNames='uk-card uk-inline uk-height-large card-image'
                                urlImage={reducir}
                                childComp={
                                    <div className='flex light'>
                                        <div className='contain'>
                                            <h3>Reducir infecciones</h3>
                                        </div>
                                    </div>
                                }
                            ></LazyBackground>
                        </div>
                        <div className='uk-width-1-3@m'>
                            <LazyBackground
                                classNames='uk-card uk-inline uk-height-large card-image'
                                urlImage={salvar}
                                childComp={
                                    <div className='flex light'>
                                        <div className='contain'>
                                            <h3>Salvar vidas</h3>
                                        </div>
                                    </div>
                                }
                            ></LazyBackground>
                        </div>
                    </div>
                </LazyLoadComponent>
            </div>
            <div id="Estrategias"></div>
            <Estrategias/>
            <div id="Aplicacion"></div>
            <Aplicacion/>
        </div>
    </div>
</div>

export default Objetivos;