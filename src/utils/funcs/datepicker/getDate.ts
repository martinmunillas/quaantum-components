import { IDate } from '../../../components/Organisms/Datepicker/Datepicker';

export const getDate = (date: IDate) => {
  return new Date(date.year, date.month, date.day);
};
