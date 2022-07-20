import { Story } from "@storybook/react";
import { BookView } from "./BookView";
import {BrowserRouter as Router} from 'react-router-dom';



export default {
	title: "pages/BookView",
	component: BookView,
} 

const Template : Story<typeof BookView> = (args) =><Router><BookView {...args}/></Router>

export const BookViewPage = Template.bind({});