import { type SharedData } from '@/types';
import { Head, usePage, Link } from '@inertiajs/react';

import { useState } from "react";

import Work from '@/components/Work';
import HeaderNav from '@/components/Header/nav';
import Login from './auth/login';
import PortfolioGrid from '@/components/Porfolio';
import { link } from 'fs';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [open, setOpen] = useState(false);
    const items = [
  {
    image: "/contenido/000.CON-TRABAJO/ARTESFINALES/salon001.jpg",
    title: "CON-TRABAJO -2023/2024",
    link :'con-trabajo',
    aspectRatio: "803/487",
  },
  {
    image: "/contenido/AJOLOTE/mejor-frame-2.jpg",
    title: "AJOLOTE - 2023",
    link: "#",
    aspectRatio: "1117/488",
  },
  {
    image: "/contenido/000.CON-TRABAJO/DISEÑO DE PERSONAJES/amparin_001.jpg",
    title: "CHARACTER DESIGN - 2023",
    link: "#",
    aspectRatio: "625/558",
  },
  {
    image: "/contenido/003.SORTILEGIOS MUESLEY/001.jpg",
    title: "SORTILEGIOS MUESLEY - 2023",
    link: "#",
    aspectRatio: "640/480",
  },
  {
    image: "/contenido/LaEspera/007.jpg.png",
    title: "LA ESPERA -2024",
    link: "la-espera",
    aspectRatio: "1280/720",
  },
  {
    image: "/contenido/cartaamihijo/010.png",
    title: "CARTA A MI HIJO",
    link: "#",
    aspectRatio: "800/600",
  },
  {
    image: "/contenido/",
    title: "FASHION DRAWING-2025",
    link: "#",
    aspectRatio: "640/480",
  },
  {
    image: "/contenido/LaEspera/007.jpg.png",
    title: "NATURAL DRAWING-2022",
    link: "#",
    aspectRatio: "1280/720",
  },
];

     
    return (
        
        <>
                    <Head title="LADELIKADA" />
                    <HeaderNav/>
                    <Work/>
                    <PortfolioGrid items={items} />
        </>
    );
}
