import styled from 'styled-components';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: '#fff',
    height: 32,
  },
  text: {
    color: '#88898c',
    fontWeight: 'bold',
  },
});

export const Button = styled.TouchableOpacity`
    justify-content:center
    align-items:center
    border-radius:25
    background-color:#dbd5d5
    padding-vertical:12px
    padding-horizontal:16px
    margin-horizontal:4px
    margin-vertical:8px
    `;

export const Text = styled.Text``;

export default styles;
