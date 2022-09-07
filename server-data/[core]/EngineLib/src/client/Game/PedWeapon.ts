export enum Weapon {
  DAGGER = GetHashKey('WEAPON_DAGGER'),
  BAT = GetHashKey('WEAPON_BAT'),
  BOTTLE = GetHashKey('WEAPON_BOTTLE'),
  CROWBAR = GetHashKey('WEAPON_CROWBAR'),
  UNARMED = GetHashKey('WEAPON_UNARMED'),
  FLASHLIGHT = GetHashKey('WEAPON_FLASHLIGHT'),
  GOLFCLUB = GetHashKey('WEAPON_GOLFCLUB'),
  HAMMER = GetHashKey('WEAPON_HAMMER'),
  HATCHET = GetHashKey('WEAPON_HATCHET'),
  KNUCKLE = GetHashKey('WEAPON_KNUCKLE'),
  KNIFE = GetHashKey('WEAPON_KNIFE'),
  MACHETE = GetHashKey('WEAPON_MACHETE'),
  SWITCHBLADE = GetHashKey('WEAPON_SWITCHBLADE'),
  NIGHTSTICK = GetHashKey('WEAPON_NIGHTSTICK'),
  WRENCH = GetHashKey('WEAPON_WRENCH'),
  BATTLEAXE = GetHashKey('WEAPON_BATTLEAXE'),
  POOLCUE = GetHashKey('WEAPON_POOLCUE'),
  STONE_HATCHET = GetHashKey('WEAPON_STONE_HATCHET'),
  PISTOL = GetHashKey('WEAPON_PISTOL'),
  PISTOL_MK2 = GetHashKey('WEAPON_PISTOL_MK2'),
  COMBATPISTOL = GetHashKey('WEAPON_COMBATPISTOL'),
  APPISTOL = GetHashKey('WEAPON_APPISTOL'),
  STUNGUN = GetHashKey('WEAPON_STUNGUN'),
  PISTOL50 = GetHashKey('WEAPON_PISTOL50'),
  SNSPISTOL = GetHashKey('WEAPON_SNSPISTOL'),
  SNSPISTOL_MK2 = GetHashKey('WEAPON_SNSPISTOL_MK2'),
  HEAVYPISTOL = GetHashKey('WEAPON_HEAVYPISTOL'),
  VINTAGEPISTOL = GetHashKey('WEAPON_VINTAGEPISTOL'),
  FLAREGUN = GetHashKey('WEAPON_FLAREGUN'),
  MARKSMANPISTOL = GetHashKey('WEAPON_MARKSMANPISTOL'),
  REVOLVER = GetHashKey('WEAPON_REVOLVER'),
  REVOLVER_MK2 = GetHashKey('WEAPON_REVOLVER_MK2'),
  DOUBLEACTION = GetHashKey('WEAPON_DOUBLEACTION'),
  RAYPISTOL = GetHashKey('WEAPON_RAYPISTOL'),
  CERAMICPISTOL = GetHashKey('WEAPON_CERAMICPISTOL'),
  NAVYREVOLVER = GetHashKey('WEAPON_NAVYREVOLVER'),
  MICROSMG = GetHashKey('WEAPON_MICROSMG'),
  SMG = GetHashKey('WEAPON_SMG'),
  SMG_MK2 = GetHashKey('WEAPON_SMG_MK2'),
  ASSAULTSMG = GetHashKey('WEAPON_ASSAULTSMG'),
  COMBATPDW = GetHashKey('WEAPON_COMBATPDW'),
  MACHINEPISTOL = GetHashKey('WEAPON_MACHINEPISTOL'),
  MINISMG = GetHashKey('WEAPON_MINISMG'),
  RAYCARBINE = GetHashKey('WEAPON_RAYCARBINE'),
  PUMPSHOTGUN = GetHashKey('WEAPON_PUMPSHOTGUN'),
  PUMPSHOTGUN_MK2 = GetHashKey('WEAPON_PUMPSHOTGUN_MK2'),
  SAWNOFFSHOTGUN = GetHashKey('WEAPON_SAWNOFFSHOTGUN'),
  ASSAULTSHOTGUN = GetHashKey('WEAPON_ASSAULTSHOTGUN'),
  BULLPUPSHOTGUN = GetHashKey('WEAPON_BULLPUPSHOTGUN'),
  MUSKET = GetHashKey('WEAPON_MUSKET'),
  HEAVYSHOTGUN = GetHashKey('WEAPON_HEAVYSHOTGUN'),
  DBSHOTGUN = GetHashKey('WEAPON_DBSHOTGUN'),
  AUTOSHOTGUN = GetHashKey('WEAPON_AUTOSHOTGUN'),
  ASSAULTRIFLE = GetHashKey('WEAPON_ASSAULTRIFLE'),
  ASSAULTRIFLE_MK2 = GetHashKey('WEAPON_ASSAULTRIFLE_MK2'),
  CARBINERIFLE = GetHashKey('WEAPON_CARBINERIFLE'),
  CARBINERIFLE_MK2 = GetHashKey('WEAPON_CARBINERIFLE_MK2'),
  ADVANCEDRIFLE = GetHashKey('WEAPON_ADVANCEDRIFLE'),
  SPECIALCARBINE = GetHashKey('WEAPON_SPECIALCARBINE'),
  SPECIALCARBINE_MK2 = GetHashKey('WEAPON_SPECIALCARBINE_MK2'),
  BULLPUPRIFLE = GetHashKey('WEAPON_BULLPUPRIFLE'),
  BULLPUPRIFLE_MK2 = GetHashKey('WEAPON_BULLPUPRIFLE_MK2'),
  COMPACTRIFLE = GetHashKey('WEAPON_COMPACTRIFLE'),
  MG = GetHashKey('WEAPON_MG'),
  COMBATMG = GetHashKey('WEAPON_COMBATMG'),
  COMBATMG_MK2 = GetHashKey('WEAPON_COMBATMG_MK2'),
  GUSENBERG = GetHashKey('WEAPON_GUSENBERG'),
  SNIPERRIFLE = GetHashKey('WEAPON_SNIPERRIFLE'),
  HEAVYSNIPER = GetHashKey('WEAPON_HEAVYSNIPER'),
  HEAVYSNIPER_MK2 = GetHashKey('WEAPON_HEAVYSNIPER_MK2'),
  MARKSMANRIFLE = GetHashKey('WEAPON_MARKSMANRIFLE'),
  MARKSMANRIFLE_MK2 = GetHashKey('WEAPON_MARKSMANRIFLE_MK2'),
  RPG = GetHashKey('WEAPON_RPG'),
  GRENADELAUNCHER = GetHashKey('WEAPON_GRENADELAUNCHER'),
  GRENADELAUNCHER_SMOKE = GetHashKey('WEAPON_GRENADELAUNCHER_SMOKE'),
  MINIGUN = GetHashKey('WEAPON_MINIGUN'),
  FIREWORK = GetHashKey('WEAPON_FIREWORK'),
  RAILGUN = GetHashKey('WEAPON_RAILGUN'),
  HOMINGLAUNCHER = GetHashKey('WEAPON_HOMINGLAUNCHER'),
  COMPACTLAUNCHER = GetHashKey('WEAPON_COMPACTLAUNCHER'),
  RAYMINIGUN = GetHashKey('WEAPON_RAYMINIGUN'),
  GRENADE = GetHashKey('WEAPON_GRENADE'),
  BZGAS = GetHashKey('WEAPON_BZGAS'),
  SMOKEGRENADE = GetHashKey('WEAPON_SMOKEGRENADE'),
  FLARE = GetHashKey('WEAPON_FLARE'),
  MOLOTOV = GetHashKey('WEAPON_MOLOTOV'),
  STICKYBOMB = GetHashKey('WEAPON_STICKYBOMB'),
  PROXMINE = GetHashKey('WEAPON_PROXMINE'),
  SNOWBALL = GetHashKey('WEAPON_SNOWBALL'),
  PIPEBOMB = GetHashKey('WEAPON_PIPEBOMB'),
  BALL = GetHashKey('WEAPON_BALL'),
  PETROLCAN = GetHashKey('WEAPON_PETROLCAN'),
  FIREEXTINGUISHER = GetHashKey('WEAPON_FIREEXTINGUISHER'),
  PARACHUTE = GetHashKey('WEAPON_PARACHUTE'),
  HAZARDCAN = GetHashKey('WEAPON_HAZARDCAN'),  
}

export class PedWeapon {
  private handle: number;

  constructor(handle: number) {
    this.handle = handle;
  }

  get isSwapping(): boolean {
    return IsPedSwappingWeapon(this.handle);
  }

  set canSwitch(value: boolean) {
    SetPedCanSwitchWeapon(this.handle, true);
  }

  get selected(): Weapon {
    return GetSelectedPedWeapon(this.handle);
  }

  getCurrent(): [boolean, Weapon] {
    return GetCurrentPedWeapon(this.handle, true);
  }

  setCurrent(weapon: Weapon, equipNow = true) {
    SetCurrentPedWeapon(this.handle, weapon, equipNow);
  }

  setCurrentWeaponVisible(visible: boolean, deselectWeapon = false) {
    SetPedCurrentWeaponVisible(this.handle, visible, deselectWeapon, false, false);
  }

  
}
