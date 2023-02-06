const readline = require('readline');
const validator = require('validator');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("siapa nama kamu? " , function(param){
    nama = param;
    rl.question(" email kamu? " , function(param){
        if (validator.isEmail(param)  == true) {
            email = param    
            rl.question(" nomer hp? ", function(param){
                if (validator.isMobilePhone(param,'id-ID')  == true) {
                    nomer = param
                    console.log(
                    'Nama : '+nama,
                    'Email : '+email,
                    'Nomer Hp: '+nomer
                    );
                    rl.close();
                }else{
                    console.log('format number phone harus indo');
                    rl.close()
                }   
            });
        }else{
            console.log('format email harus sesuai');
            rl.close()
        }
    });
});
