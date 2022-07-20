import { Story } from "@storybook/react";
import {MemoryRouter as Router} from 'react-router-dom';
import { Entrepreneurship } from "./Entrepreneurship";



export default {
	title: "pages/Entrepreneurship",
	component: Entrepreneurship,
} 

const Template : Story<typeof Entrepreneurship> = (args) =><Router><Entrepreneurship {...args}/></Router>

export const BookViewPage = Template.bind({});

//memory router