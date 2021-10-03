import { IDate } from '../../../components/Organisms/Datepicker/Datepicker';

export const areIDatesEqual = (one: IDate | null, two: IDate | null) => {
  if (one === null || two === null) {
    return false;
  }

  return one.day === two.day && one.month === two.month && one.year === two.year;
};
