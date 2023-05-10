var number =30;
while (number <86) {
    console.log(number);
    number++
    if (number > 46) {
        break;
    }
}

var nums= [100,200,300,120,150]
console.log(nums.length);

var element= nums[1];
console.log(element);

nums[2]=140;
console.log(nums);

var position =nums.indexOf(100);
console.log(position);

for(var i = 0; i < nums.length; i+= 1 ){
    var num=nums[i];
    if (num >200) {
        continue;
    }
    console.log(num);
}

