//reduce関数

const str = 'animation';
const strArry = str.split('');

function tag(accu, curr){
    return `${accu}<${curr}>`;
}

function reduce(arry,callback,defaultvalue){
    let accu = defaultValue;
    for(let i=0; i< arry.length; i++){
        let curr = arry[i];
        callback(accu, curr);
    }

    return accu;
}

const result = reduce(strArry, tag, "");
console.log(result);
