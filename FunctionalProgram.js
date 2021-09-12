/**
 * Masking of any card number with modularity approach
 */
maskedNumbers=(number, type)=>{
    if(type==='Aadhar'){
        return number.substring(0, 10)+number.substring(10).replace(/./g, '*')
    }
}
maskedNumbers('4009 4556 8990', 'Aadhar');


/**
 * Circle Permimeter, Circumference, diametern calculation with functional programming
 */
let radius = [2,5,4,7,8]
const area = function(radius){
    return 2* Math.PI*radius*radius
}
const circumference=function(radius){
    return 2*Math.PI*radius
}
const diameter=function(radius){
    return Math.PI*radius*radius;
}
calculate = (radius, logic)=>{
    let output=[]
    for(let i=0;i<radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}
calculate(radius, area);
calculate(radius,circumference);
calculate(radius,diameter);



/**
 * Javascript render blocking and critical blocking
 */

/***
 * Definition : Javascript critical blocking relate to when javascript files are added into head section. 
 * 
 * 
 * 
 * 
 */




