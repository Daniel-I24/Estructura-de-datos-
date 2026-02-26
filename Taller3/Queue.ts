export class Queue<T> {

  // private: solo accesible dentro de la clase (encapsulamiento)
  private items: T[] = [];

  // Agrega un elemento al FINAL de la cola
  enqueue(item: T): void {
    this.items.push(item);
  }

  // Elimina y retorna el elemento del FRENTE de la cola
  dequeue(): T | null {
    return this.items.shift() ?? null;
  }

  // Retorna el primer elemento sin eliminarlo
  front(): T | null {
    return this.items[0] ?? null;
  }

  // Retorna el último elemento sin eliminarlo
  rear(): T | null {
    return this.items[this.items.length - 1] ?? null;
  }

  // Retorna cuántos elementos hay en la cola
  size(): number {
    return this.items.length;
  }

  // Retorna true si la cola no tiene elementos
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Retorna una copia del arreglo (no modifica la cola original)
  getAll(): T[] {
    return [...this.items];
  }
}