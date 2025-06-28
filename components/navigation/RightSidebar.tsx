import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  {
    _id: "1",
    title: "How to create a custom hook in React",
  },
  {
    _id: "2",
    title: "Understanding useEffect and its dependencies",
  },
  {
    _id: "3",
    title: "React useRef explained with real examples",
  },
  {
    _id: "4",
    title: "Controlled vs Uncontrolled components in React",
  },
  {
    _id: "5",
    title: "Optimizing React performance with memoization",
  },
];

const popularTags = [
  { _id: "1", name: "react", questions: 100 },
  { _id: "2", name: "javascript", questions: 250 },
  { _id: "3", name: "node.js", questions: 180 },
  { _id: "4", name: "mongodb", questions: 90 },
  { _id: "5", name: "typescript", questions: 150 },
  { _id: "6", name: "android", questions: 120 },
  { _id: "7", name: "reactquery", questions: 200 },
];

const RightSidebar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700 line-clamp-2">
                {title}
              </p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              name={name}
              questions={questions}
              _id={_id}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
