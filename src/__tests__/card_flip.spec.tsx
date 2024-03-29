import { render, screen } from "@testing-library/react";
import Card from "../Card"; // Import your Card component
import React from "react";
import CustomErrorBoundaryWrapper from "../CustomErrorBoundaryWrapper";

it("renders a card with data-face-up true", () => {
  render(
    <CustomErrorBoundaryWrapper>
      <Card
        value="A"
        faceUp={true}
        onClick={() => {}}
        cards={[]} // Provide a dummy cards prop
      />
    </CustomErrorBoundaryWrapper>
  );
  const card = screen.getByTestId("card") as HTMLElement;

  // Expect that the data-face-up attribute is always "true"
  expect(card.getAttribute("data-face-up")).toBe("true");
});
