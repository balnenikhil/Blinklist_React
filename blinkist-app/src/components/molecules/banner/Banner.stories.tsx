import { Story } from "@storybook/react";
import { Banner } from "./Banner";

export default{
    title:'Molecules/Banner',
    component: Banner
}

const Template : Story<typeof Banner> = (args) => <Banner heading={""} subtitle={""} imageSrc={""} alternative={""} {...args}/>

export const EntrepreneurshipBanner = Template.bind({})
EntrepreneurshipBanner.args={
    heading:"Explore Books on entrepreneurship",
    subtitle:"Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.",
    imageSrc:"Reading.png",
    alternative:"Girl Image"
}