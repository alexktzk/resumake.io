/**
 * @flow
 */

import styled from 'styled-components'
import { darken } from 'polished'
import { colors } from '../theme'

const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid;
  border-color: ${props => (props.inverted ? colors.borders : 'white')};
  border-radius: 2px;
  background: ${props => (props.inverted ? 'white' : colors.accent)};
  color: ${props => (props.inverted ? colors.borders : 'white')};
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;

  &:hover {
    background: ${darken(0.1, colors.accent)};
    cursor: pointer;
  }

  &:active {
    position: relative;
    top: 1px;
  }

  &:focus {
    border-color: ${colors.borders};
    outline-color: ${colors.borders};
  }
`

export default Button
