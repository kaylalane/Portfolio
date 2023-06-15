import { Menu } from "@headlessui/react";
import "../../styles/navbar.scss";

const links = [
  { label: "home", href: "/" },
  { label: "projects", href: "/#projects" },
  { label: "contact", href: "/#contact" },
  { label: "blog", href: "/blog" },
];

const Dropdown = () => {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        {links.map((link) => {
          return (
            <Menu.Item key={link.label}>
              {({ active }) => (
                <a className={`${active && "bg-blue-500"}`} href={link.href}>
                  {link.label}
                </a>
              )}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
