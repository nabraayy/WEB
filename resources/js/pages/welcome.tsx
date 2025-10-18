import { type SharedData } from '@/types';
import { Head, usePage, Link } from '@inertiajs/react';

import { useState } from "react";

import Work from '@/components/Work';
import HeaderNav from '@/components/Header/nav';
import Login from './auth/login';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [open, setOpen] = useState(false);
    return (
        
        <>
            
               
                    <Head title="LADELIKADA" />
                    <HeaderNav/>
                    
                    <Work/>
               
            
        </>
    );
}
