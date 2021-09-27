import React from 'react'
import { ActivityIndicator, TouchableOpacity, ViewStyle } from 'react-native'
import { color } from 'react-native-reanimated'
import useTheme from '../hooks/Theme.hook'
import WFText from './WFText'

type WFButtonProps = ComponentMetrics & {
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
 * <WFButton label="Hello" />
 * <WFButton label="Mengerti" onPress={() => alert('hello world')} />
 * <WFButton label="Aktivasi" loading />
 * <WFButton label="Aktivasi" disabled />
 */
const WFButton = ({
  top,
  right,
  bottom,
  left,
  label = 'Button',
  onPress = () => {},
  loading = false,
  disabled = false,
}: WFButtonProps): JSX.Element => {
  if (loading) disabled = true

  const colors = useTheme()
  const textColor = disabled ? colors.textDisabled : colors.text

  const buttonStyle: ViewStyle = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    backgroundColor: disabled ? colors.buttonDisabled : colors.button,
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
          ? <ActivityIndicator color={textColor} />
          : <WFText size={17} color={textColor} center bold>{label}</WFText>
      }
    </TouchableOpacity>
  )
}

export default WFButton
