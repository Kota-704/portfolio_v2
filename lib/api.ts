import { createClient } from "microcms-js-sdk";
import { BlogListResponse } from "./types";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});

export async function getBlogList() {
  try {
    const data: BlogListResponse = await client.get({ endpoint: "blogs" });
    return data;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    throw new Error("Failed to fetch blog list");
  }
}

export async function contactFormSubmit(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    await client.create({
      endpoint: "contact",
      content: data,
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw new Error("Failed to submit contact form");
  }
}

console.log("SERVICE_DOMAIN:", process.env.SERVICE_DOMAIN);
console.log("API_KEY:", process.env.API_KEY);
