import { shallow } from "enzyme"
import MentalArithmetic from "./MentalArithmetic"
import React from "react";

it("renders correct", () => {
    const wrapper = shallow(<MentalArithmetic />);
    expect(wrapper.contains(<h1>score: 0</h1>)).toBe(true);
    expect(wrapper.contains(<label>solution:</label>));
})

it("sets correct initial state", () => {
    const wrapper = shallow(<MentalArithmetic />);
    expect(wrapper.state("score")).toBe(0);
    expect(wrapper.state("input")).toBe('');
    expect(wrapper.state("task")).not.toBe('');
});

it("calculates right solution", () => {
    const wrapper = shallow(<MentalArithmetic />);
    const taskText: string = wrapper.state("task");
    const task = taskText.replace(/\?|=|\s/g, "");

    // eslint-disable-next-line no-eval
    const solution = eval(task);
    expect(wrapper.state("solution")).toBe(solution);
})

it("resets on right answer", () => {
    const wrapper = shallow(<MentalArithmetic />);
    const taskText: string = wrapper.state("task");
    const solution: number = wrapper.state("solution");
    wrapper.setState({input: solution});

    expect(wrapper.state("input")).toBe(solution);

    wrapper.find("form").simulate("submit", {preventDefault: jest.fn()});

    expect(wrapper.state("input")).toBe("");
    expect(wrapper.state("task")).not.toBe(taskText);
    expect(wrapper.state("score")).toBe(1);
})


