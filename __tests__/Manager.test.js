const Manager= require("../lib/Manager")
const manager=new Manager('Mark', '5678', 'mark@gmail.com', '800');
    
test('test if we can get constructor values for the manager object',()=> {
expect(manager.name).toBe("Mark");
expect(manager.id).toBe("5678");
expect(manager.email).toBe("mark@gmail.com");
expect(manager.officeNumber).toBe("800");
    });
    
    test("test if we can get the name from the getName() method", ()=>{
        expect(manager.getName()).toBe("Mark");
    });
    test("test if we can get the id from the getId() method", ()=>{
        expect(manager.getId()).toBe("5678");
    });
  
    test("test if we can get the email from the getEmail() method", ()=>{
        expect(manager.getEmail()).toBe("mark@gmail.com");
    });
  
    test("test if we can get the office number from the getOfficeNumber() method", ()=>{
        expect(manager.getOfficeNumber()).toBe("800");
    });
  test ("test if we can get the role from the getRole() method", ()=> {
      expect(manager.getRole()).toBe("Manager");
  });
  