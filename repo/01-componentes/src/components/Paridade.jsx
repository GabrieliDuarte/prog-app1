
function Paridade() {
    // sq2-4
    function calcularParidade(){
        let numero = Number(prompt("Digite o número:"))
        if(numero % 2 == 0){  //"Resto da Divisão".
            alert("É par!!!! ihuuuuu 🥳 ")   //Colocando emojis No Windows: Aperte a tecla Windows + .
        }else{
            alert("Ímpar... 🏴‍☠️💀☠️")
        }
    }
    return (
        <div>
            <h2>Par ou ímpar?</h2>
            <button onClick={calcularParidade}>Paridade</button>
        </div>
    )
}

export default Paridade   
