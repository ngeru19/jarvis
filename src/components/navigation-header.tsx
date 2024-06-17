import { NavLink } from "react-router-dom";

type linkType = {
  label: string;
  href: string;
};

const navLinks: linkType[] = [
  { label: "Главная", href: "/front" },
  { label: "Привычки", href: "/habits" },
  { label: "Финансы", href: "/finances" },
];

export default function NavigationHeader() {
  return (
    <article>
      <ul className="flex gap-6 py-2 bg-darkViolet text-mistyRose justify-center items-center">
        {navLinks.map((link) => {
          return (
            <NavLink
              to={link.href}
              key={link.href}
              activeClassName="text-red-500"
            >
              <p>{link.label}</p>
            </NavLink>
          );
        })}
      </ul>
    </article>
  );
}
