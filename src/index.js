function Animal(nome, raca, idade, cor) {

    this.nome = nome;
    this.raca = raca;
    this.idade = idade;
    this.cor = cor;

    this.andar = function() {

        console.log(this.nome + " está andando");
    }
    this.dormir = function() {

        console.log(this.nome + " dormiu");
    }
}

function Cachorro(nome, raca, idade, cor) {

    Animal.call(this, nome, raca, idade, cor);

    this.latir = function() {

        console.log(this.nome + " está latindo");
    }
}

function Gato(nome, raca, idade, cor) {

    Animal.call(this, nome, raca, idade, cor);

    this.miar = function() {

        console.log(this.nome + " está miando");
    }
}

const dog = new Cachorro("Kilate", "SRD", 7, "branca");

console.log("Qual o nome do cachorro: " + dog.nome);
console.log("Qual a raça do cachorro: " + dog.raca);
console.log("Qual a idade do cachorro: " + dog.idade + " anos.");
console.log("Qual a cor do cachorro: " + dog.cor);

dog.latir();
dog.andar();
dog.dormir();

console.log("\n -------- \n");

const cat = new Gato("Fubá mimoso", "SRD", 2, "laranja");

console.log("Qual o nome do gato: " + cat.nome);
console.log("Qual a raça do gato: " + cat.raca);
console.log("Qual a idade do gato: " + cat.idade + " anos.");
console.log("Qual a cor do gato: " + cat.cor);

cat.miar();
cat.andar();
cat.dormir();

console.log("\n -------- \n");

const cat2 = new Gato("Bituca", "Siamês", 1, "laranja");

console.log("Qual o nome do gato: " + cat2.nome);
console.log("Qual a raça do gato: " + cat2.raca);
console.log("Qual a idade do gato: " + cat2.idade + " ano.");
console.log("Qual a cor do gato: " + cat2.cor);

cat2.miar();
cat2.andar();
cat2.dormir();

