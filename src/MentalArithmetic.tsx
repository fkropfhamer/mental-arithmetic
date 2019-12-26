import React from "react";

interface IState {
    input: string,
    task: string,
    solution: number,
    score: number,
}

enum TaskType {
    Addition = 0,
    Subtraction = 1,
    Multiplication = 2,
    Division = 3,
}

export default class MentalArithmetic extends React.Component<{}, IState> {
    public state: IState;

    constructor(props: {}) {
        super(props);
        this.state = {
            input: '',
            task: '',
            solution: 0,
            score: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * componentDidMount
     */
    public componentDidMount() {
        this.setTask();
    }

    public render() {
        return( 
        <div>
            <h1>{this.state.task}</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    solution:
                    <input type="number" value={this.state.input} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h1>score: {this.state.score}</h1>
        </div>
        )
    }

    private setTask() {
        const taskType: number = Math.floor(Math.random() * 4);
        let x: number = Math.round(Math.random() * 100);
        let y: number = Math.round(Math.random() * 100);

        let solution: number;
        let task: string;

        switch(taskType) {
            case TaskType.Addition:
                solution = x + y;
                task = `${x} + ${y} = ?`;
                break;
            case TaskType.Subtraction:
                solution = x - y;
                task = `${x} - ${y} = ?`;
                break;
            case TaskType.Multiplication:
                x = Math.round(Math.random() * 10);
                y = Math.round(Math.random() * 10);
                solution = x * y;
                task = `${x} * ${y} = ?`
                break;
            case TaskType.Division:
                x = Math.round(Math.random() * 10);
                y = Math.ceil(Math.random() * 10);
                const z = x * y;
                solution = x;
                task = `${z} / ${y} = ?`
                break;
            default:
                throw new Error('unknown task type');
        }

        

        this.setState({task, solution})
    }

    private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        if (parseInt(this.state.input) === this.state.solution) {
            this.setState({input: ''});
            const newScore: number = this.state.score + 1;
            this.setState({score: newScore});
            this.setTask();
        }
        event.preventDefault();
    }

    private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({input: event.target.value});
    }
} 
