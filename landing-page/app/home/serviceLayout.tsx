import { ServiceComponent } from "@/components/services";
import { ServiceCard } from "@/components/cards/serviceCard";

export const ServiceComponentLayout = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 h-[700px]">
      <ServiceComponent />
      <ServiceCard />
    </div>
  );
};
