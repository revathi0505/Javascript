let firstname="James";
let secondname='John';
let fullname=firstname+secondname;
let fullname1=firstname.concat(secondname);
fullname1+="very good";
console.log(fullname1);

//two integers m and n calculate sum of cubes of integers from m to n.if m>n return 0  otherwise print the correct message//
//test case1:m=2,n=4,test case2:m=5,n=5,test case3://

let m=2,n=4,a=0;
if(m>n){
    return 0;
}
else{
    for(i=m;i<=n;i++){
        a =a +i*i*i;
        console.log(a);
    }
}
let m1=2,n1=4,a1=0;
if(m>n){
    alert("0");
}
else{
    for(i=m;i<=n;i++){
        a =a +i*i*i;
        alert(a);
    }
}
