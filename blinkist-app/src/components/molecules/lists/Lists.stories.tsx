import { Story } from "@storybook/react";
import Lists from "./Lists";



export default {
	title: "molecules/Lists",
	component: Lists,
} 

const Template : Story<typeof Lists> = (args) => <Lists {...args}/>

export const FooterList = Template.bind({});