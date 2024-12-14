const ctx = document.getElementById("salesChart").getContext("2d");

// Data Penjualan
const salesData2022 = [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945];
const salesData2023 = [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689];
const labels = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

// Membuat Diagram Bar Chart
new Chart(ctx, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "2022",
        data: salesData2022,
        backgroundColor: "rgba(54, 162, 235, 0.7)", // Warna biru
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "2023",
        data: salesData2023,
        backgroundColor: "rgba(255, 99, 132, 0.7)", // Warna merah
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Laporan Penjualan",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value.toLocaleString(); // Format angka
          },
        },
      },
    },
  },
});
