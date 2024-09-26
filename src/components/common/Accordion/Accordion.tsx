import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type AccordionContentType =
  | ["content", string]
  | ["list", AccordionContentType[]];
export interface AccordionItemType {
  value: string;
  trigger: ReactNode;
  content: AccordionContentType[];
}

interface Props {
  items: AccordionItemType[];
  className?: string;
  type?: "single" | "multiple";
  itemsClassName?: string;
}

export function CustomAccordion({
  items,
  className,
  type = "single",
  itemsClassName,
}: Props) {
  const accordionItems = items.map((accordion, idx) => {
    const { value, trigger, content } = accordion;
    return (
      <AccordionItem
        className={cn("bg-white rounded-[20px] w-full", itemsClassName)}
        key={value}
        value={value}
      >
        <AccordionTrigger className="w-full py-[30px] px-[30px] ">
          {trigger}
        </AccordionTrigger>
        <AccordionContent className="w-full pb-[30px] px-[30px]">
          {content.map((item, index) => {
            return <AccordionContentMapper key={index} content={item} />;
          })}
        </AccordionContent>
      </AccordionItem>
    );
  });
  return (
    <>
      {type === "single" && (
        <Accordion
          type="single"
          defaultValue="01"
          className={cn("w-full flex flex-col gap-6", className)}
        >
          {accordionItems}
        </Accordion>
      )}
      {type === "multiple" && (
        <Accordion
          type="multiple"
          defaultValue={["01"]}
          className={cn("w-full flex flex-col gap-6", className)}
        >
          {accordionItems}
        </Accordion>
      )}
    </>
  );
}

const AccordionContentMapper = ({
  content,
}: {
  content: AccordionContentType;
}) => {
  if (content[0] === "list") {
    return (
      <ul className="list-disc ml-5 mt-4">
        {content[1].map((item, idx) => {
          return (
            <li key={idx} className={cn("")}>
              <AccordionContentMapper content={item} />
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p className="mb-4">{content[1]}</p>;
  }
};
