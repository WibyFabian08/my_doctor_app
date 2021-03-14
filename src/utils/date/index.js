export const getChatTime = (today) => {
  const hour = today.getDate();
  const minute = today.getMinutes();

  return `${hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = (today) => {
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();

  return `${year}-${month}-${date}`;
};
