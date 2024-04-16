import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export   const formatDate =(date:string)=>{
  let inputDate = new Date(); // Assuming inputDate is your date object
  let formatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    weekday: 'short'
  });
  let parts = formatter.formatToParts(inputDate);
  let formattedDate = parts.reverse().map(part => part.value).join('');
  let words = formattedDate.split(' ');
  words[2] = `(${words[2]})`;
  return  words.join(' ').replace(',','');
}
