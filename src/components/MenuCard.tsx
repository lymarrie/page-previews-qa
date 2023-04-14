import * as React from "react";
import MarkdownToJsx from 'markdown-to-jsx';
import { Image } from "@yext/pages/components";


type Props = {
    item: any;
    children?: React.ReactNode;
};
  
  const MenuCard = ({
    item,
    children,
  }: Props) => {
    return (
        <div key={item.key} className="card p-5 border-2 rounded-xl space-y-3 bg-gray-100 drop-shadow-md hover:scale-[1.02] duration-250">
        <a href={item.slug} className="space-y-3">
            <Image
                className="rounded-xl w-100 h-auto"
                image={item.photoGallery[0].image}
                layout="fill"
            />
            <div className="name text-2xl text-center font-bold">  {item.name}
                <span className="italic text-xl font-normal"> - ${item.price.value}</span>
            </div>
            {item.richTextDescription &&
              <div>
                <MarkdownToJsx>{item.richTextDescription}</MarkdownToJsx>
              </div>
            }
        </a>
      </div>
    );
  };

export default MenuCard;
  