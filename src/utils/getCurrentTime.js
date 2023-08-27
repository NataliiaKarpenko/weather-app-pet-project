const currentTime = new Date();

export const formatDayToCome = timestamp => {
  let date = new Date(timestamp * 1000);
  let today = new Date();
  let day = date.getDay();
  let currentDay = today.getDay();
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const newDay = days[day] === days[currentDay] ? 'Today' : days[day];
  return newDay;
};

export function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

export const showDay = id => {
  const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const newDate = weekDay[id];

  return newDate;
};

export const showContractedDay = id => {
  const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const newDate = weekDay[id];

  return newDate;
};

export const showMonth = () => {
  const month = currentTime.getMonth();
  const currentMonth = [
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
  ];

  const newCurrentMonth = currentMonth[month];

  return newCurrentMonth;
};

export const showContractedMonth = () => {
  const month = currentTime.getMonth();
  const currentMonth = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const newCurrentMonth = currentMonth[month];

  return newCurrentMonth;
};

export const getLocalTime = time => {
  const localHours = addLeadingZero(time.getHours());
  const localminutes = addLeadingZero(time.getMinutes());
  console.log(`${localHours}:${localminutes}`);
  return `${localHours}:${localminutes}`;
};
