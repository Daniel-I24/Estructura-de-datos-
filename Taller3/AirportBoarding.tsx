import { useState, useRef, CSSProperties } from "react";
import { Queue } from "./Queue";
import { Passenger, CLASS_CFG } from "./types";

// Crea una cola por cada clase de embarque
const queues = useRef({
  first:    new Queue<Passenger>(),
  business: new Queue<Passenger>(),
  economy:  new Queue<Passenger>(),
});

const [name, setName] = useState("");
const [seat, setSeat] = useState("");
const [cls, setCls] = useState<keyof typeof queues.current>("economy");
const [boarded, setBoarded] = useState<Passenger[]>([]);

// refresh: saca una copia de cada cola para mostrarla en pantalla
const refresh = () =>
  setSnapshot({
    first:    queues.current.first.getAll(),
    business: queues.current.business.getAll(),
    economy:  queues.current.economy.getAll(),
  });

// ENQUEUE: agrega el pasajero al final de su cola
const handleEnqueue = () => {
  if (!name.trim() || !seat.trim()) return;
  queues.current[cls].enqueue({ id: Date.now().toString(), name, seat, class: cls });
  refresh();
  setName(""); setSeat("");
};

// DEQUEUE: aborda el siguiente según prioridad Primera → Business → Económica
const handleDequeue = () => {
  for (const c of ["first", "business", "economy"] as const) {
    if (!queues.current[c].isEmpty()) {
      const p = queues.current[c].dequeue();
      if (p) setBoarded(prev => [p, ...prev]);
      refresh();
      return;
    }
  }
};
const [snapshot, setSnapshot] = useState({
    first: [] as Passenger[],
    business: [] as Passenger[],
    economy: [] as Passenger[],
});
