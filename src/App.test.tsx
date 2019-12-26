import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Header from "./Header";
import MentalArithmetic from "./MentalArithmetic";

it("renders correct", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Header />)).toBe(true);
  expect(wrapper.contains(<MentalArithmetic />)).toBe(true);
});
