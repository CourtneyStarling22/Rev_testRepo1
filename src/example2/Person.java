package example2;

public class Person {

	int id;
	String name;
	int age;
	String email;
	
	public Person() {
		
	}
//right click-- source--generate constructor using fields
	public Person(int id, String name, int age, String email) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.email = email;
	}
	
}
