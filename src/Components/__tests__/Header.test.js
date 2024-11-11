import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const button = screen.getByRole("button", { name: "login" });
  //Assertion
  expect(button).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartitems = screen.getByText("Cart(0,items)");
  expect(cartitems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartitems = screen.getByText(/Cart/);
  expect(cartitems).toBeInTheDocument();
});

it("Should Change login button to logout on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "logout" });

  expect(logoutButton).toBeInTheDocument();
});
