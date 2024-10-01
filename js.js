let m=prompt("Enter the first Number");
let n=prompt("Enter the Second Number");
if(m>n){
    alert("0");
}
else{
    let sum=0;
    for(let i=m;i<=n;i++){
    sum+=i*i*i;
    }
    alert(sum);
}
