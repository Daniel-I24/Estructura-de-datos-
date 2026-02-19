# Maze 

class Maze: 
    def __init__(self):
        self.list = [] 

    def stack(self, element):
        self.list.append(element) 

    def pop(self):
        if not self.list:
            print("La lista esta vacia")
        else:
            return self.list.pop() 
        
    def Top(self):
        if not self.list:
            print("La lista esta vacia")
        else:
            return self.list[-1] 
        
    def is_Empty(self):
        return len(self.list) == 0
    
    def __repr__(self):
        return f"Stack({self.list})"
    