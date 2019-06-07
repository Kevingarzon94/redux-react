import * as React from 'react';

interface IIntroProps{
    text?: string
}
interface IIntroState{
    text: string
    dato: number
}
export default class Intro extends React.Component<IIntroProps, IIntroState>{
    public state = {
        dato: 1,
        text: "prueba estado"
    }
    public render() {
        const { text } = this.props
        const t = text ? text : this.state.text
        return(
        <p onClick={this.handleClick} className="App-intro">
         <span>{t}</span>
        </p>
        )
    }
    private handleClick = () => {
        this.setState({ text: 'Actualizado'})
    }
}