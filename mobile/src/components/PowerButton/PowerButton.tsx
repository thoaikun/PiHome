import * as React from 'react'
import Fan from './Fan'
import Light from './Light'

type PowerButtonCmp = React.FunctionComponent & {
    Light: React.FunctionComponent
    Fan: React.FunctionComponent
}

const PowerButton: PowerButtonCmp = ({ children }: any): JSX.Element => (
    <>{children}</>
)
PowerButton.Light = Light
PowerButton.Fan = Fan

export default PowerButton
