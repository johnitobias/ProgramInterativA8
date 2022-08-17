//ATIVIDADE 1

//criar uma função
//que tenha dois parametros
//a pessoa deve medir mas de 1,40 e menos de 2 metros &&
//se a pessoa medir menos de 1,40 deve vir acompanhada
//menor que 1,20 não pode subir

function podesubir(altura, acompanhada) { 
    altura,
    acompanhada

    if (altura >= 1.40 && altura < 2)
        return true;
    else if (altura >= 1.20 && altura < 1.40 && acompanhada)
        return true
     else altura < 1.20
        return false 

}
console.log(podesubir(1.19, true))

//ATIVIDADE 2

function podeSubirComTexto(height, acompanhada) {
    if (height >= 1.40 && height < 2) {
        console.log('Acesso autorizado');

    } else if (height >= 1.20 && height < 1.40 && acompanhada) {
        console.log('Acesso autorizado somente com acompanhante');

    } else {
        height < 1.20;
        console.log('Acesso negado!');
    }
}
podeSubirComTexto(1.19, true);