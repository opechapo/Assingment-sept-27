// //Assignment  
//  Creating a Teacher Class
//  Create a Teacher class that inherits from the Person class. Implement the following requirements:

//  The Teacher class should inherit from the Person class.
//  Add a teach method that takes a subject parameter and prints a message.
//  Override the getName method to return "[First Name] [Last Name]" instead of just the first name.


 


class Person{
  constructor (firstName,lastName,teach){
    this.firstName = firstName,
    this.lastName = lastName,
    this.teach= teach
    
  }
   
     hisFullName(){
    console.log(`his first name is ${this.firstName} and last name is ${this.lastName}`);

  }
}

class Teacher extends Person {
    bestFood= "Eba"
    fat= true
    teacher(subject){
      console.log(`This man ${this.firstName} can flog fire if you dont finish ${this.teach}`);
      
    }
}

const teachers= new Teacher("Isreal","Adesanya","Geography")
console.log(teachers)
console.log(teachers.lastName);
teachers.hisFullName();
teachers.teacher()







