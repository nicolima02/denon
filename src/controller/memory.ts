import {writeFileStr} from "https://deno.land/std@0.55.0/fs/write_file_str.ts";
import {readFileStr} from "https://deno.land/std@0.55.0/fs/read_file_str.ts";
import {existsSync} from "https://deno.land/std/fs/mod.ts";



class Memoria{
    async save(obj){
        const pathFound = existsSync('colores.txt')
        if (pathFound === false){
            await writeFileStr('colores.txt', JSON.stringify([obj]))
        }else{
            let contenido = await readFileStr('colores.txt')
            if(contenido === ""){
                const lista = [obj]
                await writeFileStr('colores.txt', JSON.stringify(lista))
            }else{
                contenido = JSON.parse(contenido)
                contenido.push(obj)
                await writeFileStr('colores.txt', JSON.stringify(contenido))
                
            } 
        }
        
    }  

    async getAll(){
        return await readFileStr('colores.txt')       
    }
}

export {Memoria}
