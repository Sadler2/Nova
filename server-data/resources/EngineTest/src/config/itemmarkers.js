import { Vector3 } from '@nova/engine-lib/shared';

const Config = {};
Config.Locale = 'ru';

Config.Zones = [
    {
        coords: new Vector3(1422.74, 3851.65, 31.78),
        Item: { name: "fish", amount: 1 },
        Interval: 10,
        Blip: 68,
        Notification: "чтобы поймать рыбу",
        Label: "Рыбалка",
    },
    {
        coords: new Vector3(1501.65, 3924.22, 31.94),
        Item: { name: "seaweeds", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Водоросли",
        Label: "Водоросли",
    },

    {
        coords: new Vector3(1103.71, -2010.64, 30.87),
        Item: { name: "steel", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Сталь",
        Label: "Сталь",
    },
    {
        coords: new Vector3(1107.53, -2008.7, 30.94),
        Item: { name: "iron_plate", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Железная плита",
        Label: "Железная плита",
    },
    {
        coords: new Vector3(1109.47, -2006.16, 30.94),
        Item: { name: "nickel_tube", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Никелевая трубка",
        Label: "Никелевая трубка",
    },

    {
        coords: new Vector3(1108.51, -1999.0, 30.94),
        Item: { name: "glass", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Стекло",
        Label: "Стекло",
    },
    {
        coords: new Vector3(1106.47, -1997.05, 30.94),
        Item: { name: "steel_plate", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Стальная плита",
        Label: "Стальная плита",
    },
    {
        coords: new Vector3(-600.61, 2091.6, 131.45),
        Item: { name: "copper", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Медь",
        Label: "Медь",
    },
    {
        coords: new Vector3(-595.2, 2092.84, 131.48),
        Item: { name: "iron", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Железо",
        Label: "Железо",
    },
    {
        coords: new Vector3(-598.14, 2092.8, 131.59),
        Item: { name: "coal", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Уголь",
        Label: "Уголь",
    },
    {
        coords: new Vector3(2619.92, 2877.23, 36.91),
        Item: { name: "quartz", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Кварцовый песок",
        Label: "Кварцовый песок",
    },
    {
        coords: new Vector3(2945.38, 2746.14, 43.3),
        Item: { name: "nickel", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Никель",
        Label: "Никель",
    },
    {
        coords: new Vector3(2927.65, 2793.88, 40.63),
        Item: { name: "salt", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Соль",
        Label: "Соль",
    },
    {
        coords: new Vector3(363.38, 6482.66, 29.23),
        Item: { name: "tomato", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Помидор",
        Label: "Помидор",
    },
    {
        coords: new Vector3(2597.74, 4478.9, 37.37),
        Item: { name: "spice", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Специи",
        Label: "Специи",
    },
    {
        coords: new Vector3(2251.59, 4787.79, 40.07),
        Item: { name: "rise", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Рис",
        Label: "Рис",
    },
    {
        coords: new Vector3(371.11, 6518.73, 28.38),
        Item: { name: "orange", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Апельсин",
        Label: "Апельсин",
    },
    {
        coords: new Vector3(362.5, 6530.88, 28.38),
        Item: { name: "apple", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Яблоко",
        Label: "Яблоко",
    },
    {
        coords: new Vector3(438.29, 6455.65, 28.74),
        Item: { name: "milk", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Молоко",
        Label: "Молоко",
    },
    {
        coords: new Vector3(2459.78, 4745.72, 34.3),
        Item: { name: "raw_beef", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Говядина",
        Label: "Говядина",
    },
    {
        coords: new Vector3(2438.3, 4772.45, 34.34),
        Item: { name: "raw_pork", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Свиная вырезка",
        Label: "Свиная вырезка",
    },
    {
        coords: new Vector3(-84.78, 6234.3, 31.09),
        Item: { name: "raw_chicken", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Мясо птицы",
        Label: "Мясо птицы",
    },
    {
        coords: new Vector3(1899.85, 4921.0, 48.77),
        Item: { name: "egg", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Яйцо",
        Label: "Яйцо",
    },
    {
        coords: new Vector3(1982.53, 5028.4, 41.03),
        Item: { name: "flour", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Мука",
        Label: "Мука",
    },
    {
        coords: new Vector3(2309.86, 4826.01, 40.78),
        Item: { name: "water", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Чистую воду",
        Label: "Чистая Вода",
    },
    {
        coords: new Vector3(2330.25, 4852.55, 41.8),
        Item: { name: "yeast", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Дрожжи",
        Label: "Дрожжи",
    },
    {
        coords: new Vector3(2341.26, 4862.97, 41.8),
        Item: { name: "dough", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Тесто",
        Label: "Тесто",
    },
    {
        coords: new Vector3(-727.75, 5939.21, 16.33),
        Item: { name: "mushrooms", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Грибы",
        Label: "Грибы",
    },
    {
        coords: new Vector3(89.23, 6367.0, 31.22),
        Item: { name: "vegetable_oil", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Растительное масло",
        Label: "Растительное масло",
    },
    {
        coords: new Vector3(976.15, -1828.78, 31.17),
        Item: { name: "becon", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Бекон",
        Label: "Бекон",
    },
    {
        coords: new Vector3(-142.82, 1912.47, 197.32),
        Item: { name: "becon", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Бекон",
        Label: "Бекон",
    },
    {
        coords: new Vector3(853.25, -2096.23, 30.27),
        Item: { name: "cheese", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Сыр",
        Label: "Сыр",
    },
    {
        coords: new Vector3(2862.23, 4578.03, 47.34),
        Item: { name: "potato", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Картофель",
        Label: "Картофель",
    },
    {
        coords: new Vector3(2641.38, 4695.86, 35.62),
        Item: { name: "potato", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Картофель",
        Label: "Картофель",
    },
    {
        coords: new Vector3(-1898.85, 2035.51, 140.74),
        Item: { name: "grapes", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Виноград",
        Label: "Виноград",
    },
    {
        coords: new Vector3(-1895.0, 2034.41, 140.74),
        Item: { name: "olive_oil", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить оливковое масло",
        Label: "Оливковое масло",
    },
    {
        coords: new Vector3(-1891.02, 2033.32, 140.73),
        Item: { name: "moonshine", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Самогон",
        Label: "Самогон",
    },
    {
        coords: new Vector3(2641.36, 4597.29, 36.89),
        Item: { name: "wheat", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Пшеница",
        Label: "Пшеница",
    },
    {
        coords: new Vector3(3550.19, 3763.2, 29.92),
        Item: { name: "plastic", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Пластик",
        Label: "Пластик",
    },
    {
        coords: new Vector3(3554.82, 3763.01, 29.92),
        Item: { name: "acid", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Кислота",
        Label: "Кислота",
    },
    {
        coords: new Vector3(3557.8, 3762.19, 29.92),
        Item: { name: "rubber", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Резина",
        Label: "Резина",
    },
    {
        coords: new Vector3(3562.79, 3761.56, 29.92),
        Item: { name: "phone", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Телефон",
        Label: "Телефон",
    },
    {
        coords: new Vector3(3565.65, 3761.46, 29.92),
        Item: { name: "sim", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Sim карта",
        Label: "Sim карта",
    },
    {
        coords: new Vector3(1586.94, -1838.67, 94.33),
        Item: { name: "masut", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Мазут",
        Label: "Мазут",
    },
    {
        coords: new Vector3(1575.74, -1837.99, 93.13),
        Item: { name: "gas", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Газ",
        Label: "Газ",
    },
    {
        coords: new Vector3(-81.29, 1906.52, 196.72),
        Item: { name: "strawberry", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Клубника",
        Label: "Клубника",
    },
    {
        coords: new Vector3(1780.32, 4945.97, 43.85),
        Item: { name: "strawberry", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Клубника",
        Label: "Клубника",
    },
    {
        coords: new Vector3(-129.55, 1923.87, 197.29),
        Item: { name: "tomato_paste", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Томатная паста",
        Label: "Томатная паста",
    },
    {
        coords: new Vector3(-1154.76, 2754.97, 1.04),
        Item: { name: "dirty_water", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Грязная вода",
        Label: "Грязная вода",
    },
    {
        coords: new Vector3(1061.82, -608.28, 56.75),
        Item: { name: "dirty_water", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Грязная вода",
        Label: "Грязная вода",
    },
    {
        coords: new Vector3(1190.93, -208.51, 54.31),
        Item: { name: "dirty_water", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Грязная вода",
        Label: "Грязная вода",
    },
    {
        coords: new Vector3(2705.63, 1552.98, 24.52),
        Item: { name: "fertilizer", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Удобрение",
        Label: "Удобрение",
    },
    {
        coords: new Vector3(2703.92, 1549.53, 24.53),
        Item: { name: "nitrates", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Нитраты",
        Label: "Нитраты",
    },
    {
        coords: new Vector3(1930.16, 4636.09, 40.45),
        Item: { name: "butter", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Сливочное масло",
        Label: "Сливочное масло",
    },
    {
        coords: new Vector3(1956.79, 4647.68, 40.74),
        Item: { name: "cream", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Сливки",
        Label: "Сливки",
    },
    {
        coords: new Vector3(-493.8, 3074.84, 36.1),
        Item: { name: "banana", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Банан",
        Label: "Банан",
    },
    {
        coords: new Vector3(244.6, 6460.25, 31.37),
        Item: { name: "onion", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Лук",
        Label: "Лук",
    },
    {
        coords: new Vector3(-1546.92, -470.32, 35.45),
        Item: { name: "meal_wings", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Острые Куриные крылышки",
        Label: "Острые Куриные крылышки",
    },
    {
        coords: new Vector3(162.54, -1810.82, 28.72),
        Item: { name: "spring", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Пружина",
        Label: "Пружина",
    },
    {
        coords: new Vector3(164.58, -1813.52, 28.67),
        Item: { name: "steel_tube", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Стальная трубка",
        Label: "Стальная трубка",
    },
    {
        coords: new Vector3(-28.52, -1673.48, 29.49),
        Item: { name: "hand_grip", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Рукоятка",
        Label: "Рукоятка",
    },
    {
        coords: new Vector3(-28.52, -1673.48, 29.49),
        Item: { name: "hand_grip", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Рукоятка",
        Label: "Рукоятка",
    },
    {
        coords: new Vector3(36.76, -1747.69, 29.3),
        Item: { name: "hammer", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Молоток",
        Label: "Молоток",
    },
    {
        coords: new Vector3(6.6, -1599.45, 29.29),
        Item: { name: "tako", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Тако",
        Label: "Тако",
    },
    {
        coords: new Vector3(124.52, -1539.9, 29.25),
        Item: { name: "tea", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Чай",
        Label: "Чай",
    },
    {
        coords: new Vector3(69.58, -1468.31, 29.29),
        Item: { name: "radio", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Рация",
        Label: "Рация",
    },
    {
        coords: new Vector3(154.2, -1430.49, 29.26),
        Item: { name: "cheeseburger", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Чизбургер",
        Label: "Чизбургер",
    },
    {
        coords: new Vector3(107.04, -1399.23, 29.28),
        Item: { name: "lsd", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить L.S.D.",
        Label: "L.S.D.",
    },
    {
        coords: new Vector3(126.78, -1301.83, 29.23),
        Item: { name: "juice", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Сок ",
        Label: "Сок",
    },
    {
        coords: new Vector3(-185.73, -1427.34, 31.48),
        Item: { name: "icecream", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Мороженка ",
        Label: "Мороженка",
    },
    {
        coords: new Vector3(-270.96, -1589.94, 31.84),
        Item: { name: "meth", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Метамфетамин ",
        Label: "Метамфетамин",
    },
    {
        coords: new Vector3(80.36, 272.16, 110.2),
        Item: { name: "patato_fries", amount: 1 },
        Interval: 10,
        Blip: 1,
        Notification: "Получить Картофель фри ",
        Label: "Картофель фри",
    },
];

export default Config;