import { Story } from "@storybook/react";
import {BrowserRouter as Router} from 'react-router-dom';
import { LoginPage } from "./LoginPage";



export default {
	title: "pages/LoginPage",
	component: LoginPage,
} 

const Template : Story<typeof LoginPage> = (args) =><Router><LoginPage {...args}/></Router>

export const LoginViewPage = Template.bind({});