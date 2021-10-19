const Employee= require("../lib/Employee")

// test("Successfully instantiates instance of Employee class",()=>{
// const employee=new Employee();
// expect(typeof(employee).toBe("object"));

// })
test("should set name through constructor", ()=>{
    const name= "Mark";
    const employee= new Employee(name);
    expect(employee.name).toBe(name);
})

test("should set id through constructor", ()=>{
    const id = "1234";
    const employee= new Employee(id);
    expect(employee.id).toBe(id);
})
test("should set email through constructor", ()=>{
    const email= "mark@gmail.com";
    const employee= new Employee(email);
    expect(employee.email).toBe(email);
})