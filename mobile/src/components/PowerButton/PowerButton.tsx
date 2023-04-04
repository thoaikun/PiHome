import * as React from 'react'
import Fan, { FanProps } from './Fan'
import Light, { LightProps } from './Light'

type PowerButtonCmp = React.FunctionComponent & {
    Light: React.FunctionComponent<LightProps>
    Fan: React.FunctionComponent<FanProps>
}

const PowerButton: PowerButtonCmp = ({ children }: any): JSX.Element => (
    <>{children}</>
)
PowerButton.Light = Light
PowerButton.Fan = Fan

export default PowerButton
