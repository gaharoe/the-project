function encrypt(str, calc){
    let result;
    let temp = str;
    for(let x = 0; x < calc; x++){
        temp = Buffer.from(temp).toString('Base64');
    }
    return temp;
}

function decrypt(str, calc){
    let result;
    let temp = str;
    for(let x = 0; x < calc; x++){
        temp = Buffer.from(temp, "base64").toString('ascii');
    }
    return temp;
}

module.exports = {encrypt, decrypt};