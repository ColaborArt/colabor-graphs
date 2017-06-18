var ColaborGraphs;
ColaborGraphs = ColaborGraphs || {};


ColaborGraphs.FetchData = (function() {
  const BASE_URL = 'https://cadernos-api.herokuapp.com';
  let books = [];
  let users = [];
  let tasks = [];
  let categories = [];
  let memberships = [];


  function fetchBooks() {
    console.log("Fetch books");
    fetch(`${BASE_URL}/books-all`)
      .then(r => r.json())
      .then(b => {
        books = b;
      })
      .catch(e => {
        console.error("Error while getting books");
        console.error(e);
      });
  }


  function fetchUsers() {
    console.log("Fetch users");
    fetch(`${BASE_URL}/users-all`)
      .then(r => r.json())
      .then(u => {
        users = u;
      })
      .catch(e => {
        console.error("Error while getting users");
        console.error(e);
      });
  }


  function fetchCategories() {
    console.log("Fetch categories");
    fetch(`${BASE_URL}/categories-all`)
      .then(r => r.json())
      .then(c => {
        categories = c;
      })
      .catch(e => {
        console.error("Error while getting categories");
        console.error(e);
      });
  }


  function fetchTasks() {
    console.log("Fetch tasks");
    fetch(`${BASE_URL}/tasks-all`)
      .then(r => r.json())
      .then(t => {
        tasks = t;
      })
      .catch(e => {
        console.error("Error while getting tasks");
        console.error(e);
      });
  }

  function fetchMemberships() {
    console.log("Fetch memberships");
    fetch(`${BASE_URL}/memberships-all`)
      .then(r => r.json())
      .then(m => {
        memberships = m;
      })
      .catch(e => {
        console.error("Error while getting tasks");
        console.error(e);
      });
  }


  return {
    fetchAll () {
      fetchBooks();
      fetchUsers();
      fetchTasks();
      fetchCategories();
      fetchMemberships();
   }
  }
}) ();

