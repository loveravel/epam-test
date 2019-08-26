export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const doFirstLetterUpperCase = (str) => {
  return str.replace(/\w/, str[0].toUpperCase());
}

const getFullName = (user) => {
  return `${user.name.first} ${user.name.last}`;
}

export const doUsersFiltering = (users, filterName) => {
  switch (filterName) {
    case 'A-Z':
      return users.sort((a, b) => {
        if(getFullName(a) < getFullName(b)) { return -1; }
        if(getFullName(a) > getFullName(b)) { return 1; }
        return 0;
      });
    case 'Z-A':
      return users.sort((a, b) => {
        if(getFullName(a) > getFullName(b)) { return -1; }
        if(getFullName(a) < getFullName(b)) { return 1; }
        return 0;
      });
    default:
      return users;
  }
}
