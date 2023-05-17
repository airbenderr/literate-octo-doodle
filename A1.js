var stringArray = [];
var size, max;
size = prompt('Enter the size of array:');
for (let i = 0; i < size; i++){
    stringArray[i] = prompt('');
}
max = stringArray[0].length;

for (let i = 1; i < size; i++)
{
    var maxi = stringArray[i].length;
    if(maxi > max)
        {
            max = stringArray[i].length;
        }  
}


for (let i = 0; i < size; i++)
{   
    var str = stringArray[i].length;
    if(str === max)
    {   
        var answer = stringArray[i];
        println(answer);
    }
}
