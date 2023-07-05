import { ReactNode } from "react"
import styled from '@emotion/styled'
import { ColorPalette } from "../../../styles/ColorPalette"

type ThemeType = 'primary' | 'secondary' | 'danger' | 'outline'

interface Props {
  theme?: ThemeType
  size?: 's' | 'm'
  children?: ReactNode
}

type ThemeStyle = Record<ThemeType, {
  backgroundColor?: string
  color?: string
  textDecoration?: string
  border?: string
}>

const themeStyle: ThemeStyle = {
  primary: {
    backgroundColor: '#333333',
    color: ColorPalette.white
  },
  secondary: {
    backgroundColor: 'rgba(0, 0, 0, 5%)',
  },
  danger: {
    backgroundColor: ColorPalette.red[100],
    color: ColorPalette.red[800]
  },
  outline: {
    border: '1px solid #888888'
  }
}

function Button({ theme = 'primary', size = 'm', children }: Props) {
  const Button = styled.button`
    border: none;
    border-radius: 4px;
    padding: 10px 30.5px;
    cursor: pointer;
    background-color: transparent;
    font-size: 14px;
    font-weight: 400;
  `

  return (
    <Button style={{...themeStyle[theme]}}>
      {children}
    </Button>
  )
}

export default Button