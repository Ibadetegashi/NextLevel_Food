"use server";

import { redirect } from "next/navigation";
import { postMeal } from "./meals";

function isInvalid(text) {
  return !text || !text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  if (
    isInvalid(meal.title) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.creator) ||
    isInvalid(meal.instructions) ||
    isInvalid(meal.creator_email) ||
    !meal.image ||
    !meal.creator_email.includes("@") ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid Input.",
    };
  }
  console.log(meal);
  await postMeal(meal);
  redirect("/meals");
}
