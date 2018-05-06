import React from "react";
import { render } from "enzyme";
import SpinningLogo from "../SpinningLogo/index";

describe("Components", () => {
  describe("SpinningLogo", () => {
    test("should render", () => {
      const wrapper = render(<SpinningLogo />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
