class MyLinkedList:
    def __init__(self):
        self.head = None
        self.length = 0

    def get(self, index):
        i = 0
        node = self.head

        while node:
            if index == i:
                return node.get("value")
            node = node.get("next")
            i = i + 1

        return -1

    def addAtHead(self, val):
        new_node = { "value": val, "next": self.head }
        self.head = new_node
        self.length = self.length + 1

    def addAtTail(self, val):
        node = self.head
        while node.get("next"):
            node = node.get("next")
        new_node = { "value": val, "next": None }
        node.update({ "next": new_node })
        self.length = self.length + 1

    def addAtIndex(self, index, val):
        if index == 0:
            return self.addAtHead(val)
        if index == self.length:
            return self.addAtTail(val)

        i = 0
        node = prev_node = self.head
        while node:
            # find correct position
            if index == i:
                new_node = { "value": val, "next": prev_node.get("next") }
                prev_node.update({ "next": new_node })
                self.length = self.length + 1
                return None
            prev_node = node
            node = node.get("next")
            i = i + 1

    def deleteAtIndex(self, index):
        if index == 0:
            self.head = self.head.get("next")

        i = 0
        node = prev_node = self.head
        while node:
            if index == i:
                prev_node.update({ "next": node.get("next") })
                self.length = self.length - 1
                return None
            prev_node = node
            node = node.get("next")
            i = i + 1

        
            
# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)
