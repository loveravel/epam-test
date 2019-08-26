export default class UserModel {
  constructor(data) {
    this.gender = data.gender || ``;
    this.name = data.name || {};
    this.location = data.location || {};
    this.email = data.email || ``;
    this.phone = data.phone || ``;
    this.picture = data.picture || {};
  }

  static parseUser(data) {
    return new UserModel(data);
  }

  static parseUsers(data) {
    return data.map(UserModel.parseUser);
  }
}
