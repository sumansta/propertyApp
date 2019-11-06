import React from 'react';
import {Image} from 'react-native';

import images from '../../config/images';

import {Container} from './style';

const LogoContainer = () => {
  return (
    <Container>
      <Image source={images.image1} style={{height: 50, width: 50}}></Image>
    </Container>
  );
};

export default LogoContainer;
