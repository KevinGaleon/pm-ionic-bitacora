import moment from 'moment';

export const formatLocaleDate = (date: string, hoursOffset = 0) => {
  const language = 'es'
  moment.locale(language);

  let month = moment(date).subtract(hoursOffset, 'h').format('MM');
  month = month.charAt(0).toUpperCase() + month.slice(1);
  const day = moment(date).subtract(hoursOffset, 'h').format('DD');
  const year = moment(date).subtract(hoursOffset, 'h').format('YYYY');

  return `${year}-${month}-${day}`;
};