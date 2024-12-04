import { PropsWithChildren } from "react";
//<{nom: string, age: number}>
export default function Layout(props: PropsWithChildren) {
  return (
    <section className="absolute top-0 bottom-0 left-32 right-0">
      {props.children}
    </section>
  );
}
