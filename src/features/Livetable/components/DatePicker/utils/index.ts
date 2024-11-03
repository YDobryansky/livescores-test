import { add, toDate } from 'date-fns';

export const generateDatesRange = (
  startDate: Date,
  endDate: Date,
  duration: keyof Duration,
): Date[] => {
  const DAY_IN_MS = 86400000;
  const configDuration = { [duration]: 1 };
  const dateCount = Math.ceil((endDate.getTime() - startDate.getTime()) / DAY_IN_MS);

  return Array.from({ length: dateCount }, (_, index) =>
    add(toDate(startDate), { ...configDuration, days: index }),
  );
};
