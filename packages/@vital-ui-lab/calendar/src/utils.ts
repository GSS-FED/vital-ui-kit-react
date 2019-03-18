const TODAY = new Date();

/**
 * An internal day object
 */
export type DayObj = {
  fullDate: Date;
  day: number; // Day displayed on month table
  isOutOfMonth: boolean;
  isToday: boolean;
};

/**
 * Get current month in Date() format
 */
export function getCurrentMonth(month?: number, year?: number): Date {
  const targetMonth = parseInt(month.toString(), 10);
  const targetYear = parseInt(year.toString(), 10);
  const currentMonth =
    !Number.isNaN(targetMonth) && targetMonth >= 0 && targetMonth < 13
      ? targetMonth - 1
      : TODAY.getMonth();
  const currentYear = !Number.isNaN(targetYear)
    ? targetYear
    : TODAY.getFullYear();

  return new Date(currentYear, currentMonth, 1);
}

/**
 * Range of selected date
 */
export type SelectedDateRange = {
  from?: Date;
  to?: Date;
};

/**
 * Check current date has been selected or not
 */
export function checkSelectedState(
  currentDate: Date,
  selectedDateRange: SelectedDateRange,
): boolean {
  let isSelected = false;

  // If only fromSelectedDate is available
  if (
    selectedDateRange.from &&
    !selectedDateRange.to &&
    // Compare date only, without time part
    +currentDate ===
      +new Date(new Date(selectedDateRange.from).setHours(0, 0, 0, 0))
  ) {
    isSelected = true;
  }

  // If under fromSelectedDate ~ toSelectedDate
  if (
    selectedDateRange.from &&
    selectedDateRange.to &&
    +currentDate >=
      +new Date(
        new Date(selectedDateRange.from).setHours(0, 0, 0, 0),
      ) &&
    +currentDate <=
      +new Date(new Date(selectedDateRange.to).setHours(0, 0, 0, 0))
  ) {
    isSelected = true;
  }

  return isSelected;
}

type WeekRowGeneratorParams = {
  year: number;
  month: number;
  startDay: number;
  dayOfMonth: number;
  dayOfNextMonth: number;
};

/**
 * Generate a week row includes Sunday to Saturday
 */
function generateWeekRow({
  year,
  month,
  startDay,
  dayOfMonth,
  dayOfNextMonth,
}: WeekRowGeneratorParams): DayObj[] {
  // An empty array uses to generate a week row
  const weekArray = new Array(7).fill(undefined);

  return weekArray.map((_, index) => {
    let fullDate;
    let realDay;
    let isPreviousMonth;
    let isOutOfMonth = false;

    if (startDay + index < 0) {
      realDay = dayOfMonth + startDay + index + 1;
      isOutOfMonth = true;
      isPreviousMonth = true;
    } else if (startDay + index + 1 > dayOfNextMonth) {
      realDay = startDay + index - dayOfNextMonth + 1;
      isOutOfMonth = true;
      isPreviousMonth = false;
    } else {
      realDay = startDay + index + 1;
      isPreviousMonth = false;
    }

    if (isOutOfMonth && isPreviousMonth) {
      fullDate = new Date(year, month - 2, realDay);
    } else if (isOutOfMonth && !isPreviousMonth) {
      fullDate = new Date(year, month, realDay);
    } else {
      fullDate = new Date(year, month - 1, realDay);
    }

    return {
      fullDate,
      day: realDay,
      isOutOfMonth,
      isToday: false,
    };
  });
}

/**
 * Generate a month table between January to December
 */
export function generateMonthTable(currentMonth: Date): DayObj[][] {
  const monthArray = [];
  const month = currentMonth.getMonth();
  const year = currentMonth.getFullYear();

  let recordDate = 0; // A record which dayObj is generated

  const firstDayInFirstweek = new Date(year, month, 1).getDay();
  const dayOfMonth = new Date(year, month, 0).getDate();
  const dayOfNextMonth = new Date(year, month + 1, 0).getDate();

  // first week row
  monthArray.push(
    generateWeekRow({
      year,
      month: month + 1,
      startDay: recordDate - firstDayInFirstweek,
      dayOfMonth,
      dayOfNextMonth,
    }),
  );

  recordDate = 7 - firstDayInFirstweek;
  // loop for following week row
  while (recordDate < dayOfNextMonth - 1) {
    monthArray.push(
      generateWeekRow({
        year,
        month: month + 1,
        startDay: recordDate,
        dayOfMonth,
        dayOfNextMonth,
      }),
    );
    recordDate += 7;
  }

  // set isToday
  if (month === TODAY.getMonth() && year === TODAY.getFullYear()) {
    const atWeek =
      Math.ceil((TODAY.getDate() + firstDayInFirstweek) / 7) - 1;
    const atDay = (TODAY.getDate() + firstDayInFirstweek - 1) % 7;
    monthArray[atWeek][atDay].isToday = true;
  }

  return monthArray;
}
