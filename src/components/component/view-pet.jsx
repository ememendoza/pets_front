'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

export function ViewPet() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            alt="Pet Image"
            className="w-full h-auto rounded-lg object-cover"
            height={600}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width={600}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Buddy, el perro más amigable</h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-800 font-medium">Fecha de nacimiento:</p>
              <p className="text-gray-500">01/05/2019</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Edad:</p>
              <p className="text-gray-500">4 años</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Tipo de animal:</p>
              <p className="text-gray-500">Perro</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Género:</p>
              <p className="text-gray-500">Macho</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Tamaño:</p>
              <p className="text-gray-500">Mediano</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Color:</p>
              <p className="text-gray-500">Marrón y blanco</p>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-black">Historia</h2>
            <p className="text-gray-500">
              Buddy es un perro muy amigable y cariñoso que fue rescatado de la calle. Estuvo en un refugio durante
              varios meses, pero ahora está listo para encontrar un hogar permanente. Le encanta jugar, correr y pasar
              tiempo con las personas. Es un compañero ideal para una familia activa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-800 font-medium">Habilidades especiales:</p>
              <p className="text-gray-500">Sabe sentarse, dar la pata y quedarse.</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Nivel de energía:</p>
              <div className="flex items-center">
                <div className="bg-green-500 h-3 w-3/4 rounded-full mr-2" />
                <p>Alto</p>
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Compatibilidad:</p>
              <p>Familias, niños, otros perros</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Estado actual:</p>
              <p className="text-green-500 font-medium">En adopción</p>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Datos médicos</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-800 font-medium">Vacunas:</p>
                <p>Completas</p>
              </div>
              <div>
                <p className="text-gray-800 font-medium">Esterilizado:</p>
                <p>Sí</p>
              </div>
              <div>
                <p className="text-gray-800 font-medium">Historial de hospitalización:</p>
                <p className="text-gray-500">Ninguno</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button className="flex-1 flex items-center text-black" variant="outline" onClick={() => setIsFavorite(!isFavorite)}>
              <StarIcon className="w-4 h-4 mr-2" selected={isFavorite} />
              Agregar a favoritos
            </Button>
            <Button className="flex-1">Adoptar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarIcon({ selected, ...props }) {
  const fillColor = selected ? 'gold' : 'white';

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
