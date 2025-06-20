import { NextResponse } from "next/server";
import {getDoc,doc} from "firebase/firestore"
import {db} from "@/app/firebase/config"

export async function  GET (response, {params}){
    const {slug} = await params; 
    const docRef = doc(db,"productos",slug);
    const querySnapshot = await getDoc(docRef);
     
    let item = {id:querySnapshot.id, ...querySnapshot.data()};
     
    if(!item){
      item= "no se encontro ningun producto";
    }
     return NextResponse.json(item);
}