import { Story } from "@storybook/react";
import { ExtendedNav } from "./ExtendedNav";
import {BrowserRouter as Router} from 'react-router-dom';


export default {
	title: "molecules/ExtendedNav",
	component: ExtendedNav,
} 

const Template : Story<typeof ExtendedNav> = (args) =><Router><ExtendedNav {...args}/></Router> 

export const ExtendedNavBar = Template.bind({});