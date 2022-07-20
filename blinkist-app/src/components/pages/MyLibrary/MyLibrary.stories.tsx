import { Story } from "@storybook/react";
import {BrowserRouter as Router} from 'react-router-dom';
import { MyLibrary } from "./MyLibrary";



export default {
	title: "pages/MyLibrary",
	component: MyLibrary,
} 

const Template : Story<typeof MyLibrary> = (args) =><Router><MyLibrary {...args}/></Router>

export const MyLibraryViewPage = Template.bind({});