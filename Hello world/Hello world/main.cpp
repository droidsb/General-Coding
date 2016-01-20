//
//  main.cpp
//  Hello world
//
//  Created by Seth Baird on 1/19/16.
//  Copyright © 2016 Seth Baird. All rights reserved.
//

#include <iostream>
#include <string>

int main(int argc, const char * argv[]) {
    long seed = std::time(nullptr);
    std::srand(seed);
    int value = std::rand()%100;
    int geuss = 0;
    while (value != geuss){
        std::cout << "Give me a number: ";
        std::string geussstring;
        getline(std::cin, geussstring);
        geuss = std::stoi(geussstring);
        if(geuss<value){
            std::cout << "to low, ";
        }
        
        else if(geuss>value){
            std::cout << "to high, ";
        }
        else{
            std::cout << "You got it! ";
        }
    }
    
    
    return 0;
}
