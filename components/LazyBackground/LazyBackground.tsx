import React, {useState, useEffect} from 'react';

type ParentCompProps = {
    childComp?: string | JSX.Element;
    urlImage?: string,
    classNames?: string,
  }

const ParentComp: React.FC<ParentCompProps> = ({urlImage, classNames, childComp}) => {
    const [sourceLoaded, setSourceLoaded] = useState(''); 

    useEffect(() => {
        const img = new Image()
        img.src = urlImage
        img.onload = () => setSourceLoaded(urlImage)
    }, [urlImage]);
  
    return <div className={classNames} style={{backgroundImage: `url(${sourceLoaded})`}}>{childComp}</div>;
  };
    

export default ParentComp;