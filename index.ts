import chalk from "chalk";
import inquirer from "inquirer"

// Getting input from the User
inquirer.prompt(
    {
        type: 'list',
        name: 'menu',
        message: 'What action do you want to perform?',
        choices: ['Sum Numbers', 'Check Even or Odd', 'Calculate Area', 'String Reversal', 'Temperature Conversion'],
    }
).then(  //Evaluating Selected Results
    (answers) => {
        if (answers.menu==='Sum Numbers'){
                //Calculating the sum of two numbers
            inquirer.prompt([{
                type:'number',
                name:'firstNumber',
                message:'Enter Your First Number',
            },{
                type:'number',
                name:'secondNumber',
                message:'Enter Your Second Number',
            }]).then(
                (answer)=>{
                    add(answer.firstNumber,answer.secondNumber);
                }
            )
        }

        else if(answers.menu==='Check Even or Odd'){
            inquirer.prompt({
                type:'number',
                name:'num',
                message:'Enter Your Number to check whether it is even or odd: ',
            }).then(
                (answer)=>{
                    checkEvenOrOdd(answer.num);
                }
            )
        }
        
        else if(answers.menu==='Calculate Area'){
            inquirer.prompt([{
                type:'number',
                name:'width',
                message:'Enter the width of the rectangle: ',
            },{
                type:'number',
                name:'height',
                message:'Enter the height of the rectangle: ',
            }]).then(
                (answer)=>{
                    calculateArea(answer.width,answer.height);
                }
            )
        }

        else if(answers.menu==='String Reversal'){
            inquirer.prompt({
                type:'input',
                name:'mes',
                message:'Enter the string to reverse: ',
            }).then(
                (answer)=>{
                    reverseString(answer.mes);
                }
            )
        }

        else if(answers.menu==='Temperature Conversion'){
            inquirer.prompt({
                type:'number',
                name:'celsius',
                message:'Enter the temperature value is celsius: ',
            }).then(
                (answer)=>{
                    convertCelsiusToFahrenheit(answer.celsius);
                }
            )
        }
    }
)

function add(a:number,b:number):void {
    console.log(chalk.blueBright("Sum is : " +String(a+b)));
}

function checkEvenOrOdd(a:number):void {
    if(a%2==0) console.log(chalk.blueBright("Number is even"));
    else console.log(chalk.blueBright("Number is odd"));
}

function calculateArea(width:number,height:number):void {
    console.log(chalk.blueBright("The area of the rectangle is "+String(width*height)));
}

function reverseString(a:string){
    let dummy:string="";
    for (let i=0;i<a.length;i++){
        dummy=dummy+a[a.length-(i+1)];
    }
    console.log(chalk.blueBright("The reversed string is "+dummy));
}

function convertCelsiusToFahrenheit(cels:number) {
    let farh:number=((9/5)*cels)+32;
    console.log(chalk.blueBright("The equivalent Farenheit value is "+String(farh)));
}

export{}