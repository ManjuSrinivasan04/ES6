const colors=['red','blue','white','green'];
const itms=colors.map(function(colr){
      return '<li>' + colr +'</li>'
});
console.log(itms);
const arrw=colors.map(clr=>'<l1>' + clr + '</l1>');
console.log(arrw);

//rendering colors dynamically
const dym=colors.map(clr=>`<li>${clr}</li>`);
console.log(dym);

