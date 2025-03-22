"use client"
import Blog1 from "@/components/Blog single page/Blog1";
import Blog2 from "@/components/Blog single page/Blog2";
import Blog3 from "@/components/Blog single page/Blog3";
import Blog4 from "@/components/Blog single page/Blog4";
import Blog5 from "@/components/Blog single page/Blog5";
import Blog6 from "@/components/Blog single page/Blog6";
import SingleBlogComponent from "@/components/SingleBlog";
import { useParams } from "next/navigation";
import React from "react";

const SingleBlog = () => {
  const params=useParams();
  const blogName=params.id;
  return (
    <div className="pt-24">
      {
        blogName === "1" ? (
          <Blog1 />
        ) : blogName === "2" ? (
          <Blog2 />
        ) : blogName === "3" ? (
          <Blog3 />
        ) : blogName === "4" ? (
          <Blog4 />
        ) : blogName === "5" ? (
          <Blog5 />
        ) : blogName === "6" ? (
          <Blog6 />
        ) : (
          <h1>Service not found</h1>
        )
      }
    </div>
  );
};    

export default SingleBlog;
