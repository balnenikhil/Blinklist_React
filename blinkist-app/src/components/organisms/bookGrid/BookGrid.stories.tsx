import { Story } from "@storybook/react";
import { BookGrid } from "./BookGrid";


export default {
	title: "organisms/BookGrid",
	component: BookGrid,
} 

const Template : Story<typeof BookGrid> = (args) =><BookGrid {...args}/>

export const GridOfBooks = Template.bind({});
GridOfBooks.args={
    tab:"currentlyReading"
}