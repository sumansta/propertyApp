import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles, {
  Container,
  PriceInfo,
  PriceHeading,
  AddressHeading,
  PriceIcons,
  SingleIcon,
  IconText,
} from './style';

const PriceDetail = props => (
  <Container>
    <PriceInfo>
      <PriceHeading>${props.detail.price}</PriceHeading>
      <AddressHeading>{props.detail.address}</AddressHeading>
    </PriceInfo>
    <PriceIcons>
      <IconContainer
        name="directions-bus"
        color={styles.busColor}
        title={props.detail.distanceTo.security}
      />
      <IconContainer
        name="security"
        color={styles.securityColor}
        title={props.detail.distanceTo.security}
      />
      <IconContainer
        name="home"
        color={styles.parkColor}
        title={props.detail.distanceTo.park}
      />
    </PriceIcons>
  </Container>
);

const IconContainer = props => (
  <SingleIcon>
    <Icon
      name={props.name}
      style={{...styles.singleIcon, color: props.color}}></Icon>
    <IconText>{props.title}</IconText>
  </SingleIcon>
);
export default PriceDetail;
