// Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
var x = [ [5,2,3], [10,8,9] ]
x[0][1] = 6
console.log(x)

// Change the last_name of the first student from 'Jordan' to 'Bryant'
var students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
// students[0].last_name = "Bryant"
// students[0]["last_name"] = "Bryant"
students[1]["first_name"] = "Nick"
console.log(students)

// In the sports_directory, change 'Messi' to 'Andres'
var sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
sports_directory["soccer"][0] = "Andres"
sports_directory.soccer[0] = "Andres"

sports_directory["basketball"][3] = "Harden"
sports_directory.basketball[3] = "Harden"

console.log(sports_directory)


// Change the value 20 in z to 30
var z = [ {'x': 10, 'y': 20} ]
z[0]["y"] = 30
z[0].y = 30
