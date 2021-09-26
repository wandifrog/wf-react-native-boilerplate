import React from 'react'
import { ActivityIndicator, TouchableOpacity, ViewStyle } from 'react-native'
import useTheme from '../hooks/Theme.hook'
import WFText from './WFText'

type WFButtonProps = ComponentMetrics & {
  /**
   * Button with white background
   */
  backgroundWhite?: boolean
  /**
   * Button label
   */
  label?: string
  /**
   * Button action when pressed
   */
  onPress?: () => void
  /**
   * Button loading state.
   */
  loading?: boolean
  /**
   * Button can't be pressed.
   */
  disabled?: boolean
}

/**
 * Button component.
 * @example
 * <WFButton />
 * <WFButton backgroundWhite />
 * <WFButton label="Lanjutkan" />
 * <WFButton label="Mengerti" onPress={() => alert('hello world')} />
 * <WFButton label="Aktivasi" loading />
 * <WFButton label="Aktivasi" disabled />
 */
const WFButton = ({
  top,
  bottom,
  label = 'Button',
  onPress = () => {},
  loading = false,
  disabled = false,
}: WFButtonProps): JSX.Element => {
  const colors = useTheme()

  if (loading) disabled = true

  const buttonStyle: ViewStyle = {
    marginTop: top,
    marginBottom: bottom,
    backgroundColor: disabled ? 'gray' : '#39CCDC',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    paddingHorizontal: 10,
    height: 40,
  }

  return (
    <TouchableOpacity style={buttonStyle} onPress={() => onPress()} disabled={disabled}>
      {
        loading
          ? <ActivityIndicator color={colors.white_100} />
          : <WFText size={17} color={'#30294C'} center bold>{label}</WFText>
      }
    </TouchableOpacity>
  )
}

export default WFButton
