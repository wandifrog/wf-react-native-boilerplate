import React from 'react'
import { Image, ImageProps, ImageStyle } from 'react-native'
import images from '../constants/Images.constant'

type WFImageProps = ComponentMetrics & ImageProps

/**
 * Orbit image component.
 * @example
 * <WFImage />
 * <WFImage source={images.orbit} />
 * <WFImage source={{uri: 'LINK_IMAGEE'}} />
 */
const WFImage = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  height = 300,
  width = 300,
  source = images.logoRaise,
  ...props
}: WFImageProps): JSX.Element => {

  const imageStyle: ImageStyle = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    width,
    height,
  }

  return <Image width={width} height={height} fadeDuration={250}
    source={source} style={imageStyle} {...props} />
}

export default WFImage
