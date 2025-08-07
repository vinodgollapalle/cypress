describe('datatypes',()=>
{
it('arraydatatype',()=>
{
let numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    cy.log("Sum of the numbers is:", sum);
}
}

)
}
)


