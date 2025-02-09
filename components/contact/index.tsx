"use client";

import { useState } from "react";
import { TextField, Label, Input, TextArea } from "react-aria-components";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 入力値を更新する関数
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // API Route (server side) へ送信
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      const data = await res.json();
      setSuccessMessage(data.message || "Success!");
      // フォームリセット
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20">
      <h2 className="about-title text-6xl font-dm-serif">Contact</h2>
      <h3 className="text-xl font-relation mb-8">Get in Touch with Me</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField className="flex flex-col mb-4 w-full m-auto">
          <Label>Name</Label>
          <Input
            className="p-1 m-0 border border-solid border-gray-400 bg-[var(--background)] rounded-md text-xl
              [&[data-focused]]:outline [&[data-focused]]:outline-2
              [&[data-focused]]:outline-offset-[-1px] [&[data-focused]]:outline-[var(--focus-ring-color)]"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
          />
        </TextField>
        <TextField className="flex flex-col mb-4 w-full m-auto">
          <Label>E-mail</Label>
          <Input
            className="p-1 m-0 border border-solid border-gray-400 bg-[var(--background)] rounded-md text-xl
              [&[data-focused]]:outline [&[data-focused]]:outline-2
              [&[data-focused]]:outline-offset-[-1px] [&[data-focused]]:outline-[var(--focus-ring-color)]"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />
        </TextField>
        <TextField className="flex flex-col mb-4 w-full m-auto">
          <Label className="mb-1 text-lg">Message</Label>
          <TextArea
            className="p-2 border border-solid border-gray-400 bg-[var(--background)] rounded-md text-xl
                  [&[data-focused]]:outline [&[data-focused]]:outline-2
                  [&[data-focused]]:outline-offset-[-1px] [&[data-focused]]:outline-[var(--focus-ring-color)]"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            required
          />
        </TextField>

        {/* メッセージ表示エリア */}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <div className="flex justify-end mt-8">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded shadow-md
                   hover:bg-blue-600 hover:scale-105 hover:shadow-lg
                   transition-transform duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
