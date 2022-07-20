import { Story } from "@storybook/react";
import LibraryTabs from "./LibraryTabs";


export default {
	title: "organisms/LibraryTab",
	component: LibraryTabs,
} 

const Template : Story<typeof LibraryTabs> = (args) =><LibraryTabs {...args}/>

export const BookLibraryTab = Template.bind({});