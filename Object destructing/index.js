let address={
    street : '',
    city :'',
    country:''
};

/*const street=address.street;
const city=address.city;
const country=address.country;*/

//instead of above three lines
const{street,city,country}=address;
const{street : st}=address//alias name to street

