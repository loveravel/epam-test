import User from './modules/user';
import UserDetails from './modules/user-details';
import UserModel from './modules/user-model'
import Filter from './modules/filter'
import {filtersData} from './filters-data'
import {doUsersFiltering} from './tools'

const URL = 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture';

const Container = {
  FILTERS: document.querySelector('.nav__list'),
  USERS: document.querySelector('.users__list'),
}

const renderFilters = (container, filtersData, usersData) => {
  filtersData.forEach((data) => {
    const filter = new Filter(data);

    container.appendChild(filter.render());

    filter.onClick = () => {
      const filterActive = document.querySelector('.nav__item--active');
      if (filterActive) {
        filterActive.classList.remove('nav__item--active');
      }
      filter.element.classList.add('nav__item--active');

      const filteredUsers = doUsersFiltering(usersData, filter.name);

      renderUsers(Container.USERS, filteredUsers);
    };
  });
}

const renderUsers = (container, usersData) => {
  container.innerHTML = '';
  usersData.forEach((data) => {
    const user = new User(data);
    const userDetails = new UserDetails(data);

    user.onDetails = () => {
      if (document.querySelector('.user-details')) {
        document.querySelector('.user-details').remove();
      }

      const userDetailsElement = userDetails.render();
      document.body.appendChild(userDetailsElement);
    };

    userDetails.onClose = () => {
      userDetails.unrender();
    };

    container.appendChild(user.render());
  });
};

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    const users = UserModel.parseUsers(data.results);
    renderUsers(Container.USERS, users);
    renderFilters(Container.FILTERS, filtersData, users);
  })
  .catch((err) => {
    throw new Error(err);
  });
