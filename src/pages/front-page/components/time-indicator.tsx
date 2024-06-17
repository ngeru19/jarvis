import { format, getISOWeek, getISOWeeksInYear } from "date-fns";
import { ru } from "date-fns/locale";

export default function TimeIndicator() {
  const now = new Date();
  const formattedDate = format(now, "eeee, d MMMM", { locale: ru });
  const currentWeekNumber = getISOWeek(now);
  const totalWeeksInYear = getISOWeeksInYear(now);
  const weeksPassed = Math.floor((currentWeekNumber / totalWeeksInYear) * 100);
  const currentTime = format(now, "HH:mm");

  return (
    <div className="bg-lavender rounded-lg w-fit p-4">
      <div className="flex justify-between items-center gap-20">
        <div>
          <p>{formattedDate}</p>
        </div>
        <div>
          <p>
            {currentWeekNumber} неделя ({weeksPassed}%)
          </p>
        </div>
      </div>
      <div className="pt-16 pb-16 text-center">
        <p className="text-6xl">{currentTime}</p>
      </div>
    </div>
  );
}
