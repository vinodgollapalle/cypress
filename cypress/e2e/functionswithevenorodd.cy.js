describe('OddorEven',()=>
{
it('OddorEven',()=>
{
function evenorodd(number) {
    if (number % 2 === 0) {
         cy.log("Even") ;
    } else {
        cy.log("Odd") ;
    }
}
let s=evenorodd(6)
cy.log(s)
}
)
}
)


