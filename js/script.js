// notification box 

function notification() {
    let x = document.getElementById('notificationVisibility');
    if (x.style.display == 'none') {
      x.style.display = 'block';
      // document.getElementById('no-blur').classList.remove("is-not-blur");    //bug
      // document.getElementById('no-blur').classList.add("is-blur");
    } else {
      x.style.display = 'none';
      // document.getElementById('no-blur').classList.remove("is-blur");       //bug
      // document.getElementById('no-blur').classList.add("is-not-blur");
    }
}

// added just to fix bug of display flex 

function setup(){
  document.getElementById('notificationVisibility').style.display = 'none';
}

// chartjs charts 
var xValues = [1, 2, 3, 4, 5, 6, 7];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: 'This week',
            data: [1, 3, 15, 9, 13, 17, 12],
            borderColor: "red",
            fill: false
        }, {
            label: 'Previous week',
            data: [7, 8, 4, 15, 7, 18, 3],
            borderColor: "blue",
            fill: true
        }]
    },
    options: {
        legend: {
            display: false,
        }
    }

});

// skills chart 

var options = {
    type: 'radar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: '2019',
                data: [18, 19, 20, 17, 16, 18],
                borderColor: "blue",
                borderWidth: 1,
                lineTension: 0.4
            },
            {
                label: '2018',
                data: [7, 11, 5, 8, 3, 7],
                backgroundColor: "#add8e6",
                borderWidth: 1,
                lineTension: 0.4
            },
            {
                label: '2017',
                data: [17, 9, 12, 4, 15, 4],
                backgroundColor: "#F0F8FF",
                borderWidth: 1,
                lineTension: 0.4
            }
        ]
    },
    options: {
        scale: {
            gridLines: {
                circular: true
            },
            angleLines: {
                display: true
            }
        }
    }
}

var ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, options);


// goals chart 
new Chart("goalsChart", {
    type: 'doughnut',
    data: {
// const data = {
labels: [
'Completed',
'Uncompleted'
],
datasets: [{
label: 'Goals',
data: [75, 25],
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)'
],
hoverOffset: 4
}],

},
});
