import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importar rutas
import { Persona } from "../model/Persona";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // contructor a llamar
  constructor(private http: HttpClient) { }
  Url = 'http://localhost:4040/personas';
  getPersona(){
    return this.http.get<Persona[]>(this.Url);
  }
  //metodo para crear persona
  createPersona(persona:Persona){
      return this.http.post<Persona>(this.Url,persona);
  }
  // cargar id del formulario
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  //metodo de actualizar datos
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }
  //eliminar
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }
}
