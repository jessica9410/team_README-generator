const Intern=require("../lib/Intern")

    
test('test if we can get constructor values for the intern object',()=> {
    const intern=new Intern('Eric', '321', 'eric@gmail.com', 'UCF');
expect(intern.name).toBe("Eric");
expect(intern.id).toBe("321");
expect(intern.email).toBe("eric@gmail.com");
expect(intern.school).toBe("UCF");
    });
    
    test("test if we can get the name from the getName() method", ()=>{
        const intern=new Intern('Eric', '321', 'eric@gmail.com', 'UCF');
        expect(intern.getName()).toBe("Eric");
    });
    test("test if we can get the id from the getId() method", ()=>{
        const intern=new Intern('Eric', '321', 'eric@gmail.com', 'UCF');
        expect(intern.getId()).toBe("321");
    });
  
    test("test if we can get the email from the getEmail() method", ()=>{
        const intern=new Intern('Eric', '321', 'eric@gmail.com', 'UCF');
        expect(intern.getEmail()).toBe("eric@gmail.com");
        
    });
    test("test if we can get the school name from the getSchool() method", ()=>{
        const intern=new Intern('Eric', '321', 'eric@gmail.com', 'UCF');
        expect(intern.getSchool()).toBe("UCF");
    });
  test ("test if we can get the role from the getRole() method", ()=> {
    const intern=new Intern('Eric', '321', 'eric@gmail.com', 'UCF');
      expect(intern.getRole()).toBe("Intern");
  });
  