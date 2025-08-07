describe('loop Numbers',()=>
{
it('loop',()=>
{
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        cy.log(i);
    }
}
}
)
}
)

