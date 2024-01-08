"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("dd5f202f-c96a-4dc8-9a3d-8cd0fdf22205");
    }, [])

    return null;
}