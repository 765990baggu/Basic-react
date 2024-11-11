import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import Header from "../Header";
import { act } from "react";
import MOCK_DATA from "../Mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import AppStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("NEW CHICKEN ROLLS(15)");
  fireEvent.click(accordionHeader);
  const foodItmes = screen.getAllByTestId("foodItems");
  expect(foodItmes.length).toBe(15);

  expect(screen.getByText("Cart(0,items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart(1,items)")).toBeInTheDocument;
  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart(2,items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(17);

  fireEvent.click(screen.getByRole("button", { name: "ClearCart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  expect(
    screen.getByText("Cart is Empty.Add Items to Cart!")
  ).toBeInTheDocument();
});
