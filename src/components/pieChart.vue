<!-- <template>
  <div>
    <h2>{{ title }}</h2>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { Chart, registerables } from "chart.js";

// Register all necessary components for Chart.js
Chart.register(...registerables);

export default defineComponent({
  name: "PieChart",
  props: {
    title: {
      type: String,
      // default: "Pie Chart Example",
    },
    data: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
      default: () => ["#FF9E95", "#7469E5"], // Default colors for slices
    },
  },
  setup(props) {
    const chartCanvas = ref(null);

    onMounted(() => {
      // Ensure the chart is created only after the canvas element is ready
      const ctx = chartCanvas.value.getContext("2d");
      new Chart(ctx, {
        type: "pie", // Specify the chart type
        data: {
          labels: props.labels,
          datasets: [
            {
              data: props.data,
              backgroundColor: props.colors,
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "right",

            },
            tooltip: {
              enabled: true,
            },
            labels:{
              boxWidth: 1,
              color:"red",
            },


          },
        },
      });
    });

    return {
      chartCanvas,
    };
  },
});
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 16px;
}

canvas {
  max-width: 400px;
  margin: 0 auto;
}

</style> -->


<template>
  <div>
    <h2>{{ title }}</h2>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { Chart, registerables } from "chart.js";

// Register all necessary components for Chart.js
Chart.register(...registerables);

export default defineComponent({
  name: "PieChart",
  props: {
    title: {
      type: String,
      default: "Pie Chart Example",
    },
    data: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
      default: () => ["#FF9E95", "#7469E5"], // Default slice colors
    },
  },
  setup(props) {
    const chartCanvas = ref(null);

    onMounted(() => {
      const ctx = chartCanvas.value.getContext("2d");

      // Calculate total for percentage calculation
      const total = props.data.reduce((acc, value) => acc + value, 0);

      new Chart(ctx, {
        type: "pie",
        data: {
          labels: props.labels,
          datasets: [
            {
              data: props.data,
              backgroundColor: props.colors,
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                // Add percentage to tooltip
                label: function (tooltipItem) {
                  const value = props.data[tooltipItem.dataIndex];
                  const percentage = ((value / total) * 100).toFixed(2);
                  return `${props.labels[tooltipItem.dataIndex]}: ${value} (${percentage}%)`;
                },
              },
              bodyFont: {
                size: 14,
              },
            },
            legend: {
              labels: {
                // Customize legend labels
                boxWidth: 10, // Adjust the width of colored boxes
                padding: 15, // Add space around the boxes and text
                color: "#333",
                font: {
                  size: 14,
                },
                generateLabels: function (chart) {
                  const { datasets, labels } = chart.data;
                  return labels.map((label, index) => {
                    const percentage = ((props.data[index] / total) * 100).toFixed(2);
                    return {
                      text: `${label} (${percentage}%)`,
                      fillStyle: datasets[0].backgroundColor[index],
                    };
                  });
                },
              },
              position: "right",
            },
          },
        },
      });
    });

    return {
      chartCanvas,
    };
  },
});
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 16px;
  font-size: 18px;
  color: #4a4a4a;
}

canvas {
  max-width: 400px;
  margin: 0 auto;
}
</style>
