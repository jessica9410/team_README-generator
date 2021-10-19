const Intern= require("../lib/Intern")

// test("Successfully instantiates instance of Intern class",()=>{
//     const intern=new Intern();
//     expect(typeof(intern).toBe("object"));
    
//     })
    test("should set name through constructor", ()=>{
        const name= "Eric";
        const intern= new Intern(name);
        expect(intern.name).toBe(name);
    })
    
    test("should set id through constructor", ()=>{
        const id = "9875";
        const intern= new Intern(id);
        expect(intern.id).toBe(id);
    })
    test("should set email through constructor", ()=>{
        const email= "eric@gmail.com";
        const intern= new Intern(email);
        expect(intern.email).toBe(email);
    })
    test("should set school name through constructor", ()=>{
        const school= "UCF";
        const intern=new Intern(school);
        expect(intern.school).toBe(school);
    })