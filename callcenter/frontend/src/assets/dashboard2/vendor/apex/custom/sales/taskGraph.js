var options = {
	chart: {
		height: 300,
		type: 'radialBar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '12px',
					fontColor: 'black',
          fontFamily: 'Merriweather',
				},
				value: {
					fontSize: '21px',
					fontFamily: 'Merriweather',
				},
				total: {
					show: true,
					label: 'Tasks',
					formatter: function (w) {
						// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
						return '19'
					}
				}
			}
		}
	},
	series: [80, 70, 10],
	labels: ['New', 'Completed', 'Pending'],
	colors: ['#4267cd', '#32b2fa', '#f87957'],
}

var chart = new ApexCharts(
	document.querySelector("#taskGraph"),
	options
);
chart.render();