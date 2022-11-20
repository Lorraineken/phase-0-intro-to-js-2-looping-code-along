// Code your solutions in this file

const names=["Guadalupe", "Ollie", "Aki"];
let i=0;
const newNames = [];
function writeCards(names,eventName='surprise')
{
for(i=0;i<names.length;i++)
{
newNames.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)

}
return newNames;
}

writeCards(names);

let count=11;

function countDown(count){
while(count>=0){
    console.log(count);
    count --;
}
}

countDown(count)

