import inquirer from "inquirer";
import { promptNuevoGasto } from "./gastoPrompt.js";
import { save, get } from "./filesMethods.js";

const main = async() => {
    let run = true
    while(run){
        const action = await inquirer.prompt([
            {
                type: "list",
                name: "chosen",
                message: "Elija una opción: ",
                choices: [
                    {
                        value: 1, name: "Ingresar nuevo gasto"
                    },
                    {
                        value: 2, name: "Ver todos los gastos"
                    },
                    {
                        value: 3, name: "Salir"
                    }
                ]
            }
        ])

        switch (action.chosen) {
            case 1:
                await crearNuevoGasto();
                break;
            case 2:
                await obtenerGastos();
                break;
            case 3: 
                run = false;
                break;
            default:
                run = false;
                break;
        }
    }
}

main();

async function crearNuevoGasto(){

    const nuevoGasto = await promptNuevoGasto();

    const gastosActuales = await get("gastos.json")

    gastosActuales.push(nuevoGasto)

    await save("gastos.json", gastosActuales)
}

async function obtenerGastos(){
    const gastosActuales = await get("gastos.json")

    console.log(gastosActuales)
}