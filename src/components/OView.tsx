import React from 'react'
import { FlexAlignType, View, ViewStyle } from 'react-native'

type OViewProps = ComponentMetrics & {
  children: React.ReactNode
  /**
   * Align items
   */
  align?: FlexAlignType
  /**
   * Height
   */
  height?: number | string
  /**
   * Justify content
   */
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * Width
   */
  width?: number | string
  /**
   * Padding
   */
  padding?: number | string
  /**
   * Style
   */
  style?: ViewStyle
}

/**
 * Orbit view component.
 * @example
 * <OView>
 *   <OText>Hello</OText>
 *   <OText>wWrld</OText>
 * </OView>
 */
const OView = ({
  children,
  top,
  right,
  bottom,
  left,
  align,
  height,
  justify,
  padding,
  paddingHorizontal,
  paddingVertical,
  style,
  width,
  ...props
}: OViewProps): JSX.Element => {

  const viewStyle: ViewStyle = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    alignItems: align,
    height,
    justifyContent: justify,
    padding,
    paddingHorizontal,
    paddingVertical,
    width,
    ...style
  }

  return <View style={viewStyle} {...props}>{children}</View>
}

export default OView
