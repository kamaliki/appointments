import React from "react";
import ReactDOM from "react-dom/client";

import { act } from "react-dom/test-utils";

import Appointment from "../src/Appointment";

describe ("Appointment", () => {
    let container;
    let customer;

    beforeEach(() => {
        container = document.createElement("div");
    });

    const render = (component) => act(() => ReactDOM.createRoot(container).render(component));
    
    it("renders the customer first name", () => {
        customer = { firstName: "Ash" };
        render(<Appointment customer={customer} />);
        expect(container.textContent).toMatch("Ash");
    });
    
});