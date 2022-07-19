import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async(req: Request, res: Response) =>{
    const usuarios = await (await Usuario.findAll()).filter( user => user.get('estado') != false);
    res.status(200).json( usuarios )
}

export const getUsuario = async(req: Request, res: Response) =>{
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    return ( usuario ) 
    ? res.status(200).json( usuario ) 
    : res.status(404).json( { msg: 'Usuario no encontrado' } );
}

export const postUsuario = async(req: Request, res: Response) =>{
    const { body } = req;
    
    try {
        const existeEmail = await Usuario.findOne({
            where: { 
                email: body.email
            }
        });

        //Validacion del email unico
        if( existeEmail) return res.status(400).json( { 
            msg: `Ya existe un usuario con el email '${body.email}'` 
        });

        const usuario =  Usuario.build(body);
        await usuario.save();
        res.json( usuario );

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hable con el administrador'});
    }
}

export const putUsuario = async(req: Request, res: Response) =>{
    const { id } = req.params;
    const { body } = req;
    try {

        const usuario = await Usuario.findByPk(id);
        if(!usuario) return res.status(404).json( { msg:`No existe un usuario con el id '${id}'`})

        //Validar que el email coincida
        //if(usuario.get('email') != body.email) return res.status(404).json( { msg: 'Correo invalido'})
        
        await usuario.update(body); //si hay campos que no hay en el modelo, son ignorados
        res.status(200).json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hable con el administrador'});
    }
}
export const deleteUsuario = async(req: Request, res: Response) =>{
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);
    if(!usuario) return res.status(404).json( { msg:`No existe un usuario con el id '${id}'`})

    usuario.update({ estado: false });
    //await usuario.destroy();

    res.status(200).json(usuario)
}