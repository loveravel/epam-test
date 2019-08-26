import Component from './component';
import {doFirstLetterUpperCase} from '../tools';

export default class User extends Component {
  constructor(data) {
    super();
    this.name = data.name;
    this.picture = data.picture.medium;

    this._onDetails = null;

    this._onUserClick = this._onUserClick.bind(this);
  }

  _onUserClick() {
    if (typeof this._onDetails === 'function') {
      this._onDetails();
    }
  }

  set onDetails(callback) {
    this._onDetails = callback;
  }

  get template() {
    return `
    <li class="users__item user">
      <a class="user__more">
        <div class="user__info">
          <img class="user__photo" src="${this.picture}" width="72" height="72" alt="User Photo"/>
          <h3 class="user__name">
            ${doFirstLetterUpperCase(this.name.title)}. ${doFirstLetterUpperCase(this.name.first)} ${doFirstLetterUpperCase(this.name.last)}
          </h3>
        </div>
      </a>
    </li>`.trim();
  }

  bind() {
    this._element.querySelector('.user__more')
      .addEventListener('click', this._onUserClick);
  }

  unbind() {
    this._element.querySelector('.user__more')
      .removeEventListener('click', this._onUserClick);
  }
}
