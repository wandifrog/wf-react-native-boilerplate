import React from 'react'
import { Image, ImageProps, ImageStyle } from 'react-native'
import images from '../constants/Images.constant'

type OImageProps = ComponentMetrics & ImageProps

/**
 * Orbit image component.
 * @example
 * <OImage />
 * <OImage source={images.orbit} />
 * <OImage source={{uri: 'LINK_IMAGEE'}} />
 */
const OImage = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  height = 300,
  width = 300,
  source = images.orbitLogo,
  ...props
}: OImageProps): JSX.Element => {

  const imageStyle: ImageStyle = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    width,
    height
  }

  return <Image width={width} height={height} fadeDuration={250}
    source={source} style={imageStyle} {...props} />
}

export default OImage
