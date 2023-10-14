import inquirer from "inquirer";

export async function promptNuevoGasto(){
    return await inquirer.prompt([
        {
            type: "imput",
            name: "monto",
            message: "Monto:"
        },
        {
            type: "input",
            name: "descripcion",
            message: "Descripción:"
        },
        {
            type: "list",
            name: "categoria",
            message: "Categoria:",
            choices: [
                {
                    value: "Comida", name: "Comida"
                },
                {
                    value: "Servicios", name: "Servicios"
                },
                {
                    value: "Transporte", name: "Transporte"
                },
                {
                    value: "Salud", name: "Salud"
                },
                {
                    value: "Entretenimiento", name: "Entretenimiento"
                },
                {
                    value: "Otros", name: "Otros"
                }
            ]
        }
        
    ])
}