import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {} from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTimeOfDay(currentHour: number) {
  if (currentHour >= 6 && currentHour < 11) {
    return "Доброе утро";
  } else if (currentHour >= 11 && currentHour < 18) {
    return "Добрый день";
  } else {
    return "Добрый вечер";
  }
}
