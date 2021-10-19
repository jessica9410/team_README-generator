const Manager= require("../lib/Manager")

// test("Successfully instantiates instance of Employee class",()=>{
//     const manager=new Manager();
//     expect(typeof(manager).toBe("object"));
    
//     })
    test("should set name through constructor", ()=>{
        const name= "Joseph";
        const manager= new Manager(name);
        expect(manager.name).toBe(name);
    })
    
    test("should set id through constructor", ()=>{
        const id = "5678";
        const manager= new Manager(id);
        expect(manager.id).toBe(id);
    })
    test("should set email through constructor", ()=>{
        const email= "mark@gmail.com";
        const manager= new Manager(email);
        expect(manager.email).toBe(email);
    })
    test("should set office number through constructor", ()=>{
        const officeNumber="50";
        const manager=new Manager(officeNumber);
        expect(manager.officeNumber).toBe(officeNumber);
    })