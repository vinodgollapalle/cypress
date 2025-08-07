describe('variabledeclaration',()=>
{
it('variablelet',()=>
{
let b = 2;   
b = 3;       
cy.log(b); 
}
)

it('variableconst',()=>
{
const c = 3;
c = 4; //throws Error 
}
)
}

)


