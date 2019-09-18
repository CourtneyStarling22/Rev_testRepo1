package example1;

public class Calculator {
	
	int a; //Global variable of object level, instance level
	int b;
	
	public Calculator(String name) {
		System.out.println("Hello "+name);
	}
	
	public Calculator(int a, int b) {
		this.a=a;
		this.b=b;
	}
	
	//*want local value of 'a' assigned to the global variable value of a.
	//this.a refers to the global variable?
	
	public int add() {
		return a+b;
	}

	public int multiply() {
		return a*b;
	}
}
