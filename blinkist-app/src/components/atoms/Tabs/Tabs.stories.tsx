import { Story } from "@storybook/react";
import BookTabs from "./Tabs";

export default {
	title: "atoms/Tabs",
	component: BookTabs,
} 

const Template : Story<typeof BookTabs> = (args) => <BookTabs {...args}/>

export const BookTab = Template.bind({});