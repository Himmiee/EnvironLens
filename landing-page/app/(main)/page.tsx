import Button from "@/components/Button";
import "./components.css";
import { HeaderComponent } from "@/components/Header.tsx/page";
import { AboutComponent } from "@/components/About";
import { ServiceComponentLayout } from "./serviceLayout";
import { EnvironComponent } from "@/components/environ";
import { FooterComponent } from "@/components/footer/footer";

export default function Main() {
  return (
    <main>
      <HeaderComponent />
      <AboutComponent />
      <ServiceComponentLayout />
      <EnvironComponent />
      <FooterComponent />
    </main>
  );
}
