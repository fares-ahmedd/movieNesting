export const moviesList = [
  "Horror Movies",
  "Romantic Movies",
  "Drama Movies",
  "Action Movies",
  "Fantasy Movies",
  "TV Shows",
  "Series",
];

export const iconsLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100005496826371",
    bgColor: "#3b5998",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/fares-ahmed-3627b7239/",
    bgColor: "#0077b5",
  },
  {
    title: "Whatsapp",
    href: "https://wa.me/201206953905",
    bgColor: "#25d366",
  },
  {
    title: "github",
    href: "https://github.com/fares-ahmedd",
    bgColor: "#333",
  },
  {
    title: "Gmail",
    href: "mailto:fares.haliim@gmail.com",
    bgColor: "#d44638",
  },
];

export function toHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
}
