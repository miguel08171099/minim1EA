import { Request, Response } from "express";
import Sede from "../models/Sede";

/* ---- EXEMPLE DE FUNCIÓ ---
export async function createUser (req: Request, res: Response): Promise<Response> {

    const{ username, password} = req.body;

    const newUser ={
        username: username,
        password: password
    };

    const user= new User (newUser);// creem l'objecte de MongoDB
    await user.save()//guardem la foto amb mongoose

    return res.json({
        message : 'User correctly uploaded'
    })
}*/
export async function createSede(  req: Request,  res: Response): Promise<Response> {
    const { nombreSede, localizacion, poblacion } = req.body;
  
    const newSede = {
      nombreSede: nombreSede,
      localizacion: localizacion,
      poblacion: poblacion
    };
    try{
  
    const sede = new Sede(newSede); // creem l'objecte de MongoDB
    await sede.save(); //guardem l'usuari a Mongo DB
  
    return res.json({
      code: '200',
      message: "User correctly uploaded",
      nombreSede: sede.nombreSede
    });
  }
  catch{
    //agafem possibles errors de la bbdd
    return res.json({
      code: '505',
      message: "Server Down",
    });
  
  
  }
  }


  export async function getSedes(req: Request, res: Response): Promise<Response> {
    try{
    const Sedes = await Sede.find();
    return res.json({
      code: '200',
      message: 'List of Sedes',
      sedesList: Sedes
    }
      );
    }
    catch{
      return res.json({
        code: '500',
        message: 'Server Down or BBDD broken',
        sedesList: null
      }
        );
    }
  }

  export async function updateSede( req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {nombreSede, localizacion, poblacion} = req.body;
  
    const updatedSede = await Sede.findByIdAndUpdate(
      id,
      {
        nombreSede, 
        localizacion, 
        poblacion},
      { new: true }
    );
    return res.json({
      message: "successfully updated",
      updatedSede,
    });
  }

  export async function getSede(req: Request, res: Response): Promise<Response> {
    try{
    const sede = await Sede.findById(req.params.id);
    return res.json({
      code: '200',
      message: 'User Found',
      sede: sede});
    }
    catch{
      return res.json({
        code: '500',
        message: 'Server Down or BBDD error',
        sede: null});
      }
  
  }