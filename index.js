document.addEventListener("DOMContentLoaded", () => {
    const retirar = document.getElementById("retirar");
    const depositar = document.getElementById("depositar");
    const importe = document.getElementById("import");
    const input = document.getElementById("input");
    const saldoDisplay = document.getElementById("saldo");

    let saldo = 1000;

    retirar.addEventListener("click", () => {
        const cantidad = parseFloat(input.value);

        if (!isNaN(cantidad) || saldo > 0 || cantidad<=0) {
            if (saldo >= cantidad) {
                saldo -= cantidad;
                actulizarSaldo();
                importe.textContent = `Retirado: ${cantidad}`;
            } else {
                importe.textContent = `No hay saldo suficiente para retirar.`;
            }
        } else {
            console.log("Ingrese un valor válido");
        }
    });

    depositar.addEventListener("click",()=>{
        const cantidad = parseFloat(input.value);

        if (!isNaN(cantidad) || cantidad >0) {
            saldo += cantidad;
            actulizarSaldo();
            importe.textContent = `Ingresado: ${cantidad}`;   
        } else {
            console.log("Ingrese un valor válido");
        }
    });

    const actulizarSaldo = () =>{
        saldoDisplay.textContent = `Saldo: ${saldo}`;
    }


});