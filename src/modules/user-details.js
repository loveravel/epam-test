import Component from './component';
import {doFirstLetterUpperCase} from '../tools';

export default class User extends Component {
  constructor(data) {
    super();
    this.gender = data.gender;
    this.name = data.name;
    this.location = data.location;
    this.email = data.email;
    this.phone = data.phone;
    this.picture = data.picture.large;

    this._onCloseButtonClick = this._onCloseButtonClick.bind(this);
  }

  _onCloseButtonClick() {
    if (typeof this._onClose === 'function') {
      this._onClose();
    }
  }

  set onClose(callback) {
    this._onClose = callback;
  }

  get template() {
    return `
    <section class="user-details">
      <div class="user-details__wrapper">
        <img class="user-details__photo" src="${this.picture}" width="128" height="128" alt="User Photo">
        <table class="user-details__table">
          <tr class="user-details__row">
            <td class="user-details__term">Full Name</td>
            <td class="user-details__cell">
              ${doFirstLetterUpperCase(this.name.title)}. ${doFirstLetterUpperCase(this.name.first)} ${doFirstLetterUpperCase(this.name.last)}
            </td>
          </tr>
          <tr class="user-details__row">
            <td class="user-details__term">Gender</td>
            <td class="user-details__cell">${doFirstLetterUpperCase(this.gender)}</td>
          </tr>
          <tr class="user-details__row">
            <td class="user-details__term">State</td>
            <td class="user-details__cell">${doFirstLetterUpperCase(this.location.state)}</td>
          </tr>
          <tr class="user-details__row">
            <td class="user-details__term">City</td>
            <td class="user-details__cell">${doFirstLetterUpperCase(this.location.city)}</td>
          </tr>
          <tr class="user-details__row">
            <td class="user-details__term">Street</td>
            <td class="user-details__cell">${doFirstLetterUpperCase(this.location.street)}</td>
          </tr>
          <tr class="user-details__row">
            <td class="user-details__term">E-mail</td>
            <td class="user-details__cell">${this.email}</td>
          </tr>
          <tr class="user-details__row">
            <td class="user-details__term">Phone</td>
            <td class="user-details__cell">${this.phone}</td>
          </tr>
        </table>
        <button class="user-details__close button button--close"><span class="button__text visually-hidden">close</span></button>
      </div>
    </section>`.trim();
  }

  bind() {
    this._element.querySelector('.user-details__close')
      .addEventListener('click', this._onCloseButtonClick);
  }

  unbind() {
    this._element.querySelector('.user-details__close')
      .removeEventListener('click', this._onCloseButtonClick);
  }
}
