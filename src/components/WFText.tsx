import React from 'react'
import { Text, TextProps, TextStyle } from 'react-native'
import { fontFamily, fontSize } from '../constants/Fonts.constant'
import useTheme from '../hooks/Theme.hook'

type FTextProps = ComponentMetrics & TextProps & {
  children: string
  /**
   * Font weight bold
   */
  bold?: boolean
  /**
   * Text color
   */
  color?: string
  /**
   * Text align center
   */
  center?: boolean
  /**
   * Font size
   */
  size?: number
  /**
   * Line height
   */
  lineHeight?: number
}

/**
 * Text component.
 * @example
 * <FText>Hello</FText>
 * <FText left={5} size={10}>World</FText>
 * <FText bold center color="red">!!</FText>
 */
const WFText = ({
  children,
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  bold = false,
  center = false,
  color,
  size = fontSize.normal,
  style,
  ...props
}: FTextProps): JSX.Element => {
  const colors = useTheme()

  const textStyle: TextStyle = {
    color: color || colors.text,
    fontFamily: bold ? fontFamily.poppinsSemiBold : fontFamily.poppinsSemiBold,
    fontSize: size,
    textAlign: center ? 'center' : undefined,
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
  }

  return <Text style={[textStyle, style]} {...props}>{children}</Text>
}

export default WFText
