import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm/BookingForm";
describe("BookingForm", () => {
  it("renders heading", () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: /reserve a table/i }),
    ).toBeInTheDocument();
  });
  it("shows validation on invalid submit", () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>,
    );
    fireEvent.click(
      screen.getByRole("button", { name: /confirm reservation/i }),
    );
    expect(
      screen.getByText(/please choose a reservation date/i),
    ).toBeInTheDocument();
  });
});
