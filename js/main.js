var treemaps = []

var weekdays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
]

d3.csv('data/crime_calendar.csv', function(error, data) {
    if (error) throw error;

    weekdays.forEach(function(day) {
        treemaps.push(new Treemap(day, data))
    })
});
