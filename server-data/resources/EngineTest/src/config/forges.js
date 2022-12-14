const Config = {};
Config.Locale = 'ru';

Config.Zones = [
    {
        categories: { ['Химия']: 4, ['Медицина']: 2 },
        identifier: 'lab_forge',
        title: 'Лаборатория',
        coords: { x: -449.15, y: -307.87, z: 34.6 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда']: 4, ['Напитки']: 2, ['Оружейники']: 2, ['Нефтяники']: 2, ['Приборостроение']: 2, ['Химия']: 2, ['Металлургия']: 2, ['Фермерство']: 2, ['Медицина']: 2, },
        identifier: 'master_forge',
        title: 'Тестовая',
        coords: { x: 411.2, y: -975.8, z: 29.4 },
        drawDistance: 20,
    },
    //Ballas
    {
        categories: { ['Химия']: 2, },
        identifier: 'lab_ballas',
        title: 'Лаборатория',
        coords: { x: 90.32, y: -1986.81, z: 20.42 },
        drawDistance: 1,
    },
    {
        categories: { ['Оружейники']: 2, },
        identifier: 'gun_ballas',
        title: 'Оружейная',
        coords: { x: 108.46, y: -1981.02, z: 20.96 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда']: 4, ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ballas',
        title: 'Кухня',
        coords: { x: 114.11, y: -1970.85, z: 21.33 },
        drawDistance: 1,
    },
    //Families
    {
        categories: { ['Химия']: 2, },
        identifier: 'lab_fam',
        title: 'Лаборатория',
        coords: { x: -136.42, y: -1611.67, z: 35.03 },
        drawDistance: 1,
    },
    {
        categories: { ['Оружейники']: 2, },
        identifier: 'gun_fam',
        title: 'Оружейная',
        coords: { x: -135.36, y: -1609.05, z: 35.03 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда']: 4, ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_fam',
        title: 'Кухня',
        coords: { x: -150.64, y: -1605.77, z: 35.03 },
        drawDistance: 1,
    },
    //Vagos
    {
        categories: { ['Химия']: 2, },
        identifier: 'lab_vag',
        title: 'Лаборатория',
        coords: { x: 335.84, y: -2019.19, z: 22.39 },
        drawDistance: 1,
    },
    {
        categories: { ['Оружейники']: 2, },
        identifier: 'gun_vag',
        title: 'Оружейная',
        coords: { x: 331.18, y: -2012.91, z: 22.39 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда']: 4, ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_vag',
        title: 'Кухня',
        coords: { x: 347.87, y: -2030.09, z: 22.39 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда']: 4, },
        identifier: 'tinker_vag',
        title: 'Верстак',
        coords: { x: 365.56, y: -2040.94, z: 22.39 },
        drawDistance: 1,
    },
    //Marabunta
    {
        categories: { ['Химия']: 2, },
        identifier: 'lab_mar',
        title: 'Лаборатория',
        coords: { x: 1435.42, y: -1488.55, z: 66.62 },
        drawDistance: 1,
    },
    {
        categories: { ['Оружейники']: 2, },
        identifier: 'gun_mar',
        title: 'Оружейная',
        coords: { x: 1439.48, y: -1490.9, z: 66.62 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда']: 4, ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_mar',
        title: 'Кухня',
        coords: { x: 1437.64, y: -1481.33, z: 63.7 },
        drawDistance: 1,
    },
    //Bean Machine
    {
        categories: { ['Еда']: 40, ['Еда: домашняя']: 40, ['Еда: суши']: 40, ['Еда: рестораны']: 40, ['Еда: cладости']: 100, ['Напитки']: 40 },
        identifier: 'kitchen_bm',
        title: 'Кухня',
        coords: { x: -825.98, y: -599.43, z: 29.03 },
        drawDistance: 1,
    },
    //Human Labs
    {
        categories: { ['Химия']: 2, },
        identifier: 'lab_hm',
        title: 'Лаборатория',
        coords: { x: 3559.86, y: 3673.69, z: 28.12 },
        drawDistance: 1.5,
    },
    //Zonah
    {
        categories: { ['Еда']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_zh',
        title: 'Кухня',
        coords: { x: -437.0, y: -341.15, z: 34.6 },
        drawDistance: 1,
    },
    //BurgerShot
    {
        categories: { ['Еда']: 4, ['Еда: фастфуд']: 40, },
        identifier: 'kitchen_bs',
        title: 'Кухня',
        coords: { x: -1199.11, y: -901.07, z: 14.0 },
        drawDistance: 1,
    },
    {
        categories: { ['Напитки']: 2 },
        identifier: 'kitchen_bs2',
        title: 'Кухня',
        coords: { x: -1197.54, y: -897.62, z: 14.0 },
        drawDistance: 1,
    },
    //================= [МОТЕЛИ] =================
    //АЛЬТА СТРИТ
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast1',
        title: 'Кухня',
        coords: { x: 311.87, y: -222.11, z: 54.23 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast2',
        title: 'Кухня',
        coords: { x: 303.76, y: -213.46, z: 54.23 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast3',
        title: 'Кухня',
        coords: { x: 307.63, y: -203.26, z: 54.23 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast4',
        title: 'Кухня',
        coords: { x: 316.59, y: -191.44, z: 54.23 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast5',
        title: 'Кухня',
        coords: { x: 311.87, y: -222.11, z: 58.02 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast6',
        title: 'Кухня',
        coords: { x: 303.76, y: -213.46, z: 58.02 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast7',
        title: 'Кухня',
        coords: { x: 307.63, y: -203.26, z: 58.02 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast8',
        title: 'Кухня',
        coords: { x: 316.59, y: -191.44, z: 58.02 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast9',
        title: 'Кухня',
        coords: { x: 335.58, y: -231.3, z: 54.23 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast10',
        title: 'Кухня',
        coords: { x: 342.43, y: -220.03, z: 54.23 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast11',
        title: 'Кухня',
        coords: { x: 346.35, y: -209.86, z: 54.23 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast12',
        title: 'Кухня',
        coords: { x: 350.23, y: -199.58, z: 54.23 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast13',
        title: 'Кухня',
        coords: { x: 335.58, y: -231.3, z: 58.02 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast14',
        title: 'Кухня',
        coords: { x: 342.43, y: -220.03, z: 58.02 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast15',
        title: 'Кухня',
        coords: { x: 346.35, y: -209.86, z: 58.02 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_altast16',
        title: 'Кухня',
        coords: { x: 350.23, y: -199.58, z: 58.02 },
        drawDistance: 1,
    },
    //ЭЛЬ РАНЧО
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ranchost1',
        title: 'Кухня',
        coords: { x: 546.41, y: -1771.26, z: 29.29 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ranchost2',
        title: 'Кухня',
        coords: { x: 549.57, y: -1764.73, z: 29.29 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ranchost3',
        title: 'Кухня',
        coords: { x: 552.74, y: -1758.08, z: 29.29 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ranchost4',
        title: 'Кухня',
        coords: { x: 555.77, y: -1751.5, z: 29.29 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ranchost5',
        title: 'Кухня',
        coords: { x: 558.7, y: -1744.82, z: 29.29 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ranchost6',
        title: 'Кухня',
        coords: { x: 552.17, y: -1780.04, z: 33.44 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ranchost7',
        title: 'Кухня',
        coords: { x: 545.56, y: -1776.88, z: 33.44 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ranchost8',
        title: 'Кухня',
        coords: { x: 547.43, y: -1763.66, z: 33.44 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ranchost9',
        title: 'Кухня',
        coords: { x: 550.58, y: -1757.09, z: 33.44 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ranchost10',
        title: 'Кухня',
        coords: { x: 553.5, y: -1750.38, z: 33.44 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ranchost11',
        title: 'Кухня',
        coords: { x: 556.64, y: -1743.9, z: 33.44 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_ranchost12',
        title: 'Кухня',
        coords: { x: 568.76, y: -1744.41, z: 33.44 },
        drawDistance: 1,
    },
    //КЛИНТОН АВЕНЮ
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton1',
        title: 'Кухня',
        coords: { x: 486.55, y: 193.65, z: 104.74 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton2',
        title: 'Кухня',
        coords: { x: 475.17, y: 208.21, z: 104.74 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton3',
        title: 'Кухня',
        coords: { x: 480.48, y: 222.86, z: 104.74 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton4',
        title: 'Кухня',
        coords: { x: 484.74, y: 234.33, z: 104.74 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton5',
        title: 'Кухня',
        coords: { x: 504.7, y: 242.17, z: 104.74 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton6',
        title: 'Кухня',
        coords: { x: 523.39, y: 235.28, z: 104.74 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton7',
        title: 'Кухня',
        coords: { x: 536.2, y: 214.28, z: 104.74 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton8',
        title: 'Кухня',
        coords: { x: 529.9, y: 196.9, z: 104.74 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton9',
        title: 'Кухня',
        coords: { x: 510.92, y: 184.81, z: 104.74 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton10',
        title: 'Кухня',
        coords: { x: 486.55, y: 193.65, z: 108.31 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton11',
        title: 'Кухня',
        coords: { x: 475.17, y: 208.21, z: 108.31 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton12',
        title: 'Кухня',
        coords: { x: 480.48, y: 222.86, z: 108.31 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton13',
        title: 'Кухня',
        coords: { x: 484.74, y: 234.33, z: 108.31 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton14',
        title: 'Кухня',
        coords: { x: 499.75, y: 243.92, z: 108.31 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton15',
        title: 'Кухня',
        coords: { x: 511.41, y: 239.65, z: 108.31 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton16',
        title: 'Кухня',
        coords: { x: 523.6, y: 235.23, z: 108.31 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton17',
        title: 'Кухня',
        coords: { x: 538.38, y: 220.25, z: 108.31 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton18',
        title: 'Кухня',
        coords: { x: 534.08, y: 208.41, z: 108.31 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton19',
        title: 'Кухня',
        coords: { x: 529.72, y: 196.49, z: 108.31 },
        drawDistance: 1,
    },
    {
        categories: { ['Еда: домашняя']: 4, ['Напитки']: 2 },
        identifier: 'kitchen_klinton20',
        title: 'Кухня',
        coords: { x: 511.04, y: 184.82, z: 108.31 },
        drawDistance: 1,
    },
];

export default Config;