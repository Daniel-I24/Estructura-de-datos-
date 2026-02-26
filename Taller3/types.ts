// Interfaz
export interface Passenger {
  id: string;      // Identificador único  ej: "1708123456789"
  name: string;    // Nombre completo      ej: "Valentina Ríos"
  seat: string;    // Asiento asignado     ej: "14C"
  class: "first" | "business" | "economy"; // Solo estos tres valores
}

// Configuración 
export const CLASS_CFG = {
  first:    { label: "Primera Clase", color: "#C8A96E", icon: "✦" },
  business: { label: "Business",      color: "#7EB8D4", icon: "◈" },
  economy:  { label: "Económica",     color: "#A0C878", icon: "◉" },
} as const;