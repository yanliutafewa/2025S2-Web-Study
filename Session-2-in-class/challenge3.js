let a = [1,2,3,4,5,6];

a.includes(5);

let b = a.filter((item) => {if (item < 5) return true;});

b;


let c = b.map((item) => {return item*item});

c;
