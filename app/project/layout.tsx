import "../../styles/globals.scss";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" px-8">{children}</div>;
}
