import { Story } from "@storybook/react";
import Footer from "./Footer";



export default {
	title: "organisms/Footer",
	component: Footer,
} 

const Template : Story<typeof Footer> = (args) =><Footer {...args}/>

export const FooterBar = Template.bind({});