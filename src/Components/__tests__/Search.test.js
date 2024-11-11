import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../Mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should Search res List Cake text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchButton = screen.getByRole("button", { name: "search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "cake" } });
  fireEvent.click(searchButton);
  //screen load 4 cards
  const cardsAfterSearch = screen.getAllByTestId("cards");
  expect(cardsAfterSearch.length).toBe(4);
});

it("Should Filter TopRated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFileter = screen.getAllByTestId("cards");
  expect(cardsBeforeFileter.length).toBe(20);

  const topRatedButton = screen.getByRole("button", {
    name: "Top RatedRestaurants",
  });
  //console.log(topRatedButton);
});
