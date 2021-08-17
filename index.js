/* global Chart axios */

let vue = {};
let angular = {};
let ember = {};
let svelte = {};
let react = {};

axios.get("https://api.github.com/repos/vuejs/vue").then((response) => { 
  vue = response.data;
  console.log("vue", vue);
});

axios.get("https://api.github.com/repos/angular/angular.js").then((response) => { 
  angular = response.data;
  console.log("angular", angular);
});

axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => { 
  ember = response.data;
  console.log("ember", ember);
});

axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => { 
  svelte = response.data;
  console.log("svelte", svelte);
});

axios.get("https://api.github.com/repos/facebook/react").then((response) => { 
  react = response.data;
  console.log("react", react);
  renderChart();
});


function renderChart() {
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Stars", "Watchers", "Forks"],
      datasets: [{
        label: 'Vue',
        data: [vue.stargazers_count, vue.subscribers_count, vue.forks],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
      },
      {
        label: 'Angular',
        data: [angular.stargazers_count, angular.subscribers_count, angular.forks],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      },
      {
        label: 'Ember',
        data: [ember.stargazers_count, ember.subscribers_count, ember.forks],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      },
      {
        label: 'Svelte',
        data: [svelte.stargazers_count, svelte.subscribers_count, svelte.forks],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
      },
      {
        label: 'React',
        data: [react.stargazers_count, react.subscribers_count, react.forks],
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}