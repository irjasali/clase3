
var resultado = 0;
var opcion = 5;
// parseInt(prompt("1.- Tablas por ciclos for | 2.-Tablas por do/while Elija Opción"));


switch (opcion) {
    case 1: {
        console.log("Realizando tablas por medio de For")
        for (let nt = 1; nt <= 10; nt++) {
            console.log("****Tabla del número: " + nt + "*******");
            for (let tabla = 1; tabla <= 10; tabla++) {
                resultado = nt * tabla;
                console.log(nt + " X " + tabla + " = " + resultado);
            }

        }
    } break;
    case 2: {
        console.log("Realizando tablas por medio de While");
        var nt = 1, tabla = 1, resultado = 0;
        do {
            console.log("****Tabla del número: " + tabla + "*******");
            while (nt <= 10) {
                resultado = nt * tabla;
                console.log(nt + " X " + tabla + " = " + resultado);
                nt++;
            }
            tabla++;
            resultado = 0;
            nt = 1;

        } while (tabla <= 10)
    }break;

    default: {
        console.log("Opción no valida"); 
      }break;

    }
