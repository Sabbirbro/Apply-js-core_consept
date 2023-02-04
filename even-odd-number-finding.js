function even_odd(numbers){
    const reminder = numbers % 2;
    if( reminder === 0 ){
        console.log('it is a even number')
    }
    else{
        console.log('it is a odd number')
    }
}

even_odd(303);
even_odd(200);