import React from "react"
import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
Enzyme.configure({adapter: new EnzymeAdapter()})

import Home from './index'


test("renders withou error", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper).toBeTruthy()
})
