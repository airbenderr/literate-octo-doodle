var weightArray = [];
var weight1, weight2;
var size = prompt('Enter the total number of people:');

for (let i = 0; i < size; i++)
{   
    weightArray[i] = prompt('');
}   

weight1 = 0;
weight2 = 0;

for (let i = 0; i < size; i+=2)
{   
    weight1 += Number(weightArray[i]);
}



for (let i = 1; i < size; i+=2)
{
    weight2 += Number(weightArray[i]);
}

println(weight1);
println(weight2);