const BASE_URL = 'https://cadernos-api.herokuapp.com';

const BOOKS_URL = `${BASE_URL}/books-all`;
const USERS_URL = `${BASE_URL}/users-all`;
const CATEGORIES_URL = `${BASE_URL}/categories-all`;
const TASKS_URL = `${BASE_URL}/tasks-all`;
const MEMBERSHIPS_URL = `${BASE_URL}/memberships-all`;


export default class FetchData {
  constructor(dataColletedCallback) {
    this.abortCallback = false;
    this.dataCollected = {
      books: false,
      users: false,
      tasks: false,
      categories: false,
      memberships: false
    };

    this.books = [];
    this.users = [];
    this.tasks = [];
    this.categories = [];
    this.memberships = [];

    this.getAllApiData();
    this.verifyDataCollected(dataColletedCallback);
  }

  fetchData (url, callback) {
    fetch(url)
      .then(r => r.json())
      .then(data => {
        callback(data);
      })
      .catch(e => {
        console.error(`Error on: ${url}`);
        console.error(e);
        this.abortCallback = true;
      });
  }

  getAllApiData() {
    this.fetchData(BOOKS_URL, (data) => {
      this.books = data;
      this.dataCollected.books = true;
    });

    this.fetchData(USERS_URL, (data) => {
      this.users = data;
      this.dataCollected.users = true;
    });

    this.fetchData(CATEGORIES_URL, (data) => {
      this.categories = data;
      this.dataCollected.categories = true;
    });

    this.fetchData(TASKS_URL, (data) => {
      this.tasks = data;
      this.dataCollected.tasks = true;
    });

    this.fetchData(MEMBERSHIPS_URL, (data) => {
      this.memberships = data;
      this.dataCollected.memberships = true;
    });
  }

  verifyDataCollected(callback) {
    window.setTimeout(() => {
      if (this.abortCallback) return;

      if (this.dataCollected.books &&
          this.dataCollected.users &&
          this.dataCollected.tasks &&
          this.dataCollected.categories &&
          this.dataCollected.memberships
      ) {
        callback({
          books: this.books,
          users: this.users,
          tasks: this.tasks,
          categories: this.categories,
          memberships: this.memberships
        });
      } else {
        this.verifyDataCollected(callback);
      }
    }, 1000);
  }
}
