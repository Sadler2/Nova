import T from './types';

const InventoryBag: T.Inventory = {
  identifier: 'PE5t41Iu',
  singleItem: false,
  id: '1',
  category: 'item-bag',
  allowedCategories: [],
  areas: {},
  actionGroup: 'default',
  items: {
    10: {
      uid: 10,
      text: 'Пиво',
      name: 'beer',
      category: 'drink',
      width: 2,
      height: 3,
      x: 4,
      y: 8,
      type: 'inv-item',
      amount: 5,
    },
    11: {
      uid: 11,
      text: 'Пиво',
      name: 'beer',
      category: 'drink',
      width: 2,
      height: 3,
      x: 6,
      y: 8,
      type: 'inv-item',
      amount: 5,
    },
    12: {
      uid: 12,
      text: 'Пиво',
      name: 'beer',
      category: 'drink',
      width: 2,
      height: 3,
      x: 8,
      y: 6,
      type: 'inv-item',
      amount: 5,
    },
  },
  width: 20,
  height: 20,
  weight: 15,
  maxWeight: 40,
  title: 'Рюкзак',
};

const InventoryChief: T.Inventory = {
  identifier: '133uiGj_',
  singleItem: false,
  id: '3',
  category: 'inv',
  allowedCategories: [],
  areas: {},
  actionGroup: 'container',
  items: {
    2: {
      uid: 2,
      text: 'Яблоко',
      name: 'apple',
      category: 'food',
      width: 2,
      height: 2,
      x: 10,
      y: 4,
      type: 'inv-item',
      amount: 2,
    },

    3: {
      uid: 3,
      text: 'Яблоко',
      name: 'apple',
      category: 'food',
      width: 2,
      height: 2,
      x: 8,
      y: 4,
      type: 'inv-item',
      amount: 3,
    },

    23: {
      uid: 23,
      text: 'Пистолет',
      name: 'weapon_pistol',
      category: 'weapon',
      width: 5,
      height: 3,
      x: 12,
      y: 12,
      type: 'inv-item',
      amount: 1,
    },
  },
  width: 20,
  height: 20,
  weight: 20,
  maxWeight: 25,
  title: 'Шкаф',
};

const InventoryPlayer: T.Inventory = {
  identifier: 'PE',
  singleItem: true,
  open: true,
  id: '2',
  category: 'player-inventory',
  allowedCategories: [],
  areas: {
    hand_l: {
      id: 0,
      x: 0,
      y: 0,
    },
    hand_r: {
      id: 1,
      x: 1,
      y: 0,
    },
    head: {
      id: 2,
      x: 0,
      y: 1,
    },
    mask: {
      id: 3,
      x: 1,
      y: 1,
    },
    glasses: {
      id: 4,
      x: 0,
      y: 2,
    },
    ears: {
      id: 5,
      x: 1,
      y: 2,
    },
    neck: {
      id: 6,
      x: 0,
      y: 3,
    },
    back: {
      id: 7,
      x: 1,
      y: 3,
    },
    torso: {
      id: 8,
      x: 0,
      y: 4,
    },
    armor: {
      id: 9,
      x: 1,
      y: 4,
    },
    belt: {
      id: 10,
      x: 0,
      y: 5,
    },
    gloves: {
      id: 11,
      x: 1,
      y: 5,
    },
    accs: {
      id: 12,
      x: 0,
      y: 6,
    },
    pants: {
      id: 13,
      x: 1,
      y: 6,
    },
    shoes: {
      id: 14,
      x: 0,
      y: 7,
    },
    phone: {
      id: 15,
      x: 1,
      y: 7,
    },
  },
  actionGroup: 'player',
  items: {
    1: {
      uid: 1,
      text: 'Рюкзак',
      name: 'bag',
      category: 'bag',
      width: 4,
      height: 4,
      x: 1,
      y: 3,
      type: 'inv-item',
      amount: 1,
      extra: {
        inventory: 'PE5t41Iu',
      },
    },
    8: {
      uid: 8,
      text: 'Яблоко',
      name: 'apple',
      category: 'food',
      width: 2,
      height: 2,
      x: 0,
      y: 0,
      type: 'inv-item',
      amount: 2,
      actions: {
        default: [
          {
            key: 'eat',
            label: 'Съесть',
          },
        ],
      },
    },
  },
  weight: 0.3,
  height: 8,
  width: 2,
  maxWeight: 30,
  title: 'Вы',
};

const InventoryCraft: T.Inventory = {
  identifier: 'craft-inventory-dev',
  singleItem: false,
  id: '4',
  category: 'craft',
  allowedCategories: [],
  areas: {},
  actionGroup: 'default',
  items: {
    4: {
      uid: 4,
      text: 'Яблоко',
      name: 'apple',
      category: 'food',
      width: 2,
      height: 2,
      x: 10,
      y: 4,
      type: 'inv-item',
      amount: 16,
    },
    5: {
      uid: 5,
      text: 'Яблоко',
      name: 'apple',
      category: 'food',
      width: 2,
      height: 2,
      x: 8,
      y: 4,
      type: 'inv-item',
      amount: 30,
    },
    13: {
      uid: 13,
      text: 'Тесто',
      name: 'dough',
      category: 'raw',
      width: 2,
      height: 3,
      x: 6,
      y: 8,
      type: 'inv-item',
      amount: 50,
    },
    14: {
      uid: 14,
      text: 'Пиво',
      name: 'beer',
      category: 'drink',
      width: 2,
      height: 3,
      x: 8,
      y: 6,
      type: 'inv-item',
      amount: 50,
    },
  },
  width: 30,
  height: 26,
  weight: 600,
  maxWeight: 999,
  title: 'плита',
};

const Invs = {
  '1': InventoryBag,
  '2': InventoryPlayer,
  '3': InventoryChief,
  '4': InventoryCraft,
};

export default Invs;
