
// Fibonacci Series through Recursive method.

function Fibbo(number){ // O(2^n)

    if(number < 2){
        return number;
    }

    return Fibbo(number - 1) + Fibbo(number - 2);
}

// Through Dynamic Prog. method.

function FibboDynamic(){  // O(n)
    
    let cache = {}

    return function fib(number){
        if(number in cache){
            return cache[number];
        }else{

            if(number < 2){
                return number;
            }else{

                cache[n] = fib(number - 1) + fib(number - 2);
                return cache[number];
            }

        }
    }

}

const fib = new FibboDynamic();
console.log("Faster Fibb" + fib(8));