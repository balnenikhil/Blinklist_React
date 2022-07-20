import React from "react";
import { Banner } from "../../molecules/banner/Banner";
import { EntrepreneurshipTabs } from "../../organisms/entrepreneurshipTabs/EntrepreneurshipTabs";
import { Template } from "../../template/Template";

export const Entrepreneurship = () => (
    <div>
      <Template
        bodyContent={
          <>
            <Banner
              heading={"Explore Books on entrepreneurship"}
              subtitle={
                "Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start."
              }
              imageSrc={"Reading.png"}
              alternative={"Girl Reading Image"}
            />
            <EntrepreneurshipTabs/>
          </>
        }
      ></Template>
    </div>
);
