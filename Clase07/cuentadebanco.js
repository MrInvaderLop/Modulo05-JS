/* Formulario para crear una cuenta de bancaria
* Datos que debe llevar:
* Nombre
* RFC
* Monto inicial
* Correo
* Fecha de nacimiento
* Tipo de cuenta
*/

import {z} from "https://cdn.jsdelivr.net/npm/zod@3.25.23/dist/cjs/index.min.js";

const cuentaSchema = z.object({ // Un esquema para validar varias cosas
    nombre: z.string().min(1, "El nombre es obligatorio"),
    rfc: z.string().regex(/^([A-ZÑ&]{3,4}) ?(?:-)? ?([0-9]{2})([0][1-9]|1[0-2])([0-2][0-9]|3[0-1]) ?(?:-)? ?([A-Z\d]{3})$/, "RFC no válido"),
    monto: z.coerce.number().min(0, "El monto debe ser mayor o igual a 0"),
    correo: z.string().email("Correo no válido"),
    fechaNacimiento: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Fecha no válida",
    }),
    tipoCuenta: z.enum(["ahorro", "cheques", "nómina"], {
        errorMap: () => ({ message: "Selecciona un tipo de cuenta válido" }),
    }),
    });

    const form = document.getElementById("cuenta-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

      // Recolectar datos
        const data = Object.fromEntries(new FormData(form).entries());

      // Validar
        const result = cuentaSchema.safeParse(data);

      // Limpiar errores
        document.querySelectorAll(".error").forEach(el => el.textContent = "");

        if (!result.success) {
        result.error.errors.forEach(err => {
            const field = err.path[0];
            const errorElement = document.getElementById(`error-${field}`);
            if (errorElement) {
            errorElement.textContent = err.message;
            }
        });
    } else {
        alert("Cuenta creada con éxito:\n" + JSON.stringify(result.data, null, 2));
        form.reset();
    }
    });
