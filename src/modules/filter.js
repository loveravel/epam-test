import Component from './component';

export default class Filter extends Component {
  constructor(data) {
    super();
    this._name = data.name;
    this._link = data.link;
    this._active = data.active;

    this._onClick = null;
    this._onFilterClick = this._onFilterClick.bind(this);
  }

  _onFilterClick() {
    if (typeof this._onClick === 'function') {
      this._onClick();
    }
  }

  set onClick(callback) {
    this._onClick = callback;
  }

  get name() {
    return this._name;
  }

  get template() {
    return `
      <li class="nav__item">
        <a href="#${this._link}" class="nav__link
          ${this._active ? `nav__link--active` : ``}">
          ${this._name}
        </a>
      </li>`.trim();
  }

  bind() {
    this._element.addEventListener('click', this._onFilterClick);
  }

  unbind() {
    this._element.removeEventListener('click', this._onFilterClick);
  }
}
