let name=prompt("Введите свое имя: "); let surname=prompt("Введите свою фамилия: ");
let upname=name.toUpperCase(); let upsurname=surname.toUpperCase();
let standartusername=upname.substr(1); let normalsurname=upsurname.substr(1);
standartusername=standartusername.toLowerCase(); normalsurname=normalsurname.toLowerCase();
let n_surname=upsurname[0]; let n_name=upname[0];
let last_name=n_name+standartusername; let last_surname=n_surname+normalsurname;
if(last_name==name&&last_surname==surname)
{alert(name+" "+surname+"    "+"Вид имени и фамилии доступный.");}
else{if(last_name==name&&last_surname!=surname) {alert(name+" "+last_surname+"    "+"Вид имени доступный. Вид фамилии преведён в норму.");}
else{if(last_name!=name&&last_surname==surname) {alert(last_name+" "+surname+"    "+"Вид имени переменен в стандартный. Вид фамилии доступный.");}
else{alert(last_name+" "+last_surname+"     "+"Виды имени и фамилии переменен в норму.");}};}