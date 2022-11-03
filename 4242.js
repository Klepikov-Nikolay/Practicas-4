console.log("Задание 1")
let pass = prompt("Reggy Пароль:" )
if ( pass.length > 4 && ( pass.includes('_') || pass.includes('-') ) )
{console.log("Hard Пароль")}
else
{console.log("Easy Пароль")}