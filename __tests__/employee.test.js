const Employee=require("../lib/Employee")
const employee=new Employee('Joseph', '5678', 'joseph@gmail.com');
    
test('test if we can get constructor values for the employee object',()=> {
expect(employee.name).toBe("Joseph");
expect(employee.id).toBe("5678");
expect(employee.email).toBe("joseph@gmail.com");
    });
    
    test("test if we can get the name from the getName() method", ()=>{
        expect(employee.getName()).toBe("Joseph");
    });
    test("test if we can get the id from the getId() method", ()=>{
        expect(employee.getId()).toBe("5678");
    });
  
    test("test if we can get the email from the getEmail() method", ()=>{
        expect(employee.getEmail()).toBe("joseph@gmail.com");
    });
  
  test ("test if we can get the role from the getRole() method", ()=> {
      expect(employee.getRole()).toBe("Employee");
  });
  