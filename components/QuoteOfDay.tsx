"use client";
import { MDXProvider } from "@mdx-js/react";
export default function QuoteOfDay() {
  return (
    <div className="quote">
      <h1>Quote of the Day</h1>
      <MDXProvider>
        <blockquote>
          <p>
            “The most important property of a program is whether it accomplishes
            the intention of its user.”
          </p>
          <p>- C.A.R. Hoare</p>
        </blockquote>
      </MDXProvider>
    </div>
  );
}
