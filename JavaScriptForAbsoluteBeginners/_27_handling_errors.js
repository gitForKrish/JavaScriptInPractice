/* let a = 7 * undefined / 'anything';
console.log(a);

function beforeTryCatch(){
    let a = undefined;
    console.log(a.b);   // TypeError: Cannot read property 'b' of undefined
    console.log('If exception occurs, you\'ll not able to see this line');
} */

//BeforeTryCatch();

/* function afterTryCatch(){
    try {
        let a = undefined;
        console.log(a.b);   // TypeError: Cannot read property 'b' of undefined
        console.log('If exception occurs, you\'ll not able to see this line');
    } catch (error) {
        console.log('I caught an exception -> ' + error.message);
    }
    finally {
        console.log('This will execute no matter what.');
    }
    console.log('I am still running...'); 
}
afterTryCatch(); */

function performCalculation(obj){
    if(!obj.hasOwnProperty('b')){
        throw new Error('Object property is missing...');
    }
    return obj.b;
}

function higherLevelCalculation(){
    let obj = {};
    let value = 0 ;
    try {
        console.log(performCalculation(obj));
    } catch (error) {
        console.log(error.message);
    }

    if(!value){
        obj = {'b': 200};
        try {
            console.log(performCalculation(obj));
        } catch (error) {
            console.log(error.message);
            console.log('Retry is failed...');
        }
    }
}

higherLevelCalculation();