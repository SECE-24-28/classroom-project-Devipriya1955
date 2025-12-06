let student = {
    name: "John Doe",
    age: 20,
    department: "Computer Science",
    marks: [85, 92, 78]  
};

console.log("Student Details:");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Department:", student.department);
console.log("Marks:", student.marks);

student.name = "Michael";

let totalMarks = student.marks.reduce((a, b) => a + b, 0);
student.percentage = (totalMarks / 3).toFixed(2);

let highestMark = Math.max(...student.marks);

console.log("\nUpdated Student Details:");
console.log("New Name:", student.name);
console.log("Percentage:", student.percentage + "%");
console.log("Highest Mark:", highestMark);
