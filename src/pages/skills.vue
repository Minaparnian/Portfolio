<template name="Chart">
  <div class="hero-body">
    <div class="container is-centered">
      <div class="columns is-centered">
        <div class="column is-narrow">
          <canvas ref="graphInvestments" style="width: 100% !important; height: 350px"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'Skills',
  data: () => ({
    data: ''
  }),
  mounted () {
    const ctx = document.getElementById('graphInvestments')
    this.data = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        datasets: [
          { // one line graph
            label: 'Number of Moons',
            data: [0, 0, 1, 2, 67, 62, 27, 14],
            backgroundColor: [
              'rgba(54,73,93,.5)', // Blue
              'rgba(54,73,93,.5)',
              'rgba(54,73,93,.5)',
              'rgba(54,73,93,.5)',
              'rgba(54,73,93,.5)',
              'rgba(54,73,93,.5)',
              'rgba(54,73,93,.5)',
              'rgba(54,73,93,.5)'
            ],
            borderColor: [
              '#36495d',
              '#36495d',
              '#36495d',
              '#36495d',
              '#36495d',
              '#36495d',
              '#36495d',
              '#36495d'
            ],
            borderWidth: 3
          },
          { // another line graph
            label: 'Planet Mass (x1,000 km)',
            data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
            backgroundColor: [
              'rgba(71, 183,132,.5)' // Green
            ],
            borderColor: [
              '#47b784'
            ],
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        lineTension: 1,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }]
        }
      }
    })
  }
}
</script>
