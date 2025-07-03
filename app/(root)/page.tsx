import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn react can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "1", name: "Aman Mishra" },
    upvotes: 10,
    answers: 5,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "Best way to manage state in React?",
    description: "Should I use Redux, Context API or something else?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "3", name: "State Management" },
    ],
    author: { _id: "2", name: "Priya Sharma" },
    upvotes: 18,
    answers: 3,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "How does useEffect work?",
    description:
      "I get confused with dependencies in useEffect. Can someone explain?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "4", name: "Hooks" },
    ],
    author: { _id: "3", name: "Rahul Verma" },
    upvotes: 24,
    answers: 6,
    createdAt: new Date(),
  },
  {
    _id: "4",
    title: "What is the virtual DOM?",
    description: "I don't understand how the virtual DOM improves performance.",
    tags: [
      { _id: "1", name: "React" },
      { _id: "5", name: "DOM" },
    ],
    author: { _id: "4", name: "Sneha Kapoor" },
    upvotes: 14,
    answers: 4,
    createdAt: new Date(),
  },
  {
    _id: "5",
    title: "How to deploy a React app?",
    description:
      "What are the steps to deploy a React app to Netlify or Vercel?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "6", name: "Deployment" },
    ],
    author: { _id: "5", name: "Dev Joshi" },
    upvotes: 30,
    answers: 7,
    createdAt: new Date(),
  },
  {
    _id: "6",
    title: "Difference between Props and State?",
    description: "I always get confused between props and state in React.",
    tags: [
      { _id: "1", name: "React" },
      { _id: "7", name: "Basics" },
    ],
    author: { _id: "6", name: "Anjali Mehta" },
    upvotes: 21,
    answers: 5,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc={"/icons/search.svg"}
          placeholder="Search questions.."
          otherClasses="flex-1"
        />
      </section>
      {/* HomeFilter */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {query
          ? filteredQuestions.map((question) => (
              <h1 key={question._id}>{question.title}</h1>
            ))
          : questions.map((question) => (
              <h1 key={question._id}>{question.title}</h1>
            ))}
      </div>
    </>
  );
};

export default Home;
