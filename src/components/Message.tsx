"use client";

import { useEffect, useState } from "react";

export default function Message() {
  const [message, setMessage] = useState("Cargando...");
  useEffect(() => {
    fetch("/api/message")
      .then((r) => r.json())
      .then((d) => setMessage(d.message ?? "Sin mensaje"))
      .catch(() => setMessage("Error al contactar el backend"));
  }, []);
  return <p className="text-sm">{message}</p>;
}


