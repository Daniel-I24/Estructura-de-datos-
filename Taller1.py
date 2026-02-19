# Creacion de listas 
class List:

# Lista unidimensional
    digitos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Lista bidimensional 
    listab = [[1, 2, 3 ], 
          [4, 5, 6], 
          [7, 8, 9]]

# Segundo elemento de la lista unidimensional 
    def mostrar_elemento_2(self):
        print(self.digitos[1])  

# imprime elemento de la segunda fila y la segunda columna
    def mostrar_elemento(self):  
        elemento = self.listab[1][1]
        print(elemento)

# Insercion de elementos en la lista 
    def insertar_elementos(self, digitos):
        digitos.insert(3, "Estructura de datos")
        print(digitos)

# Elimina el elemento 3x3 de la listab 
    def elimina_elementos(self, listab):
        listab.pop()
        print(listab)

# Enceuntra "Estructura de datos" en la lista y devuelva su indice 
    def encontrar_elementos(self, digitos):
        if "Estructura de datos" in digitos:
            indice = digitos.index("Estructura de datos")
            print("Estructuras de datos se encuentra en el indice:", indice)
        else: 
            print("No se encuentra el elemento ")

# Encuentra el numero 5 en listab

    def encontrar_numero(self, listab):
        valor_buscado = 5
        encontrado = False
        for i in range(len(listab)): # Recorre filas
            for j in range(len(listab[i])): # Recorre columnas 
                if listab[i][j] == valor_buscado: # Compara el valor
                    print(f"\nEl numero {valor_buscado} se encuentra en la posicion [{i}][{j}]")
                    encontrado = True
                    break
            if encontrado:
                break
        if not encontrado:
            print(f"\nEl numero {valor_buscado} no se encuentra en la lista.")