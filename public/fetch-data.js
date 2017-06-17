var ColaborGraphs;
ColaborGraphs = ColaborGraphs || {};


ColaborGraphs.FetchData = (function() {
  const BASE_URL = 'https://cadernos-api.herokuapp.com';
  let books = [];
  let users = [];
  let tasks = [];
  let categories = [];


  function fetchBooks() {
    fetch(`${BASE_URL}/books`)
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
    fetch(`${BASE_URL}/users`)
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
    fetch(`${BASE_URL}/categories`)
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
    fetch(`${BASE_URL}/tasks`)
      .then(r => r.json())
      .then(t => {
        tasks = t;
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
   }
  }
}) ();

