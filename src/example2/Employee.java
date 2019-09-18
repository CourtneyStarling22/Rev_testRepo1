package example2;

public class Employee {
	int id;
	String name;
	int age;
	String city;
	
	public Employee() {
		// TODO Auto-generated constructor stub
		//generated using ctrl space
	}
	
	public Employee(int id, String name) {
		this.id=id;
		this.name=name;
	}
	
	public Employee(int id,String name,int age,String city) {
		this(id,name);
		this.age=age;
		this.city=city;
	}
		
	//constructor chaining. You can chain one constructor to another
	//constructor but only in the first line. Locally within the class.
	//can do multiple too?	
	public void printEmployee() {
	//this key word is not needed here, but its ok.
		System.out.println("Id = "+this.id);
		System.out.println("Name = "+name);
		System.out.println("Age = "+age);
		System.out.println("City = "+city);
	}


}
