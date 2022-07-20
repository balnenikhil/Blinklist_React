import { Story } from "@storybook/react";
import { Add } from "@mui/icons-material";
import BookCard from "./BookCard";
import { BookType } from "../../organisms/bookGrid/BookGrid";

export default{
    title:'Molecules/BookCard',
    component: BookCard
}

const Template : Story<typeof BookCard> = (args) => <BookCard book={{
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
} } imageSrc={""} alternative={""} buttonText={""} variant={undefined} {...args}/>

export const BasicBookCard = Template.bind({});
BasicBookCard.args={
  id: "1",
  title: "Beyond Entrepreneurship",
  subTitle: "Jim Collins & Bill Lazier",
  time: "13-minute read",
  readCount: "1.9k reads",
  cardButton: false,
  progress: 60,
  more: false,
  imageSrc: "/assets/3.png",
  alternative: "image",
  buttonText:"Add to library",
  variant:"contained",
  startIcon:(<Add/>),
  ProgressVariant:"determinate",
}

export const FinishedBookCard = Template.bind({});
FinishedBookCard.args={
  id: 1,
  title: "Beyond Entrepreneurship",
  subTitle: "Jim Collins & Bill Lazier",
  time: "13-minute read",
  readCount: "1.9k reads",
  cardButton: true,
  progress: 60,
  more: false,
  imageSrc: "/assets/3.png",
  alternative: "image",
  buttonText:"Finished",
  variant:"text",
  ProgressVariant:"determinate",
}

export const LibraryBookCard = Template.bind({});
LibraryBookCard.args={
  id: 2,
  title: "Beyond Entrepreneurship",
  subTitle: "Jim Collins & Bill Lazier",
  time: "13-minute read",
  readCount: "1.9k reads",
  cardButton: true,
  more: false,
  imageSrc: "/assets/3.png",
  alternative: "image",
  buttonText:"Add to library",
  startIcon:(<Add/>),
  variant:"contained",
}