import FetchData from './fetch-data';
import DisplayGraph from './display-graph';

export default class App {
  constructor (vis) {
    const apiData = new FetchData((data) => {
      console.log('Data fetched');
      console.log(data);

      const displayGraph = new DisplayGraph(vis, data);
    });
  }
}
