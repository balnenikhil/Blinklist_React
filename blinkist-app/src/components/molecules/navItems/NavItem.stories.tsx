import { Story } from "@storybook/react";
import { NavItem } from "./NavItem";

export default{
    title:'Molecules/NavItems',
    component: NavItem
}

const Template : Story<typeof NavItem> = (args) => <NavItem imageSrc={""} alternative={""} navName={""} {...args}/>

export const NavigationItem = Template.bind({})

NavigationItem.args={

    navName: "Entrepreneurship",
    imageSrc: "entrepeneurship.svg",
    alt: "icon",
    
}