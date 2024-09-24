import { ServiceComponent } from "@/components/services";
import { ServiceCard } from "@/components/cards/serviceCard";

export const ServiceComponentLayout = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 h-[650px]">
      <ServiceComponent />
      <ServiceCard />
    </div>
  );
};
