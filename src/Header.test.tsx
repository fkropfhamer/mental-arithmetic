import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

it("renders the header", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<h1>Mental Arithmetic!</h1>)).toBe(true);
});
