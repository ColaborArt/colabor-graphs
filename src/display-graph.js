import UIdGenerator from './uid-generator';


export default class DisplayGraph {
  constructor(vis, data) {
    this.nodes = [];
    this.edges = [];

    this.prepareData(data);
    this.displayData(vis);
  }

  prepareData(data) {
    const idGen = UIdGenerator();

    data.books.forEach(book => {
      let node = {
        id: idGen.next().value,
        label: book.title,
        group: "books",
        book_id: book.id,
        user_id: book.user_id
      }

      this.nodes.push(node);
    });

    data.users.forEach(user => {
      let node = {
        id: idGen.next().value,
        label: user.name,
        group: "users",
        user_id: user.id
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
        category_id: task.category_id
      }

      this.nodes.push(node);
    });

    data.categories.forEach(category => {
      let node = {
        id: idGen.next().value,
        label: category.name,
        group: "categories",
        category_id: category.id,
      }

      this.nodes.push(node);
    });
    /*
    this.nodes = [
      {id: 1, label: "a", group: "A1"},
      {id: 2, label: "b", group: "B1"},
      {id: 3, label: "c", group: "C1"},
      {id: 4, label: "d", group: "D1"}
    ];

    this.edges = [
      {from: 1, to: 2},
      {from: 2, to: 3},
      {from: 3, to: 4},
      {from: 4, to: 1}
    ]
    */
  }

  displayData(vis) {
    const data = {
        nodes: this.nodes,
        edges: this.edges
    };

    const options = {
      nodes: {
        shape: 'dot',
        size: 30,
        font: {
          size: 32,
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
