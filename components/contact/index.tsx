"use client";

import { TextField, Label, Input, TextArea } from "react-aria-components";

export function Contact() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20">
      <h2 className="about-title text-6xl font-dm-serif">Contact</h2>
      <h3 className="text-xl font-relation mb-8">Get in Touch with Me</h3>
      <TextField className="flex flex-col mb-4 w-full m-auto">
        <Label>Name</Label>
        <Input
          className="p-1 m-0 border border-solid border-gray-400 bg-[var(--background)] rounded-md text-xl
              [&[data-focused]]:outline [&[data-focused]]:outline-2
              [&[data-focused]]:outline-offset-[-1px] [&[data-focused]]:outline-[var(--focus-ring-color)]"
        />
      </TextField>
      <TextField className="flex flex-col mb-4 w-full m-auto">
        <Label>E-mail</Label>
        <Input
          className="p-1 m-0 border border-solid border-gray-400 bg-[var(--background)] rounded-md text-xl
              [&[data-focused]]:outline [&[data-focused]]:outline-2
              [&[data-focused]]:outline-offset-[-1px] [&[data-focused]]:outline-[var(--focus-ring-color)]"
        />
      </TextField>
      <TextField className="flex flex-col mb-4 w-full m-auto">
        <Label className="mb-1 text-lg">Message</Label>
        <TextArea
          className="p-2 border border-solid border-gray-400 bg-[var(--background)] rounded-md text-xl
                  [&[data-focused]]:outline [&[data-focused]]:outline-2
                  [&[data-focused]]:outline-offset-[-1px] [&[data-focused]]:outline-[var(--focus-ring-color)]"
        />
      </TextField>
      <div className="flex justify-end mt-8">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded shadow-md
                   hover:bg-blue-600 hover:scale-105 hover:shadow-lg
                   transition-transform duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
