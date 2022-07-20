import { Story } from "@storybook/react";
import { BookDetailView } from "./BookDetailView";



export default {
	title: "organisms/BookDetailView",
	component: BookDetailView,
} 

const Template : Story<typeof BookDetailView> = (args) => <BookDetailView id={"2"} {...args}/>

export const BookDetail = Template.bind({});

