use colored::*;

fn main() {
    const TIME : u32 = 3999; //seconds

    let x : u32 = 10;
    println!("Before Shadowing {}",x);

    if true {
	let x : f64 = (TIME*x).into();
	println!("After Shadowing {}",x);
    }

    println!("After Shadow Scope {}",x);

    let heart_eyed_cat: char = '😻';
    println!("{}",heart_eyed_cat);

    let tup : (u32, [char; 7] , f64) = (1201, ['A','b','h','i','j','i','t'], 3.93);

    let (x,y,z) = tup;
    println!("Tuple index 1 = {:?}",tup.1);
    println!("Tuple index 1 = {:?}",y);


    let arr1: [u32;5] = [1,2,3,4,5];
    let arr2 = [4; 10];

    println!("Array 1: {}",arr1[0]);
    println!("Array 2: {}",arr2[1]);


    println!("{}", "Using Expressions!".red());
    let x:u32 = {
	let x:u32 = 10;
	x*x
    };
    println!("Evaluated Value: {}",x);


    let mut counter:u64 = 0;
    let mut i:u64 = 0;

    let sum = loop {
	counter+=1;
	if i==3 {
	    break counter
	}
	i+=1;
    };
    println!("Evaluated sum: {}",sum);

}
