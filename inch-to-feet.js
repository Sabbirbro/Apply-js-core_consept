// const my_inch = 144;
// const my_hight = my_inch / 12;
// console.log('my real hight is:',my_hight);

function Inch_Feet(inch)
{
    const feet = inch / 12;
    return feet;
}

const dada_inch = 144;
const dada_feet = Inch_Feet(dada_inch);
console.log(dada_feet);