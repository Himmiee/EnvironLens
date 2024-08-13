import Button from "@/components/Button";
import "./components.css";
import { HeaderComponent } from "@/components/Header.tsx/page";
import { AboutComponent } from "@/components/About";

export default function Main() {
  return (
    <main>
      <HeaderComponent />
      <AboutComponent />
    </main>
  );
}
