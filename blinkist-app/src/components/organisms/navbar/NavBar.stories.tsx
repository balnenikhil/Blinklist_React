import { Story } from "@storybook/react";
import {BrowserRouter as Router} from 'react-router-dom';
import { NavBar } from "./NavBar";


export default {
	title: "organisms/NavBar",
	component: NavBar,
} 

const Template : Story<typeof NavBar> = (args) =><Router><NavBar {...args}/></Router> 

export const ExtendedNavBar = Template.bind({});