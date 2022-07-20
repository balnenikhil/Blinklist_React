import { Story } from "@storybook/react";
import { Avatars } from "./Avatars";

export default{
    title:'Atoms/Avatars',
    component: Avatars,
}

const Template : Story<typeof Avatars> = (args) => <Avatars {...args}/>

export const Avatar = Template.bind({})
Avatar.args={
    children:"A",
}