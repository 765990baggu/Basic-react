import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../Mocks/ResCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with a Props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  //Querying
  const name = screen.getByText("Pizza Hut");
  //console.log(name);
  //Assertion
  expect(name).toBeInTheDocument();
});
