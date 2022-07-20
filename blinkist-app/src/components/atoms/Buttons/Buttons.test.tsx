import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Buttons } from "./Buttons";
import { BookType } from "../../organisms/bookGrid/BookGrid";
import userEvent from "@testing-library/user-event";

it("checks rendering of text prop", async() => {
	render(<Buttons variant={undefined} children="click"  onClick={function (book: BookType): void {
        
    } } book={{
        id: undefined,
        title: undefined,
        author: undefined,
        time: undefined,
        reads: undefined,
        image: undefined,
        status: undefined,
        progress: undefined,
        category: undefined,
        Type: undefined
    }} />);

	const textElement = screen.getByText('click');
	expect(textElement).toBeInTheDocument();

    userEvent.click(textElement);
    expect(textElement).toBeInTheDocument();
    
});

