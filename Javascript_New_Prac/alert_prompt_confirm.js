alert('Enter a value of a');
let a = prompt('Enter a here','56'); 
a = Number.parseInt(a)
alert(`you entered a of type ${typeof a}`);
let write = confirm('Do you want to write it to the Page')
if(write){

    document.write(a);
}
else{
    document.write('Please allow me to write')
}