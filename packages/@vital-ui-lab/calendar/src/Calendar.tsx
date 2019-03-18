import * as React from 'react';

import {
  Header,
  HeaderBtn,
  ArrowIconSvg,
  MonthTable,
  DayCell,
  TodayText,
} from './styled';
import {
  getCurrentMonth,
  generateMonthTable,
  checkSelectedState,
  DayObj,
  SelectedDateRange,
} from './utils';

export type Props = {
  /** Show calendar in assigned month */
  assignedMonth?: number;
  /** Show calendar in assigned year */
  assignedYear?: number;
  /** Pin selected date, include from and to */
  selectedDateRange?: SelectedDateRange;
  weekNames?: string[];
  monthNames?: string[];
  /** Callback fired when a date is choosen */
  onDateSelect?: (selectedDate: Date) => void;
  className?: string;
  style?: React.CSSProperties;
};

type State = {
  currentMonth: Date;
  /** Use to make sure currentMonth is changed by internal method */
  isMonthInternalChanged: boolean;
};

export class Calendar extends React.Component<Props, State> {
  static defaultProps = {
    assignedMonth: undefined,
    assignedYear: undefined,
    selectedDateRange: {
      from: undefined,
      to: undefined,
    },
    weekNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    onDateSelect: () => {},
    className: '',
    style: undefined,
  };

  static getDerivedStateFromProps(
    nextProps: Props,
    prevState: State,
  ) {
    const { assignedMonth, assignedYear } = nextProps;
    const nextMonth = getCurrentMonth(assignedMonth, assignedYear);

    // Make sure it is not fired by state changes
    if (
      !prevState.isMonthInternalChanged &&
      +nextMonth !== +prevState.currentMonth
    ) {
      return {
        currentMonth: nextMonth,
      };
    }

    // Reset `isMonthInternalChanged` state if it was changed
    if (prevState.isMonthInternalChanged) {
      return {
        isMonthInternalChanged: false,
      };
    }

    return null;
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      currentMonth: getCurrentMonth(
        props.assignedMonth,
        props.assignedYear,
      ),
      isMonthInternalChanged: false,
    };
  }

  /**
   * Localize month's name
   */
  localeMonthName = (date: Date): string => {
    const { monthNames } = this.props;

    return monthNames ? monthNames[date.getMonth()] : '';
  };

  // -------------------------------------
  //   Event handlers
  // -------------------------------------

  /**
   * Switch to previous month table
   */
  handleMonthPrev = (): void => {
    const { currentMonth } = this.state;
    const newCurrentMonth = new Date(currentMonth);
    newCurrentMonth.setMonth(currentMonth.getMonth() - 1, 1);

    this.setState({
      currentMonth: newCurrentMonth,
      isMonthInternalChanged: true,
    });
  };

  /**
   * Switch to next month table
   */
  handleMonthNext = (): void => {
    const { currentMonth } = this.state;
    const newCurrentMonth = new Date(currentMonth);
    newCurrentMonth.setMonth(currentMonth.getMonth() + 1, 1);

    this.setState({
      currentMonth: newCurrentMonth,
      isMonthInternalChanged: true,
    });
  };

  /**
   * Select a date
   */
  handleDateSelect = ({ fullDate }: DayObj) => (): void => {
    const { onDateSelect } = this.props;

    if (typeof onDateSelect === 'function') {
      onDateSelect(fullDate);
    }
  };

  // -------------------------------------
  //   Renderers
  // -------------------------------------

  /**
   * Render a day cell
   */
  renderDayCell = (dayObj: DayObj, index: number) => {
    const { selectedDateRange } = this.props;
    const isSelected =
      selectedDateRange &&
      checkSelectedState(dayObj.fullDate, selectedDateRange);

    return (
      <td key={`calendar-day-${index}`}>
        <DayCell
          isSelected={!!isSelected}
          disabled={dayObj.isOutOfMonth}
          onClick={this.handleDateSelect(dayObj)}
        >
          {dayObj.day}
          {dayObj.isToday && <TodayText>TODAY</TodayText>}
        </DayCell>
      </td>
    );
  };

  render() {
    const { weekNames, className, style } = this.props;
    const { currentMonth } = this.state;

    const currentYear = currentMonth.getFullYear();
    const currentMonthName = this.localeMonthName(currentMonth);
    const currentMonthTable = generateMonthTable(currentMonth);

    return (
      <div className={className} style={style}>
        <Header>
          <HeaderBtn onClick={this.handleMonthPrev}>
            <ArrowIconSvg
              x="0px"
              y="0px"
              width="14px"
              height="14px"
              viewBox="0 0 199.404 199.404"
            >
              <g>
                <polygon points="135.412,0 35.709,99.702 135.412,199.404 163.695,171.119 92.277,99.702 163.695,28.285" />
              </g>
            </ArrowIconSvg>
          </HeaderBtn>
          <h3>{`${currentMonthName} ${currentYear}`}</h3>
          <HeaderBtn onClick={this.handleMonthNext}>
            <ArrowIconSvg
              x="0px"
              y="0px"
              width="14px"
              height="14px"
              viewBox="0 0 199.404 199.404"
            >
              <g>
                <polygon points="63.993,199.404 163.695,99.702 63.993,0 35.709,28.285 107.127,99.702 35.709,171.119" />
              </g>
            </ArrowIconSvg>
          </HeaderBtn>
        </Header>

        <MonthTable>
          <thead>
            <tr>
              {weekNames &&
                weekNames.map((weekName, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <th key={`${weekName}-${index}`}>{weekName}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {currentMonthTable.map((weekRow, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`calendar-week-${index}`}>
                {weekRow.map(this.renderDayCell)}
              </tr>
            ))}
          </tbody>
        </MonthTable>
      </div>
    );
  }
}
