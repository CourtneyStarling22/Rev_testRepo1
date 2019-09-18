package example1;

public class CalculatorMain {

	public static void main(String[] args) {
		
		Calculator c=new Calculator("ganesh");
		int a=10;
		int b=20;
		
		Calculator c1=new Calculator(a, b);//pass by value
		System.out.println(c1.add());
		System.out.println(c1.multiply());
	}
//value of x is assigned to a, value of y is assigned to b and 
	//c1 is holding the reference of it
}
