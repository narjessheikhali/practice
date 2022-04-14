      
const marks = [9, 12 , 18, 20, 2, 16, 3];       

const passed = (marks) =>{
    let sum = 0; 
    for(let i=0; i<marks.lenght; i++){
        sum += marks[i];
     
    }
    
    let ave = (sum/marks.lenght);
    console.log(ave)
    return sum;
}

console.log(marks)
passed(marks)
