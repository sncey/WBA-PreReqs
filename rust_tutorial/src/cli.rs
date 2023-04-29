use std::env;

pub fn run(){
    let args: Vec<String> = env::args().collect();
    println!("Args: {:?}", args);


    let command = args[1].clone();
    println!("Command: {:?}", command);

    let name = "Jada";
    let status = "100%";

    if command == "hi"{
        println!("Hi, {}", name);
    } else if command == "status" {
        println!("Status is {}", status);
    } else {
        println!("That is not a valid command");
        
    }



    


}