// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
	return x+y; 
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, 
//e somando `5` ao resultado retornado da função.
var somaPlus = soma(5,20) + 5;


// Qual o valor atualizado dessa variável?
30

// Declare uma nova variável, sem valor.
var semvalor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionaValor(){
	semvalor = 10;
	return 'O valor da variável agora é ' + semvalor;
}

// Invoque a função criada acima.
adicionaValor()

// Qual o retorno da função? (Use comentários de bloco).

/* O valor da Variável agora é 10 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function tres(a,b,c){
	if (a == undefined || b == undefined || c == undefined) {
		return ' Preencha todos os valores corretamente!'; 
	}
	else{
		return (a * b * c) + 2;
	}
}

// Invoque a função criada acima, passando só dois números como argumento.

tres(2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

tres(2,2,10)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
	
//42

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/


function argumento(x,y,z){
	if (x != undefined && y == undefined && z == undefined) {
		return  x; 
	}	
	else if (x != undefined && y != undefined && z == undefined) {
		return  (x + y);
	} 	
	else if (x != undefined && y != undefined && z != undefined){
		return  ((x+y)/z);
	}
	else if (x == undefined && y == undefined && z == undefined) {
		return false;
	}
		return null;	
}			 



// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.




//argumento()
//false

//argumento(1)
//1

//argumento(2,2)
//4

//argumento(2,2,2)
//2

