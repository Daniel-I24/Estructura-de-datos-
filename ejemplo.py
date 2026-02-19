class pila:

    def __init__(self):
        self._datos = []          # lista interna que guarda los elementos

    def apilar(self, elemento):
        """Agrega un elemento al tope de la pila."""
        self._datos.append(elemento)

    def desapilar(self):
        """Elimina y devuelve el elemento del tope. Error si está vacía."""
        if self.esta_vacia():
            raise IndexError("No se puede desapilar: la pila está vacía.")
        return self._datos.pop()

    def tope(self):
        """Devuelve el tope sin eliminarlo."""
        if self.esta_vacia():
            raise IndexError("La pila está vacía.")
        return self._datos[-1]

    def esta_vacia(self):
        """True si la pila no tiene elementos."""
        return len(self._datos) == 0

    def tamaño(self):
        """Número de elementos en la pila."""
        return len(self._datos)

    def __repr__(self):
        return f"Pila({self._datos})"
    

    if semilla is not None:
        random.seed(semilla)