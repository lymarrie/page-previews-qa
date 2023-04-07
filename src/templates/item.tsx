import * as React from "react";
import PageLayout from "../components/PageLayout";
import Banner from "../components/Banner";
import MenuSection from "../components/MenuSection";
import Favicon from "../assets/images/yext-favicon.ico";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import { Image } from "@yext/pages/components";


export const config: TemplateConfig = {
  stream: {
    $id: "menu-item-stream",
    filter: {
      entityTypes: ["ce_menuItem"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "photoGallery",
      "richTextDescription",
      "price",
      "c_itemCategory",
      "c_relatedMenu.name",
      "c_relatedMenu.slug",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Menu Page",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description:
            "This is a description for the Turtlehead Tacos menu page.",
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: Favicon,
        },
      },
    ],
  };
};

const Item: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
}) => {
  const { 
    _site,
    name,
    price,
    richTextDescription,
    photoGallery,
    slug,
    c_relatedMenu,
    c_itemCategory
   } = document;


  return (
    <>
      <PageLayout>
        <Banner name={"Turtlehead Tacos"} />
        <div className="centered-container">
          <div className="section space-y-14 px-10">
            <h2 className="section text-3xl text-center font-bold">{name} (${price.value})</h2>
            <div className="grid md:grid-cols-2 gap-x-5">
                <Image
                    className="rounded-xl w-100 h-auto"
                    image={photoGallery[0].image}
                    layout="fill"
                />
                <div>{richTextDescription}</div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Item;
