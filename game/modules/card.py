class Card:
    def __init__(self, type, life, attack, defense, stealth):
        self.type = type
        self.life = life
        self.attack = attack
        self.defense = defense
        self.stealth = stealth
        self.curr = None

        if type == 'commander':
            self.hp = 15
        elif type == 'mercenary':
            self.hp = 10

    def select_move(self, move):
        self.curr = move

    def get_type(self):
        return self.type

    def get_life(self):
        return self.life
    
    def get_move(self):
        return self.curr

    def get_attack(self):
        return self.attack

    def get_defense(self):
        return self.defense
    
    def get_stealth(self):
        return self.stealth

    def get_hp(self):
        return self.hp