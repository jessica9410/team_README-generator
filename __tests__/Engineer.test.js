const Engineer= require("../lib/Engineer")
const engineer=new Engineer('Jessica', '1123', 'jess@gmail.com', 'jessicaga9410');
    
test('test if we can get constructor values for the intern object',()=> {
expect(engineer.name).toBe("Jessica");
expect(engineer.id).toBe("1123");
expect(engineer.email).toBe("jess@gmail.com");
expect(engineer.github).toBe("jessica9410");
    });
    
    test("test if we can get the name from the getName() method", ()=>{
        expect(engineer.getName()).toBe("Jessica");
    });
    test("test if we can get the id from the getId() method", ()=>{
        expect(engineer.getId()).toBe("1123");
    });
  
    test("test if we can get the email from the getEmail() method", ()=>{
        expect(engineer.getEmail()).toBe("jess@gmail.com");
    });
    test("test if we can get the email from the getGithub() method", ()=>{
        expect(engineer.getGithub()).toBe("jessicaga9410");
    });
  
  test ("test if we can get the role from the getRole() method", ()=> {
      expect(engineer.getRole()).toBe("Engineer");
  });
  