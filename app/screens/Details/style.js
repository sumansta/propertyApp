import styled from 'styled-components';

import AppStyles from '../../config/styles';

const styles = {
  image: {
    height: 240,
    width: '100%',
  },
  circleButton: {
    backgroundColor: AppStyles.color.DEFAULT_BLUE,
    height: 48,
    width: 48,
    marginHorizontal: 12,
  },
};

export const Container = styled.View`
  width: 100%;
`;
export const TopContainer = styled.View`
  width: 100%;
  height: 335px;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 420px;
  padding-horizontal: 24px;
`;

export const ImageContainer = styled.TouchableOpacity`
    position:absolute
    width:100%
    height:240
    margin-bottom:24px
    background-color:green
`;

export const MapContainer = styled.View`
    position:absolute
    width:90%
    height:160
    background-color:${AppStyles.color.DEFAULT_WHITE}
    align-self:center
    margin-top:160px
    elevation:10
    border-radius:6
`;

export const MapView = styled.View`
  height: 50%;
`;

export const MapDetails = styled.View`
  height: 50%;
`;

export const FeatureContainer = styled.View`  
    align-items:center
    justify-content:center
    flex-wrap:wrap
    height:110px
`;

export const InfoContainer = styled.View`
    flex-wrap:wrap
    flex-direction:row
    justify-content:center
    height:32px
    margin-top:24px
`;

export const ButtonsContainer = styled.View`
    justify-content:space-around  
    width: 100%
    flex-direction:row
    position:absolute
    margin-top:695
    opacity:0.8
    background-color:${AppStyles.color.DEFAULT_WHITE}
`;

export const Text = styled.Text`
  font-size: 16px;
  text-align: justify;
  color: ${AppStyles.color.NORMAL_TEXT_COLOR};
`;

export const View = styled.View``;

export default styles;
