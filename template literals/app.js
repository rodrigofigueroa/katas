const tmpl = `template one
template two`

const foo = () => 'x'
const tmpl2 = `template ${ 2 + 2 }  ${foo() ? 'x' : ':C'}`

console.log(tmpl2)
