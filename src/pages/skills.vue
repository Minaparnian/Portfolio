<template name="Chart">
  <div class="hero-body">
    <div class="container is-centered">
      <div class="columns is-centered">
        <div class="column is-narrow">
          <div class="chart-container">
            <canvas ref="chart"></canvas>
          </div>
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
    /* eslint-disable no-unused-vars */
    var chart = this.$refs.chart
    var ctx = chart.getContext('2d')
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['HTML5', 'CSS3', 'Bootstrap/ Bulma', 'Javascript/Jquery', 'Vue Js / Vuex', 'React', 'Ruby on Rails', 'PHP', 'MySql', 'Firebase', 'Node.js', 'Git/Github', 'Sourcetree/ Bitbucket', 'Photoshop, illustrator & Indesign', 'Zeplin, Sketch'],
        datasets: [{
          label: '# of Votes',
          data: [20, 20, 20, 17, 15, 10, 15, 15, 15, 12, 15, 19, 20, 20, 20],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)',
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(255, 99, 132)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)',
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(255, 99, 132)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)',
            'rgba(255, 99, 132)',
            'rgba(255, 159, 64)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.yLabel
            }
          }
        },
        scales: {
          yAxes: [{
            stacked: true,
            ticks: {
              fontColor: '#6c6a6b',
              fontSize: 18,
              stepSize: 1,
              beginAtZero: true
            },
            gridLines: {
              display: false,
              color: '#fff'
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              fontColor: '#fff',
              fontSize: 14,
              stepSize: 1,
              beginAtZero: true,
              autoSkip: false
            }
          }]
        }
      }
    })
    /* eslint-enable no-unused-vars */
  }
}
</script>

<style>
.chart-container {
  position: relative;
  margin: auto;
  height: 80vh;
  width: 80vw;
}
</style>
