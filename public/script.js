var ColaborGraphs;
ColaborGraphs = ColaborGraphs || {};

ColaborGraphs.Main = (function() {
  function init() {
    ColaborGraphs.DisplayGraph.prepareData();
  }


  return {
    init
  }
}) ();


document.addEventListener("DOMContentLoaded", () => {
  ColaborGraphs.Main.init();
});
