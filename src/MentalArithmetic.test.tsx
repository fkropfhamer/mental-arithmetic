import { shallow } from "enzyme"
import MentalArithmetic from "./MentalArithmetic"
import React from "react";

it("renders correct", () => {
    const wrapper = shallow(<MentalArithmetic />);
    expect(wrapper.contains(<h1>1 + 1 = 2</h1>)).toBe(true);
})
