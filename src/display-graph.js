import UIdGenerator from './uid-generator';

const BASE_URL = 'https://cadernos-api.herokuapp.com';

export default class DisplayGraph {
  constructor(vis, data) {
    this.nodes = [];
    this.edges = [];

    this.prepareData(data);
    this.displayData(vis);
  }

  prepareData(data) {
    this.makeNodes(data);
    this.makeEdges();
  }

  makeNodes(data) {
    const idGen = UIdGenerator();

    data.books.forEach(book => {
      let node = {
        id: idGen.next().value,
        label: book.title,
        group: "books",
        book_id: book.id,
        user_id: book.user_id,
        color: "#FF5722",
        shape: 'circularImage',
        image: `${BASE_URL}${book.cover_thumb}`
      }

      this.nodes.push(node);
    });

    data.users.forEach(user => {
      let node = {
        id: idGen.next().value,
        label: user.name,
        group: "users",
        user_id: user.id,
        color: "#f1c40f"
      }

      this.nodes.push(node);
    });

    data.tasks.forEach(task => {
      let node = {
        id: idGen.next().value,
        label: task.title,
        group: "tasks",
        task_id: task.id,
        book_id: task.book_id,
        category_id: task.category_id,
        color: "#2ecc71"
      }

      this.nodes.push(node);
    });

    data.categories.forEach(category => {
      let node = {
        id: idGen.next().value,
        label: category.name,
        group: "categories",
        category_id: category.id,
        color: "#ecf0f1"
      }

      this.nodes.push(node);
    });
  }

  makeEdges() {
    let categoriesNodes = [];
    let tasksNodes = [];
    let usersNodes = [];
    let booksNodes = [];

    this.nodes.forEach(node => {
      switch (node.group) {
        case "categories": categoriesNodes.push(node); break;
        case "tasks": tasksNodes.push(node); break;
        case "users": usersNodes.push(node); break;
        case "books": booksNodes.push(node); break;
        default: console.log("Undefined group on makeEdges: " + node.group);
      }
    });

    this.linkTasksToCategories(tasksNodes, categoriesNodes);
    this.linkTasksToBooks(tasksNodes, booksNodes);
    this.linkBooksToUsers(booksNodes, usersNodes);
  }

  linkTasksToCategories(tasksNodes, categoriesNodes) {
    categoriesNodes.forEach(categoryNode => {
      tasksNodes.forEach(taskNode => {
        if (taskNode.category_id === categoryNode.category_id) {
          let edge = {
            from: taskNode.id,
            to: categoryNode.id
          };

          this.edges.push(edge);
        }
      });
    });
  }

  linkTasksToBooks(tasksNodes, booksNodes) {
    booksNodes.forEach(bookNode => {
      tasksNodes.forEach(taskNode => {
        if (taskNode.book_id === bookNode.book_id) {
          let edge = {
            from: taskNode.id,
            to: bookNode.id
          };

          this.edges.push(edge);
        }
      });
    });
  }

  linkBooksToUsers(booksNodes, usersNodes) {
    booksNodes.forEach(bookNode => {
      usersNodes.forEach(userNode => {
        if (bookNode.user_id === userNode.user_id) {
          let edge = {
            from: bookNode.id,
            to: userNode.id
          };

          this.edges.push(edge);
        }
      });
    });
  }

  displayData(vis) {
    const data = {
        nodes: this.nodes,
        edges: this.edges
    };

    const options = {
      nodes: {
        shape: 'dot',
        size: 20,
        font: {
          size: 14,
          color: '#ffffff'
        },
        borderWidth: 2
      },
      edges: {
        width: 2
      }
    };

    const container = document.getElementById('mynetwork');
    const network = new vis.Network(container, data, options);
  }
}
