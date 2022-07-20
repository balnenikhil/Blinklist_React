import { Story } from "@storybook/react";
import ProgressBars from "./ProgressBars";


export default{
    title:'Atoms/ProgressBars',
    component: ProgressBars,
}

const Template : Story<typeof ProgressBars> = (args) => <ProgressBars progressValue={undefined} {...args}/>

export const BookProgressBars = Template.bind({})
BookProgressBars.args={
    progressValue:80,
}