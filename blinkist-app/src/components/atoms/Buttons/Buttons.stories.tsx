import { Story } from "@storybook/react"
import {Buttons} from "./Buttons"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { BookType } from "../../organisms/bookGrid/BookGrid";



export default {
	title: "atoms/Buttons",
	component: Buttons,
}

// const Template : Story<typeof Buttons> = (args) => (
// <ThemeProvider theme={Themes}><Buttons variant={undefined} children={undefined} {...args}/></ThemeProvider>);

const Template : Story<typeof Buttons> = (args) => <Buttons book={{
	id: undefined,
	title: undefined,
	author: undefined,
	time: undefined,
	reads: undefined,
	image: undefined,
	status: undefined,
	progress: undefined,
	category: undefined,
	Type: undefined
}} onClick={function (book: BookType): void {
	throw new Error("Function not implemented.");
} } variant={undefined} children={undefined} {...args}/>

export const readNowButton = Template.bind({})
readNowButton.args={
    children:"Read Now",
	variant: "outlined",
	color: "primary",
}

export const finishedReadingButton = Template.bind({})
finishedReadingButton.args={
    children:"Finished Reading",
	variant: "contained",
	color: "primary",
}

export const sendToKindleButton = Template.bind({})
sendToKindleButton.args={
    children:"Send To Kindle",
	variant: "text",
	color: "primary",
	endIcon:(<ArrowForwardOutlinedIcon/>),
}