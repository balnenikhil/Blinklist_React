import { Story } from "@storybook/react";
import { Images } from "./Images";

export default{
    title:'Atoms/Images',
    component: Images,
}

const Template : Story<typeof Images> = (args) => <Images {...args}/>

export const BookImage = Template.bind({})
BookImage.args={
    src:"/assets/3.png",
    alt:"Book Image",
}