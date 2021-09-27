import React from 'react'
import { FlexAlignType, View, ViewStyle } from 'react-native'

type HStackProps = ComponentMetrics & {
  children: React.ReactNodeArray
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
 * Horizontal Stack component.
 * @example
 * <HStack>
 *   <WFText>Hello</WFText>
 *   <WFText>wWrld</WFText>
 * </HStack>
 */
const HStack = ({
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
}: HStackProps): JSX.Element => {

  // @ts-expect-error: Let's ignore a compile error like this unreachable code
  const flex = children.some((reactNode) => reactNode?.type.name === 'Spacer' ?? false) ? 1 : undefined

  const flexRowStyle: ViewStyle = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    alignItems: align,
    flex,
    flexDirection: 'row',
    height,
    justifyContent: justify,
    padding,
    paddingHorizontal,
    paddingVertical,
    width,
    ...style,
  }

  return <View style={flexRowStyle} {...props}>{children}</View>
}

export default HStack
