import { Story } from "@storybook/react";
import { SearchBar } from "./SearchBar";

export default {
	title: "molecules/SearchBars",
	component: SearchBar,
} 

const Template : Story<typeof SearchBar> = (args) => <SearchBar {...args}/>

export const searchBar = Template.bind({});



