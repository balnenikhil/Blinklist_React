import React from "react";
import { render} from "@testing-library/react";


import "@testing-library/jest-dom";
import BookCard from "./BookCard";
import { BookType } from "../../organisms/bookDetailView/BookDetailView";


it("checks rendering of the component", () => {
	render(
		<BookCard onClick={function (book: BookType): void {
            throw new Error("Function not implemented.");
        } } imageSrc={''} alternative={"image"} buttonText={"click"} cardButton={true} variant={undefined} book={{
            id: undefined,
            title: undefined,
            author: undefined,
            time: undefined,
            reads: undefined,
            image: undefined,
            status: "currentlyReading",
            progress: undefined,
            category: undefined,
            Type: undefined
        }}/>
	);

});