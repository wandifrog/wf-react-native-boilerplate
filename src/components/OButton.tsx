import React from 'react'
import { ActivityIndicator, TouchableOpacity, ViewStyle } from 'react-native'
import { dpi } from '../functions/Common.function'
import useTheme from '../hooks/Theme.hook'
import OText from './OText'

type OButtonProps = ComponentMetrics & {
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
 * Orbit default button component.
 * @example
 * <OButton />
 * <OButton backgroundWhite />
 * <OButton label="Lanjutkan" />
 * <OButton label="Mengerti" onPress={() => alert('hello world')} />
 * <OButton label="Aktivasi" loading />
 * <OButton label="Aktivasi" disabled />
 */
const OButton = ({
  top,
  bottom,
  backgroundWhite,
  label = 'Button',
  onPress = () => {},
  loading = false,
  disabled = false
}: OButtonProps): JSX.Element => {
  const colors = useTheme()

  if (loading) disabled = true

  const buttonShadow: ViewStyle = backgroundWhite ? {
    shadowColor: '#19202023',
    shadowOffset: {
      width: dpi(20),
      height: dpi(3)
    },
    shadowOpacity: 0,
    shadowRadius: dpi(12),
    elevation: 2
  } : {}

  const buttonStyle: ViewStyle = {
    marginTop: top,
    marginBottom: bottom,
    alignItems: 'center',
    backgroundColor: disabled ? 'gray' : backgroundWhite ? colors.white_100 : colors.buttonRed,
    borderColor: disabled ? 'gray' : backgroundWhite ? colors.white_100 : colors.buttonRed,
    borderRadius: dpi(10),
    borderWidth: dpi(0.5),
    justifyContent: 'center',
    paddingVertical: dpi(4),
    width: '100%',
    ...buttonShadow
  }

  const buttonLabelColor = backgroundWhite ? colors.black : colors.white_100

  return (
    <TouchableOpacity style={buttonStyle} onPress={() => onPress()} disabled={disabled}>
      {
        loading
          ? <ActivityIndicator color={colors.white_100} />
          : <OText size={dpi(8)} color={buttonLabelColor} center bold>{label}</OText>
      }
    </TouchableOpacity>
  )
}

export default OButton
