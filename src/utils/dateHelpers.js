import { addMonths, addYears, format } from 'date-fns';

export const calculateExpiryDate = (planType) => {
  const today = new Date();
  let expiryDate;

  switch (planType) {
    case '1 Month':
      expiryDate = addMonths(today, 1);
      break;
    case '3 Months':
      expiryDate = addMonths(today, 3);
      break;
    case '1 Year':
      expiryDate = addYears(today, 1);
      break;
    default:
      expiryDate = addMonths(today, 1);
  }

  // Returns YYYY-MM-DD for PostgreSQL compatibility
  return format(expiryDate, 'yyyy-MM-dd');
};