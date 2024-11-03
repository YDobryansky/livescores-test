import { useMemo } from 'react';
import usePopover from './hooks/usePopover';
import { addDays, isSameDay, subDays, format } from 'date-fns';
import ukLocale from 'date-fns/locale/uk';
import { generateDatesRange } from './utils';
import { CalendarMonthOutlined } from '@mui/icons-material';

import * as Styled from './index.styled';

type DatePickerProps = {
  date: Date;
  onChange: (newDate: Date) => void;
} & React.ComponentProps<typeof Styled.Picker>;

const DatePicker: React.FC<DatePickerProps> = ({ date, onChange, ...props }) => {
  const { anchor, handleOpen, handleClose } = usePopover();

  const currentDate = new Date();

  const weekDates = useMemo(() => {
    return generateDatesRange(subDays(currentDate, 7), addDays(currentDate, 8), 'days');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const DATE_FORMAT = 'dd/MM eeeeee';

  return (
    <>
      <Styled.Picker {...props}>
        <Styled.ArrowButton
          onClick={() => onChange(subDays(date, 1))}
          disabled={isSameDay(date, weekDates[0])}
        >
          <Styled.LeftArrowIcon />
        </Styled.ArrowButton>
        <Styled.PickerButton onClick={handleOpen}>
          <CalendarMonthOutlined />
          {format(date, DATE_FORMAT, { locale: ukLocale })}
        </Styled.PickerButton>
        <Styled.ArrowButton
          onClick={() => onChange(addDays(date, 1))}
          disabled={isSameDay(date, weekDates[weekDates.length - 1])}
        >
          <Styled.RightArrowIcon />
        </Styled.ArrowButton>
      </Styled.Picker>
      <Styled.Popover open={!!anchor} anchorEl={anchor} onClose={handleClose}>
        <Styled.WeekDays>
          {weekDates.map(weekDate => (
            <Styled.WeekDayButton
              onClick={() => {
                onChange(weekDate);
                handleClose();
              }}
              active={isSameDay(weekDate, date)}
              key={+weekDate}
            >
              {isSameDay(weekDate, currentDate)
                ? 'Сьогодні'
                : format(weekDate, DATE_FORMAT, { locale: ukLocale })}
            </Styled.WeekDayButton>
          ))}
        </Styled.WeekDays>
      </Styled.Popover>
    </>
  );
};

export default DatePicker;
