//A gas station wants to determine which of their products is the preference of their customers. 
// Write a program to read the type of fuel supplied (coded as follows: 1. Alcohol 2. Gasoline 3. Diesel 4. End).
//  If you enter an invalid code (outside the range of 1 to 4) a new code must be requested. The program will end when the inserted code is the number 4.

//Input
//The input contains only integer and positive values.

//Output
//It should be written the message: "MUITO OBRIGADO" and the amount of customers who fueled each fuel type, as an example.

import React, { useState } from 'react';

function RastreadorCombustivel() {
    const [inputAlcool, setInputAlcool] = useState('');
    const [totalAlcool, setTotalAlcool] = useState(0);

    const [inputGasolina, setInputGasolina] = useState('');
    const [totalGasolina, setTotalGasolina] = useState(0);

    const [inputDiesel, setInputDiesel] = useState('');
    const [totalDiesel, setTotalDiesel] = useState(0);

    function venderAlcool() {
        setTotalAlcool(totalAlcool + Number(inputAlcool));
        setInputAlcool(''); // Limpa após vender
    }

    function venderGasolina() {
        setTotalGasolina(totalGasolina + Number(inputGasolina));
        setInputGasolina(''); 
    }

    function venderDiesel() {
        setTotalDiesel(totalDiesel + Number(inputDiesel));
        setInputDiesel(''); 
    }

    const totalGeral = totalAlcool + totalGasolina + totalDiesel;

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Despesas de Combustível</h2>
            
            <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Combustível</th>
                        <th>Adicionar Gasto (L)</th>
                        <th>Ação</th>
                        <th>Quantidade Abastecida (L)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Álcool</td>
                        <td>
                            <input 
                                type="number" 
                                placeholder="0,0 L" 
                                value={inputAlcool}
                                onChange={(e) => setInputAlcool(e.target.value)}
                            />
                        </td>
                        <td><button onClick={venderAlcool}>+ Adicionar</button></td>
                        <td><strong>{totalAlcool} L</strong></td>
                    </tr>

                    <tr>
                        <td>Gasolina</td>
                        <td>
                            <input 
                                type="number" 
                                placeholder="0,0 L" 
                                value={inputGasolina}
                                onChange={(e) => setInputGasolina(e.target.value)}
                            />
                        </td>
                        <td><button onClick={venderGasolina}>+ Adicionar</button></td>
                        <td><strong>{totalGasolina} L</strong></td>
                    </tr>

                    <tr>
                        <td>Diesel</td>
                        <td>
                            <input 
                                type="number" 
                                placeholder="0,0 L" 
                                value={inputDiesel}
                                onChange={(e) => setInputDiesel(e.target.value)}
                            />
                        </td>
                        <td><button onClick={venderDiesel}>+ Adicionar</button></td>
                        <td><strong>{totalDiesel} L</strong></td>
                    </tr>
                </tbody>
            </table>

            <h3 style={{ textAlign: 'center', marginTop: '20px' }}>
                TOTAL GERAL: {totalGeral} L
            </h3>
        </div>
    );
//</tr> (Table Row = Linha da Tabela)
//</tbody> (Table Body = Corpo da Tabela)
//</table> (A Tabela)
//<td> significa "Table Data"

}

export default RastreadorCombustivel;