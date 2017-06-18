export default class DisplayGraph {
  constructor(vis, data) {
    this.vis = vis;
    this.nodes = [];
    this.edges = [];

    this.prepareData();
    this.displayData();
  }

  prepareData() {
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
  }

  displayData() {
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
    const network = new this.vis.Network(container, data, options);
  }
}
