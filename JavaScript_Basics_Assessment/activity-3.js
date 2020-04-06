var studentNames = ['Anna', 'Bella', 'Cody'];

for (let i = 0; i < 3; i++) {
    const name = prompt('Please enter a name');
    studentNames.push(name);
};

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
};