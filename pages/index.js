import React, { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

export default function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-nextjs",
      title: "Getting Started With NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJs is a the react Framework for production - it makes building fullstack React apps ans sites a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
    {
      slug: "nextjs-file-based-routing",
      title: "Getting Started With NextJS",
      image: "nextjs-file-based-routing.png",
      excerpt:
        "NextJs is a the react Framework for production - it makes building fullstack React apps ans sites a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-nextjs",
      title: "Getting Started With NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJs is a the react Framework for production - it makes building fullstack React apps ans sites a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
    {
      slug: "nextjs-file-based-routing",
      title: "Getting Started With NextJS",
      image: "nextjs-file-based-routing.png",
      excerpt:
        "NextJs is a the react Framework for production - it makes building fullstack React apps ans sites a breeze and ships with built-in SSR.",
      date: "2022-02-10",
    },
  ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
