import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Canceladas', 'Marcadas', 'Pendentes', 'Concluídas', 'Futuras'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
           
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
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

    // Limpar o gráfico ao desmontar o componente
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{padding: "1vh" ,display: 'flex', justifyContent: 'center',  position: 'relative', width: '500px', height: '500px', boxShadow: '0px 5px 5px 1px grey' }}>
      <canvas ref={chartRef} width="500px" height="400px" />
    </div>
  );
};

export default ChartComponent;
