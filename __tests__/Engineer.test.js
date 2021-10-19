const Engineer= require("../lib/Engineer")

// test("Successfully instantiates instance of Engineer class",()=>{
//     const engineer=new Engineer();
//     expect(typeof(engineer).toBe("object"));
    
//     })
    test("should set name through constructor", ()=>{
        const name= "Joy";
        const engineer= new Engineer(name);
        expect(engineer.name).toBe(name);
    })
    
    test("should set id through constructor", ()=>{
        const id = "53216";
        const engineer= new Engineer(id);
        expect(engineer.id).toBe(id);
    })
    test("should set email through constructor", ()=>{
        const email= "joy@gmail.com";
        const engineer= new Engineer(email);
        expect(engineer.email).toBe(email);
    })
    test("should set github through constructor", ()=>{
        const github= "joy123";
        const engineer= new Engineer(github);
        expect(engineer.github).toBe(github);
    })
    
  