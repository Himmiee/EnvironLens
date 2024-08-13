import { NavHeader } from "../NavHeader";
import { SocialComponent } from "../Social";
import { WriteUp } from "../Social";

export const HeaderComponent = () => {
  return (
    <main className="love">
      <>
        <NavHeader />
        <SocialComponent />
        <WriteUp />
      </>
    </main>
  );
};
