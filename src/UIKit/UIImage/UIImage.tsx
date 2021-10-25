import React from 'react';
import './UIImages.scss';
import Classnames from 'classnames';
import classNames from 'classnames';

interface UIImageProps {
  src: string;
  alt: string;
  containerClassName?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const UIImage: React.FC<UIImageProps> = (props) => {
  const { src, alt, containerClassName, width, height, className } = props;
  return (
    <div className={Classnames('image--container', containerClassName)}>
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={Classnames('image--container__img', classNames)}
      />
    </div>
  );
};

export default UIImage;
