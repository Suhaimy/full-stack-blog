import { useUser } from "@clerk/clerk-react";
import React from "react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login...</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6">
        <button className="p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My awesome story"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="text-sm">Choose a category:</label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Databases</option>
            <option value="seo">Search Engine</option>
            <option value="marketing">Marketing</option>
            <option value="general">General</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="a short description"
          className="p-4 rounded-xl bg-white shadow-md"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
        />
        <button className="text-white bg-blue-800 rounded-xl p-2 m-t font-medium w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
