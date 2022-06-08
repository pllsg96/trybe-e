function minhaIdade() {
  for (let idade = 78; idade <= 100; idade++) {
  }
}

/* 
A declação de variável 'var' vaza o escopo das funções
para resolver este problema o let foi criado para isso, impedir o vazamento das variáveis, para que as variáveis
permaneçam na mesma função, no (if, for e while)
*/

/* 
O const é feito para ser imutável, não é possível realizar
alterações ao const após a sua declaração e atribuição de valor
*/

/* 
A utilização quase sempre deve ser feita por const, fora isso
apenas utilizar o let, e nunca, absolutamente nunca mais 
fazer a utilização do VAR.
*/

minhaIdade();

