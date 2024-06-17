import { getTimeOfDay } from "@/lib/utils";
import TimeIndicator from "./components/time-indicator";

export default function FrontPage() {
  const now = new Date();
  const currentHour = now.getHours();
  const greeting = getTimeOfDay(currentHour);

  return (
    <main className="bg-darkViolet h-screen font-inter">
      <div className="pl-36 pt-12">
        <h1 className="text-mistyRose font-bold text-3xl">{`${greeting}, Улан`}</h1>
        <div className="pt-12">
          <TimeIndicator />
        </div>
      </div>
    </main>
  );
}
