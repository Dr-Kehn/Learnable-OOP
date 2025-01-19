// JavaScript implementation of Attendance System

// Student Class
class Student {
    // Static property to track total students
    static totalStudents = 0;
  
    constructor(name, studentId) {
      this.name = name;
      this.studentId = studentId;
      this.attendance = [];
      this.absence = [];
      Student.totalStudents += 1;
    }
  
    // Method to mark attendance
    markAttendance(date) {
      this.attendance.push(date);
      console.log(`${this.name} marked as present on ${date}`);
    }
  
    // Method to mark absence
    markAbsence(date) {
      this.absence.push(date);
      console.log(`${this.name} marked as absent on ${date}`);
    }
  
    // Method to get attendance records
    getAttendance() {
      return this.attendance;
    }
  
    // Method to get absence records
    getAbsence() {
      return this.absence;
    }
  }
  
  // Lecturer Class
  class Lecturer {
    // Static property to track total lecturers
    static totalLecturers = 0;
  
    constructor(name, lecturerId) {
      this.name = name;
      this.lecturerId = lecturerId;
      this.attendance = [];
      this.absence = [];
      Lecturer.totalLecturers += 1;
    }
  
    // Method to mark attendance
    markAttendance(date) {
      this.attendance.push(date);
      console.log(`Lecturer ${this.name} marked as present on ${date}`);
    }
  
    // Method to mark absence
    markAbsence(date) {
      this.absence.push(date);
      console.log(`Lecturer ${this.name} marked as absent on ${date}`);
    }
  
    // Method to get attendance records
    getAttendance() {
      return this.attendance;
    }
  
    // Method to get absence records
    getAbsence() {
      return this.absence;
    }
  }
  
  // Example Usage
  
  // Create Student Instances
  const student1 = new Student("Tappi", "S101");
  const student2 = new Student("Amara", "S102");
  const student3 = new Student("Kenechukwu Ezeokpo", "001FE");
  const student4 = new Student("Glory Okafor", "000FE");
  
  // Mark Attendance for Students
  student1.markAttendance("2025-01-18");
  student3.markAttendance("2025-01-18");
  
  // Mark Absence for Students
  student2.markAbsence("2025-01-19");
  student4.markAbsence("2025-01-19");
  
  // Get Attendance for Students
  console.log(student1.getAttendance()); // Output: ["2025-01-18"]
  console.log(student3.getAttendance()); // Output: ["2025-01-18"]
  
  // Get Absence for Students
  console.log(student2.getAbsence()); // Output: ["2025-01-19"]
  console.log(student4.getAbsence()); // Output: ["2025-01-19"]
  
  // Create Lecturer Instance
  const lecturer1 = new Lecturer("Ezeh Livinus", "OOP1");
  const lecturer2 = new Lecturer("Victor Idam", "FE0ME");
  
  // Mark Attendance for Lecturer
  lecturer1.markAttendance("2025-01-18");
  
  // Mark Absence for Lecturer
  lecturer2.markAbsence("2025-01-19");
  
  // Get Attendance for Lecturer
  console.log(lecturer1.getAttendance()); // Output: ["2025-01-18"]
  
  // Get Absence for Lecturer
  console.log(lecturer2.getAbsence()); // Output: ["2025-01-19"]
  
  // Access Static Properties
  console.log(`Total Students: ${Student.totalStudents}`); // Output: 2
  console.log(`Total Lecturers: ${Lecturer.totalLecturers}`); // Output: 1
  