import { Story } from "@storybook/react";
import { EntrepreneurshipTabs } from "./EntrepreneurshipTabs";
import {BrowserRouter as Router} from 'react-router-dom';


export default {
	title: "organisms/EntrepreneurshipTab",
	component: EntrepreneurshipTabs,
} 

const Template : Story<typeof EntrepreneurshipTabs> = (args) =><Router><EntrepreneurshipTabs {...args}/></Router>

export const EntrepreneurshipPageBody = Template.bind({});
