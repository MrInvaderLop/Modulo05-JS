import { map, transformer } from 'zod'
import{z} from './node/node_modules/zod/lib/index.mjs'

const form = document.getElementById('userForm')
const output = document.getElementById('output')

const schema = z.object({
    name: z.string().min(1, 'El nombre es requerido'), //Método de validación de datos: que tenga al menos un caracter (min(1, ...))
    age: z.string ()
        .transform((val) => parseInt(val, 10))
        .refine((age) => !isNaN(age) && age >= 18, {
            message: 'La edad debe ser mayor o igual a 18'
        }),
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        age: formData.get('age')
    }

    const result = schema.safeParse(data) //Evaluamos nuestros datos, comparandolos con nuestro esquema y almacenamos en esta variable

    if(result.success){
        output.textContent = `Data Validada ${JSON.stringify(result, data, null, 2)}`
    } else {
        output.textContent = `Errores: ${result.error.issues
            .map((error) => `-${error.message}`).join(`\n`)
        }`
    }
})

// npx serve en la terminal para activar un servidor como Live Server
// CTRL + C para detener el proceso