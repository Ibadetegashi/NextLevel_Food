"use server";

import { redirect } from "next/navigation";
import { postMeal } from "./meals";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  console.log(meal);
  await postMeal(meal);
  redirect("/meals");
}
