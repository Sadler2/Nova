local PortalPoly = false
local PortalLines = false  
local PortalCorners = false
local PortalInfos = false
local noclipmode = false
local timecycleCustomName = 0
local SetCoords = false
local player = -1; CustomX = 0.0; CustomY = 0.0; CustomZ = 0.0
local coordsOverMap = false

RMenu.Add('DMT', 'main', RageUI.CreateMenu("DMT v2", "~b~∑ DoluTattoo Mapping Tool"))
RMenu.Add('DMT', 'submenu', RageUI.CreateSubMenu(RMenu:Get('DMT', 'main'), "RageUI", "~b~DoluTattoo Mapping Tool", nil, nil, "root_cause", "shopui_title_dynasty8"))

RMenu.Add('submenu', 'timecycles', RageUI.CreateSubMenu(RMenu:Get('DMT', 'main'), "DMT v2", "~b~Timecycles Menu"))
RMenu.Add('submenu', 'portals', RageUI.CreateSubMenu(RMenu:Get('DMT', 'main'), "DMT v2", "~b~Portals Menu"))
RMenu.Add('submenu', 'rooms', RageUI.CreateSubMenu(RMenu:Get('DMT', 'main'), "DMT v2", "~b~Rooms Menu"))
RMenu.Add('submenu', 'entitysets', RageUI.CreateSubMenu(RMenu:Get('DMT', 'main'), "DMT v2", "~b~EntitySets Menu"))
RMenu.Add('submenu', 'teleport', RageUI.CreateSubMenu(RMenu:Get('DMT', 'main'), "DMT v2", "~b~Teleport Menu"))
RMenu.Add('submenu', 'world', RageUI.CreateSubMenu(RMenu:Get('DMT', 'main'), "DMT v2", "~b~World Menu"))

local rageui_timecycle = {
    { Name = "Default", value = "Default" },
    { Name = "AP1_01_B_IntRefRange", value = "AP1_01_B_IntRefRange" },
    { Name = "AP1_01_C_NoFog", value = "AP1_01_C_NoFog" },
    { Name = "AirRaceBoost01", value = "AirRaceBoost01" },
    { Name = "AirRaceBoost02", value = "AirRaceBoost02" },
    { Name = "AmbientPUSH", value = "AmbientPUSH" },
    { Name = "ArenaEMP", value = "ArenaEMP" },
    { Name = "ArenaEMP_Blend", value = "ArenaEMP_Blend" },
    { Name = "ArenaWheelPurple01", value = "ArenaWheelPurple01" },
    { Name = "ArenaWheelPurple02", value = "ArenaWheelPurple02" },
    { Name = "Bank_HLWD", value = "Bank_HLWD" },
    { Name = "Barry1_Stoned", value = "Barry1_Stoned" },
    { Name = "BarryFadeOut", value = "BarryFadeOut" },
    { Name = "BeastIntro01", value = "BeastIntro01" },
    { Name = "BeastIntro02", value = "BeastIntro02" },
    { Name = "BeastLaunch01", value = "BeastLaunch01" },
    { Name = "BeastLaunch02", value = "BeastLaunch02" },
    { Name = "BikerFilter", value = "BikerFilter" },
    { Name = "BikerForm01", value = "BikerForm01" },
    { Name = "BikerFormFlash", value = "BikerFormFlash" },
    { Name = "Bikers", value = "Bikers" },
    { Name = "BikersSPLASH", value = "BikersSPLASH" },
    { Name = "BlackOut", value = "BlackOut" },
    { Name = "BleepYellow01", value = "BleepYellow01" },
    { Name = "BleepYellow02", value = "BleepYellow02" },
    { Name = "Bloom", value = "Bloom" },
    { Name = "BloomLight", value = "BloomLight" },
    { Name = "BloomMid", value = "BloomMid" },
    { Name = "BombCam01", value = "BombCam01" },
    { Name = "BombCamFlash", value = "BombCamFlash" },
    { Name = "Broken_camera_fuzz", value = "Broken_camera_fuzz" },
    { Name = "BulletTimeDark", value = "BulletTimeDark" },
    { Name = "BulletTimeLight", value = "BulletTimeLight" },
    { Name = "CAMERA_BW", value = "CAMERA_BW" },
    { Name = "CAMERA_secuirity", value = "CAMERA_secuirity" },
    { Name = "CAMERA_secuirity_FUZZ", value = "CAMERA_secuirity_FUZZ" },
    { Name = "CH3_06_water", value = "CH3_06_water" },
    { Name = "CHOP", value = "CHOP" },
    { Name = "CS1_railwayB_tunnel", value = "CS1_railwayB_tunnel" },
    { Name = "CS3_rail_tunnel", value = "CS3_rail_tunnel" },
    { Name = "CUSTOM_streetlight", value = "CUSTOM_streetlight" },
    { Name = "Carpark_MP_exit", value = "Carpark_MP_exit" },
    { Name = "CopsSPLASH", value = "CopsSPLASH" },
    { Name = "CrossLine01", value = "CrossLine01" },
    { Name = "CrossLine02", value = "CrossLine02" },
    { Name = "DONT_overide_sunpos", value = "DONT_overide_sunpos" },
    { Name = "DRUG_2_drive", value = "DRUG_2_drive" },
    { Name = "DRUG_gas_huffin", value = "DRUG_gas_huffin" },
    { Name = "DeadlineNeon01", value = "DeadlineNeon01" },
    { Name = "DefaultColorCode", value = "DefaultColorCode" },
    { Name = "Dont_tazeme_bro", value = "Dont_tazeme_bro" },
    { Name = "DrivingFocusDark", value = "DrivingFocusDark" },
    { Name = "DrivingFocusLight", value = "DrivingFocusLight" },
    { Name = "Drone_FishEye_Lens", value = "Drone_FishEye_Lens" },
    { Name = "Drug_deadman", value = "Drug_deadman" },
    { Name = "Drug_deadman_blend", value = "Drug_deadman_blend" },
    { Name = "Drunk", value = "Drunk" },
    { Name = "EXTRA_bouncelight", value = "EXTRA_bouncelight" },
    { Name = "EXT_FULLAmbientmult_art", value = "EXT_FULLAmbientmult_art" },
    { Name = "ExplosionJosh", value = "ExplosionJosh" },
    { Name = "FIB_5", value = "FIB_5" },
    { Name = "FIB_6", value = "FIB_6" },
    { Name = "FIB_A", value = "FIB_A" },
    { Name = "FIB_B", value = "FIB_B" },
    { Name = "FIB_interview", value = "FIB_interview" },
    { Name = "FIB_interview_optimise", value = "FIB_interview_optimise" },
    { Name = "FORdoron_delete", value = "FORdoron_delete" },
    { Name = "FRANKLIN", value = "FRANKLIN" },
    { Name = "Facebook_NEW", value = "Facebook_NEW" },
    { Name = "FinaleBank", value = "FinaleBank" },
    { Name = "FinaleBankMid", value = "FinaleBankMid" },
    { Name = "FinaleBankexit", value = "FinaleBankexit" },
    { Name = "Forest", value = "Forest" },
    { Name = "FrankilinsHOUSEhills", value = "FrankilinsHOUSEhills" },
    { Name = "FranklinColorCode", value = "FranklinColorCode" },
    { Name = "FranklinColorCodeBasic", value = "FranklinColorCodeBasic" },
    { Name = "FranklinColorCodeBright", value = "FranklinColorCodeBright" },
    { Name = "FullAmbientmult_interior", value = "FullAmbientmult_interior" },
    { Name = "Glasses_BlackOut", value = "Glasses_BlackOut" },
    { Name = "Hanger_INTmods", value = "Hanger_INTmods" },
    { Name = "Hicksbar", value = "Hicksbar" },
    { Name = "HicksbarNEW", value = "HicksbarNEW" },
    { Name = "Hint_cam", value = "Hint_cam" },
    { Name = "IMpExt_Interior_02", value = "IMpExt_Interior_02" },
    { Name = "IMpExt_Interior_02_stair_cage", value = "IMpExt_Interior_02_stair_cage" },
    { Name = "INT_FULLAmbientmult_art", value = "INT_FULLAmbientmult_art" },
    { Name = "INT_FULLAmbientmult_both", value = "INT_FULLAmbientmult_both" },
    { Name = "INT_FullAmbientmult", value = "INT_FullAmbientmult" },
    { Name = "INT_NO_fogALPHA", value = "INT_NO_fogALPHA" },
    { Name = "INT_NOdirectLight", value = "INT_NOdirectLight" },
    { Name = "INT_NoAmbientmult", value = "INT_NoAmbientmult" },
    { Name = "INT_NoAmbientmult_art", value = "INT_NoAmbientmult_art" },
    { Name = "INT_NoAmbientmult_both", value = "INT_NoAmbientmult_both" },
    { Name = "INT_garage", value = "INT_garage" },
    { Name = "INT_mall", value = "INT_mall" },
    { Name = "INT_nowaterREF", value = "INT_nowaterREF" },
    { Name = "INT_posh_hairdresser", value = "INT_posh_hairdresser" },
    { Name = "INT_smshop", value = "INT_smshop" },
    { Name = "INT_smshop_inMOD", value = "INT_smshop_inMOD" },
    { Name = "INT_smshop_indoor_bloom", value = "INT_smshop_indoor_bloom" },
    { Name = "INT_smshop_outdoor_bloom", value = "INT_smshop_outdoor_bloom" },
    { Name = "INT_streetlighting", value = "INT_streetlighting" },
    { Name = "INT_trailer_cinema", value = "INT_trailer_cinema" },
    { Name = "ImpExp_Interior_01", value = "ImpExp_Interior_01" },
    { Name = "InchOrange01", value = "InchOrange01" },
    { Name = "InchOrange02", value = "InchOrange02" },
    { Name = "InchPickup01", value = "InchPickup01" },
    { Name = "InchPickup02", value = "InchPickup02" },
    { Name = "InchPurple01", value = "InchPurple01" },
    { Name = "InchPurple02", value = "InchPurple02" },
    { Name = "KT_underpass", value = "KT_underpass" },
    { Name = "Kifflom", value = "Kifflom" },
    { Name = "LIGHTSreduceFALLOFF", value = "LIGHTSreduceFALLOFF" },
    { Name = "LODmult_HD_orphan_LOD_reduce", value = "LODmult_HD_orphan_LOD_reduce" },
    { Name = "LODmult_HD_orphan_reduce", value = "LODmult_HD_orphan_reduce" },
    { Name = "LODmult_LOD_reduce", value = "LODmult_LOD_reduce" },
    { Name = "LODmult_SLOD1_reduce", value = "LODmult_SLOD1_reduce" },
    { Name = "LODmult_SLOD2_reduce", value = "LODmult_SLOD2_reduce" },
    { Name = "LODmult_SLOD3_reduce", value = "LODmult_SLOD3_reduce" },
    { Name = "LODmult_global_reduce", value = "LODmult_global_reduce" },
    { Name = "LODmult_global_reduce_NOHD", value = "LODmult_global_reduce_NOHD" },
    { Name = "LectroDark", value = "LectroDark" },
    { Name = "LectroLight", value = "LectroLight" },
    { Name = "LifeInvaderLOD", value = "LifeInvaderLOD" },
    { Name = "LightPollutionHills", value = "LightPollutionHills" },
    { Name = "LostTimeDark", value = "LostTimeDark" },
    { Name = "LostTimeFlash", value = "LostTimeFlash" },
    { Name = "LostTimeLight", value = "LostTimeLight" },
    { Name = "METRO_Tunnels", value = "METRO_Tunnels" },
    { Name = "METRO_Tunnels_entrance", value = "METRO_Tunnels_entrance" },
    { Name = "METRO_platform", value = "METRO_platform" },
    { Name = "MPApartHigh", value = "MPApartHigh" },
    { Name = "MPApartHigh_palnning", value = "MPApartHigh_palnning" },
    { Name = "MPApart_H_01", value = "MPApart_H_01" },
    { Name = "MPApart_H_01_gym", value = "MPApart_H_01_gym" },
    { Name = "MP_Arena_VIP", value = "MP_Arena_VIP" },
    { Name = "MP_Arena_theme_atlantis", value = "MP_Arena_theme_atlantis" },
    { Name = "MP_Arena_theme_evening", value = "MP_Arena_theme_evening" },
    { Name = "MP_Arena_theme_hell", value = "MP_Arena_theme_hell" },
    { Name = "MP_Arena_theme_midday", value = "MP_Arena_theme_midday" },
    { Name = "MP_Arena_theme_morning", value = "MP_Arena_theme_morning" },
    { Name = "MP_Arena_theme_night", value = "MP_Arena_theme_night" },
    { Name = "MP_Arena_theme_saccharine", value = "MP_Arena_theme_saccharine" },
    { Name = "MP_Arena_theme_sandstorm", value = "MP_Arena_theme_sandstorm" },
    { Name = "MP_Arena_theme_scifi_night", value = "MP_Arena_theme_scifi_night" },
    { Name = "MP_Arena_theme_storm", value = "MP_Arena_theme_storm" },
    { Name = "MP_Arena_theme_toxic", value = "MP_Arena_theme_toxic" },
    { Name = "MP_Bull_tost", value = "MP_Bull_tost" },
    { Name = "MP_Bull_tost_blend", value = "MP_Bull_tost_blend" },
    { Name = "MP_Garage_L", value = "MP_Garage_L" },
    { Name = "MP_H_01_Bathroom", value = "MP_H_01_Bathroom" },
    { Name = "MP_H_01_Bedroom", value = "MP_H_01_Bedroom" },
    { Name = "MP_H_01_New", value = "MP_H_01_New" },
    { Name = "MP_H_01_New_Bathroom", value = "MP_H_01_New_Bathroom" },
    { Name = "MP_H_01_New_Bedroom", value = "MP_H_01_New_Bedroom" },
    { Name = "MP_H_01_New_Study", value = "MP_H_01_New_Study" },
    { Name = "MP_H_01_Study", value = "MP_H_01_Study" },
    { Name = "MP_H_02", value = "MP_H_02" },
    { Name = "MP_H_04", value = "MP_H_04" },
    { Name = "MP_H_06", value = "MP_H_06" },
    { Name = "MP_Killstreak", value = "MP_Killstreak" },
    { Name = "MP_Killstreak_blend", value = "MP_Killstreak_blend" },
    { Name = "MP_Loser", value = "MP_Loser" },
    { Name = "MP_Loser_blend", value = "MP_Loser_blend" },
    { Name = "MP_MedGarage", value = "MP_MedGarage" },
    { Name = "MP_Powerplay", value = "MP_Powerplay" },
    { Name = "MP_Powerplay_blend", value = "MP_Powerplay_blend" },
    { Name = "MP_Studio_Lo", value = "MP_Studio_Lo" },
    { Name = "MP_corona_heist", value = "MP_corona_heist" },
    { Name = "MP_corona_heist_BW", value = "MP_corona_heist_BW" },
    { Name = "MP_corona_heist_BW_night", value = "MP_corona_heist_BW_night" },
    { Name = "MP_corona_heist_DOF", value = "MP_corona_heist_DOF" },
    { Name = "MP_corona_heist_blend", value = "MP_corona_heist_blend" },
    { Name = "MP_corona_heist_night", value = "MP_corona_heist_night" },
    { Name = "MP_corona_heist_night_blend", value = "MP_corona_heist_night_blend" },
    { Name = "MP_corona_selection", value = "MP_corona_selection" },
    { Name = "MP_corona_switch", value = "MP_corona_switch" },
    { Name = "MP_corona_tournament", value = "MP_corona_tournament" },
    { Name = "MP_corona_tournament_DOF", value = "MP_corona_tournament_DOF" },
    { Name = "MP_death_grade", value = "MP_death_grade" },
    { Name = "MP_death_grade_blend01", value = "MP_death_grade_blend01" },
    { Name = "MP_death_grade_blend02", value = "MP_death_grade_blend02" },
    { Name = "MP_deathfail_night", value = "MP_deathfail_night" },
    { Name = "MP_heli_cam", value = "MP_heli_cam" },
    { Name = "MP_intro_logo", value = "MP_intro_logo" },
    { Name = "MP_job_end_night", value = "MP_job_end_night" },
    { Name = "MP_job_load", value = "MP_job_load" },
    { Name = "MP_job_load_01", value = "MP_job_load_01" },
    { Name = "MP_job_load_02", value = "MP_job_load_02" },
    { Name = "MP_job_lose", value = "MP_job_lose" },
    { Name = "MP_job_preload", value = "MP_job_preload" },
    { Name = "MP_job_preload_blend", value = "MP_job_preload_blend" },
    { Name = "MP_job_preload_night", value = "MP_job_preload_night" },
    { Name = "MP_job_win", value = "MP_job_win" },
    { Name = "MP_lowgarage", value = "MP_lowgarage" },
    { Name = "MP_race_finish", value = "MP_race_finish" },
    { Name = "MP_select", value = "MP_select" },
    { Name = "MichaelColorCode", value = "MichaelColorCode" },
    { Name = "MichaelColorCodeBasic", value = "MichaelColorCodeBasic" },
    { Name = "MichaelColorCodeBright", value = "MichaelColorCodeBright" },
    { Name = "MichaelsDarkroom", value = "MichaelsDarkroom" },
    { Name = "MichaelsDirectional", value = "MichaelsDirectional" },
    { Name = "MichaelsNODirectional", value = "MichaelsNODirectional" },
    { Name = "Mp_Stilts", value = "Mp_Stilts" },
    { Name = "Mp_Stilts2", value = "Mp_Stilts2" },
    { Name = "Mp_Stilts2_bath", value = "Mp_Stilts2_bath" },
    { Name = "Mp_Stilts_gym", value = "Mp_Stilts_gym" },
    { Name = "Mp_Stilts_gym2", value = "Mp_Stilts_gym2" },
    { Name = "Mp_apart_mid", value = "Mp_apart_mid" },
    { Name = "Multipayer_spectatorCam", value = "Multipayer_spectatorCam" },
    { Name = "NEW_abattoir", value = "NEW_abattoir" },
    { Name = "NEW_jewel", value = "NEW_jewel" },
    { Name = "NEW_jewel_EXIT", value = "NEW_jewel_EXIT" },
    { Name = "NEW_lesters", value = "NEW_lesters" },
    { Name = "NEW_ornate_bank", value = "NEW_ornate_bank" },
    { Name = "NEW_ornate_bank_entrance", value = "NEW_ornate_bank_entrance" },
    { Name = "NEW_ornate_bank_office", value = "NEW_ornate_bank_office" },
    { Name = "NEW_ornate_bank_safe", value = "NEW_ornate_bank_safe" },
    { Name = "NEW_shrinksOffice", value = "NEW_shrinksOffice" },
    { Name = "NEW_station_unfinished", value = "NEW_station_unfinished" },
    { Name = "NEW_trevorstrailer", value = "NEW_trevorstrailer" },
    { Name = "NEW_tunnels", value = "NEW_tunnels" },
    { Name = "NEW_tunnels_ditch", value = "NEW_tunnels_ditch" },
    { Name = "NEW_tunnels_hole", value = "NEW_tunnels_hole" },
    { Name = "NEW_yellowtunnels", value = "NEW_yellowtunnels" },
    { Name = "NG_blackout", value = "NG_blackout" },
    { Name = "NG_deathfail_BW_base", value = "NG_deathfail_BW_base" },
    { Name = "NG_deathfail_BW_blend01", value = "NG_deathfail_BW_blend01" },
    { Name = "NG_deathfail_BW_blend02", value = "NG_deathfail_BW_blend02" },
    { Name = "NG_filmic01", value = "NG_filmic01" },
    { Name = "NG_filmic02", value = "NG_filmic02" },
    { Name = "NG_filmic03", value = "NG_filmic03" },
    { Name = "NG_filmic04", value = "NG_filmic04" },
    { Name = "NG_filmic05", value = "NG_filmic05" },
    { Name = "NG_filmic06", value = "NG_filmic06" },
    { Name = "NG_filmic07", value = "NG_filmic07" },
    { Name = "NG_filmic08", value = "NG_filmic08" },
    { Name = "NG_filmic09", value = "NG_filmic09" },
    { Name = "NG_filmic10", value = "NG_filmic10" },
    { Name = "NG_filmic11", value = "NG_filmic11" },
    { Name = "NG_filmic12", value = "NG_filmic12" },
    { Name = "NG_filmic13", value = "NG_filmic13" },
    { Name = "NG_filmic14", value = "NG_filmic14" },
    { Name = "NG_filmic15", value = "NG_filmic15" },
    { Name = "NG_filmic16", value = "NG_filmic16" },
    { Name = "NG_filmic17", value = "NG_filmic17" },
    { Name = "NG_filmic18", value = "NG_filmic18" },
    { Name = "NG_filmic19", value = "NG_filmic19" },
    { Name = "NG_filmic20", value = "NG_filmic20" },
    { Name = "NG_filmic21", value = "NG_filmic21" },
    { Name = "NG_filmic22", value = "NG_filmic22" },
    { Name = "NG_filmic23", value = "NG_filmic23" },
    { Name = "NG_filmic24", value = "NG_filmic24" },
    { Name = "NG_filmic25", value = "NG_filmic25" },
    { Name = "NG_filmnoir_BW01", value = "NG_filmnoir_BW01" },
    { Name = "NG_filmnoir_BW02", value = "NG_filmnoir_BW02" },
    { Name = "NG_first", value = "NG_first" },
    { Name = "NO_coronas", value = "NO_coronas" },
    { Name = "NO_fog_alpha", value = "NO_fog_alpha" },
    { Name = "NO_streetAmbient", value = "NO_streetAmbient" },
    { Name = "NO_weather", value = "NO_weather" },
    { Name = "NOdirectLight", value = "NOdirectLight" },
    { Name = "NOrain", value = "NOrain" },
    { Name = "NeutralColorCode", value = "NeutralColorCode" },
    { Name = "NeutralColorCodeBasic", value = "NeutralColorCodeBasic" },
    { Name = "NeutralColorCodeBright", value = "NeutralColorCodeBright" },
    { Name = "NeutralColorCodeLight", value = "NeutralColorCodeLight" },
    { Name = "NewMicheal", value = "NewMicheal" },
    { Name = "NewMicheal_night", value = "NewMicheal_night" },
    { Name = "NewMicheal_upstairs", value = "NewMicheal_upstairs" },
    { Name = "NewMichealgirly", value = "NewMichealgirly" },
    { Name = "NewMichealstoilet", value = "NewMichealstoilet" },
    { Name = "NewMichealupstairs", value = "NewMichealupstairs" },
    { Name = "New_sewers", value = "New_sewers" },
    { Name = "NoAmbientmult", value = "NoAmbientmult" },
    { Name = "NoAmbientmult_interior", value = "NoAmbientmult_interior" },
    { Name = "NoPedLight", value = "NoPedLight" },
    { Name = "OrbitalCannon", value = "OrbitalCannon" },
    { Name = "PERSHING_water_reflect", value = "PERSHING_water_reflect" },
    { Name = "PORT_heist_underwater", value = "PORT_heist_underwater" },
    { Name = "PPFilter", value = "PPFilter" },
    { Name = "PPGreen01", value = "PPGreen01" },
    { Name = "PPGreen02", value = "PPGreen02" },
    { Name = "PPOrange01", value = "PPOrange01" },
    { Name = "PPOrange02", value = "PPOrange02" },
    { Name = "PPPink01", value = "PPPink01" },
    { Name = "PPPink02", value = "PPPink02" },
    { Name = "PPPurple01", value = "PPPurple01" },
    { Name = "PPPurple02", value = "PPPurple02" },
    { Name = "Paleto", value = "Paleto" },
    { Name = "PennedInDark", value = "PennedInDark" },
    { Name = "PennedInLight", value = "PennedInLight" },
    { Name = "PlayerSwitchNeutralFlash", value = "PlayerSwitchNeutralFlash" },
    { Name = "PlayerSwitchPulse", value = "PlayerSwitchPulse" },
    { Name = "PoliceStation", value = "PoliceStation" },
    { Name = "PoliceStationDark", value = "PoliceStationDark" },
    { Name = "Prologue_shootout_opt", value = "Prologue_shootout_opt" },
    { Name = "REDMIST", value = "REDMIST" },
    { Name = "REDMIST_blend", value = "REDMIST_blend" },
    { Name = "RaceTurboDark", value = "RaceTurboDark" },
    { Name = "RaceTurboFlash", value = "RaceTurboFlash" },
    { Name = "RaceTurboLight", value = "RaceTurboLight" },
    { Name = "ReduceDrawDistance", value = "ReduceDrawDistance" },
    { Name = "ReduceDrawDistanceMAP", value = "ReduceDrawDistanceMAP" },
    { Name = "ReduceDrawDistanceMission", value = "ReduceDrawDistanceMission" },
    { Name = "ReduceSSAO", value = "ReduceSSAO" },
    { Name = "RemixDrone", value = "RemixDrone" },
    { Name = "RemoteSniper", value = "RemoteSniper" },
    { Name = "SALTONSEA", value = "SALTONSEA" },
    { Name = "SAWMILL", value = "SAWMILL" },
    { Name = "SP1_03_drawDistance", value = "SP1_03_drawDistance" },
    { Name = "STRIP_changing", value = "STRIP_changing" },
    { Name = "STRIP_nofog", value = "STRIP_nofog" },
    { Name = "STRIP_office", value = "STRIP_office" },
    { Name = "STRIP_stage", value = "STRIP_stage" },
    { Name = "SheriffStation", value = "SheriffStation" },
    { Name = "Shop247", value = "Shop247" },
    { Name = "Shop247_none", value = "Shop247_none" },
    { Name = "SmugglerCheckpoint01", value = "SmugglerCheckpoint01" },
    { Name = "SmugglerCheckpoint02", value = "SmugglerCheckpoint02" },
    { Name = "SmugglerFlash", value = "SmugglerFlash" },
    { Name = "Sniper", value = "Sniper" },
    { Name = "StadLobby", value = "StadLobby" },
    { Name = "StreetLighting", value = "StreetLighting" },
    { Name = "StreetLightingJunction", value = "StreetLightingJunction" },
    { Name = "StreetLightingtraffic", value = "StreetLightingtraffic" },
    { Name = "StuntFastDark", value = "StuntFastDark" },
    { Name = "StuntFastLight", value = "StuntFastLight" },
    { Name = "StuntSlowDark", value = "StuntSlowDark" },
    { Name = "StuntSlowLight", value = "StuntSlowLight" },
    { Name = "TREVOR", value = "TREVOR" },
    { Name = "TUNNEL_green", value = "TUNNEL_green" },
    { Name = "TUNNEL_green_ext", value = "TUNNEL_green_ext" },
    { Name = "TUNNEL_orange", value = "TUNNEL_orange" },
    { Name = "TUNNEL_orange_exterior", value = "TUNNEL_orange_exterior" },
    { Name = "TUNNEL_white", value = "TUNNEL_white" },
    { Name = "TUNNEL_yellow", value = "TUNNEL_yellow" },
    { Name = "TUNNEL_yellow_ext", value = "TUNNEL_yellow_ext" },
    { Name = "TinyGreen01", value = "TinyGreen01" },
    { Name = "TinyGreen02", value = "TinyGreen02" },
    { Name = "TinyPink01", value = "TinyPink01" },
    { Name = "TinyPink02", value = "TinyPink02" },
    { Name = "TinyRacerMoBlur", value = "TinyRacerMoBlur" },
    { Name = "TransformFlash", value = "TransformFlash" },
    { Name = "TransformRaceFlash", value = "TransformRaceFlash" },
    { Name = "TrevorColorCode", value = "TrevorColorCode" },
    { Name = "TrevorColorCodeBasic", value = "TrevorColorCodeBasic" },
    { Name = "TrevorColorCodeBright", value = "TrevorColorCodeBright" },
    { Name = "Trevors_room", value = "Trevors_room" },
    { Name = "Tunnel", value = "Tunnel" },
    { Name = "Tunnel_green1", value = "Tunnel_green1" },
    { Name = "VAGOS_new_garage", value = "VAGOS_new_garage" },
    { Name = "VAGOS_new_hangout", value = "VAGOS_new_hangout" },
    { Name = "VC_tunnel_entrance", value = "VC_tunnel_entrance" },
    { Name = "V_Abattoir_Cold", value = "V_Abattoir_Cold" },
    { Name = "V_CIA_Facility", value = "V_CIA_Facility" },
    { Name = "V_FIB_IT3", value = "V_FIB_IT3" },
    { Name = "V_FIB_IT3_alt", value = "V_FIB_IT3_alt" },
    { Name = "V_FIB_IT3_alt5", value = "V_FIB_IT3_alt5" },
    { Name = "V_FIB_stairs", value = "V_FIB_stairs" },
    { Name = "V_Metro2", value = "V_Metro2" },
    { Name = "V_Metro_station", value = "V_Metro_station" },
    { Name = "V_Office_smoke", value = "V_Office_smoke" },
    { Name = "V_Office_smoke_Fire", value = "V_Office_smoke_Fire" },
    { Name = "V_Office_smoke_ext", value = "V_Office_smoke_ext" },
    { Name = "V_Solomons", value = "V_Solomons" },
    { Name = "V_recycle_dark", value = "V_recycle_dark" },
    { Name = "V_recycle_light", value = "V_recycle_light" },
    { Name = "V_recycle_mainroom", value = "V_recycle_mainroom" },
    { Name = "V_strip_nofog", value = "V_strip_nofog" },
    { Name = "V_strip_office", value = "V_strip_office" },
    { Name = "Vagos", value = "Vagos" },
    { Name = "VagosSPLASH", value = "VagosSPLASH" },
    { Name = "VolticBlur", value = "VolticBlur" },
    { Name = "VolticFlash", value = "VolticFlash" },
    { Name = "VolticGold", value = "VolticGold" },
    { Name = "WATER _lab_cooling", value = "WATER _lab_cooling" },
    { Name = "WATER_CH2_06_01_03", value = "WATER_CH2_06_01_03" },
    { Name = "WATER_CH2_06_02", value = "WATER_CH2_06_02" },
    { Name = "WATER_CH2_06_04", value = "WATER_CH2_06_04" },
    { Name = "WATER_ID2_21", value = "WATER_ID2_21" },
    { Name = "WATER_REF_malibu", value = "WATER_REF_malibu" },
    { Name = "WATER_RichmanStuntJump", value = "WATER_RichmanStuntJump" },
    { Name = "WATER_cove", value = "WATER_cove" },
    { Name = "WATER_hills", value = "WATER_hills" },
    { Name = "WATER_lab", value = "WATER_lab" },
    { Name = "WATER_militaryPOOP", value = "WATER_militaryPOOP" },
    { Name = "WATER_muddy", value = "WATER_muddy" },
    { Name = "WATER_port", value = "WATER_port" },
    { Name = "WATER_refmap_high", value = "WATER_refmap_high" },
    { Name = "WATER_refmap_hollywoodlake", value = "WATER_refmap_hollywoodlake" },
    { Name = "WATER_refmap_low", value = "WATER_refmap_low" },
    { Name = "WATER_refmap_med", value = "WATER_refmap_med" },
    { Name = "WATER_refmap_off", value = "WATER_refmap_off" },
    { Name = "WATER_refmap_poolside", value = "WATER_refmap_poolside" },
    { Name = "WATER_refmap_silverlake", value = "WATER_refmap_silverlake" },
    { Name = "WATER_refmap_venice", value = "WATER_refmap_venice" },
    { Name = "WATER_refmap_verylow", value = "WATER_refmap_verylow" },
    { Name = "WATER_resevoir", value = "WATER_resevoir" },
    { Name = "WATER_river", value = "WATER_river" },
    { Name = "WATER_salton", value = "WATER_salton" },
    { Name = "WATER_salton_bottom", value = "WATER_salton_bottom" },
    { Name = "WATER_shore", value = "WATER_shore" },
    { Name = "WATER_silty", value = "WATER_silty" },
    { Name = "WATER_silverlake", value = "WATER_silverlake" },
    { Name = "WarpCheckpoint", value = "WarpCheckpoint" },
    { Name = "WeaponUpgrade", value = "WeaponUpgrade" },
    { Name = "WhiteOut", value = "WhiteOut" },
    { Name = "baseTONEMAPPING", value = "baseTONEMAPPING" },
    { Name = "blackNwhite", value = "blackNwhite" },
    { Name = "buggy_shack", value = "buggy_shack" },
    { Name = "buildingTOP", value = "buildingTOP" },
    { Name = "cBank_back", value = "cBank_back" },
    { Name = "cBank_front", value = "cBank_front" },
    { Name = "canyon_mission", value = "canyon_mission" },
    { Name = "carMOD_underpass", value = "carMOD_underpass" },
    { Name = "carpark", value = "carpark" },
    { Name = "carpark_dt1_02", value = "carpark_dt1_02" },
    { Name = "carpark_dt1_03", value = "carpark_dt1_03" },
    { Name = "cashdepot", value = "cashdepot" },
    { Name = "cashdepotEMERGENCY", value = "cashdepotEMERGENCY" },
    { Name = "ch2_tunnel_whitelight", value = "ch2_tunnel_whitelight" },
    { Name = "cinema", value = "cinema" },
    { Name = "cinema_001", value = "cinema_001" },
    { Name = "cops", value = "cops" },
    { Name = "crane_cam", value = "crane_cam" },
    { Name = "crane_cam_cinematic", value = "crane_cam_cinematic" },
    { Name = "damage", value = "damage" },
    { Name = "default", value = "default" },
    { Name = "dont_tazeme_bro_b", value = "dont_tazeme_bro_b" },
    { Name = "downtown_FIB_cascades_opt", value = "downtown_FIB_cascades_opt" },
    { Name = "drug_drive_blend01", value = "drug_drive_blend01" },
    { Name = "drug_drive_blend02", value = "drug_drive_blend02" },
    { Name = "drug_flying_01", value = "drug_flying_01" },
    { Name = "drug_flying_02", value = "drug_flying_02" },
    { Name = "drug_flying_base", value = "drug_flying_base" },
    { Name = "drug_wobbly", value = "drug_wobbly" },
    { Name = "dying", value = "dying" },
    { Name = "eatra_bouncelight_beach", value = "eatra_bouncelight_beach" },
    { Name = "epsilion", value = "epsilion" },
    { Name = "exile1_exit", value = "exile1_exit" },
    { Name = "exile1_plane", value = "exile1_plane" },
    { Name = "ext_int_extlight_large", value = "ext_int_extlight_large" },
    { Name = "eyeINtheSKY", value = "eyeINtheSKY" },
    { Name = "facebook_serveroom", value = "facebook_serveroom" },
    { Name = "fireDEPT", value = "fireDEPT" },
    { Name = "fp_vig_black", value = "fp_vig_black" },
    { Name = "fp_vig_blue", value = "fp_vig_blue" },
    { Name = "fp_vig_brown", value = "fp_vig_brown" },
    { Name = "fp_vig_gray", value = "fp_vig_gray" },
    { Name = "fp_vig_green", value = "fp_vig_green" },
    { Name = "fp_vig_red", value = "fp_vig_red" },
    { Name = "frankilnsAUNTS_SUNdir", value = "frankilnsAUNTS_SUNdir" },
    { Name = "frankilnsAUNTS_new", value = "frankilnsAUNTS_new" },
    { Name = "gallery_refmod", value = "gallery_refmod" },
    { Name = "garage", value = "garage" },
    { Name = "gen_bank", value = "gen_bank" },
    { Name = "glasses_Darkblue", value = "glasses_Darkblue" },
    { Name = "glasses_Scuba", value = "glasses_Scuba" },
    { Name = "glasses_VISOR", value = "glasses_VISOR" },
    { Name = "glasses_black", value = "glasses_black" },
    { Name = "glasses_blue", value = "glasses_blue" },
    { Name = "glasses_brown", value = "glasses_brown" },
    { Name = "glasses_green", value = "glasses_green" },
    { Name = "glasses_orange", value = "glasses_orange" },
    { Name = "glasses_pink", value = "glasses_pink" },
    { Name = "glasses_purple", value = "glasses_purple" },
    { Name = "glasses_red", value = "glasses_red" },
    { Name = "glasses_yellow", value = "glasses_yellow" },
    { Name = "gorge_reflection_gpu", value = "gorge_reflection_gpu" },
    { Name = "gorge_reflectionoffset", value = "gorge_reflectionoffset" },
    { Name = "gorge_reflectionoffset2", value = "gorge_reflectionoffset2" },
    { Name = "graveyard_shootout", value = "graveyard_shootout" },
    { Name = "grdlc_int_02", value = "grdlc_int_02" },
    { Name = "grdlc_int_02_trailer_cave", value = "grdlc_int_02_trailer_cave" },
    { Name = "gunclub", value = "gunclub" },
    { Name = "gunclubrange", value = "gunclubrange" },
    { Name = "gunshop", value = "gunshop" },
    { Name = "gunstore", value = "gunstore" },
    { Name = "half_direct", value = "half_direct" },
    { Name = "hangar_lightsmod", value = "hangar_lightsmod" },
    { Name = "heathaze", value = "heathaze" },
    { Name = "heist_boat", value = "heist_boat" },
    { Name = "heist_boat_engineRoom", value = "heist_boat_engineRoom" },
    { Name = "heist_boat_norain", value = "heist_boat_norain" },
    { Name = "heliGunCam", value = "heliGunCam" },
    { Name = "helicamfirst", value = "helicamfirst" },
    { Name = "hillstunnel", value = "hillstunnel" },
    { Name = "hitped", value = "hitped" },
    { Name = "hud_def_Franklin", value = "hud_def_Franklin" },
    { Name = "hud_def_Michael", value = "hud_def_Michael" },
    { Name = "hud_def_Trevor", value = "hud_def_Trevor" },
    { Name = "hud_def_blur", value = "hud_def_blur" },
    { Name = "hud_def_blur_switch", value = "hud_def_blur_switch" },
    { Name = "hud_def_colorgrade", value = "hud_def_colorgrade" },
    { Name = "hud_def_desat_Franklin", value = "hud_def_desat_Franklin" },
    { Name = "hud_def_desat_Michael", value = "hud_def_desat_Michael" },
    { Name = "hud_def_desat_Neutral", value = "hud_def_desat_Neutral" },
    { Name = "hud_def_desat_Trevor", value = "hud_def_desat_Trevor" },
    { Name = "hud_def_desat_cold", value = "hud_def_desat_cold" },
    { Name = "hud_def_desat_cold_kill", value = "hud_def_desat_cold_kill" },
    { Name = "hud_def_desat_switch", value = "hud_def_desat_switch" },
    { Name = "hud_def_desatcrunch", value = "hud_def_desatcrunch" },
    { Name = "hud_def_flash", value = "hud_def_flash" },
    { Name = "hud_def_focus", value = "hud_def_focus" },
    { Name = "hud_def_lensdistortion", value = "hud_def_lensdistortion" },
    { Name = "hud_def_lensdistortion_subtle", value = "hud_def_lensdistortion_subtle" },
    { Name = "id1_11_tunnel", value = "id1_11_tunnel" },
    { Name = "impexp_interior_01_lift", value = "impexp_interior_01_lift" },
    { Name = "int_Barber1", value = "int_Barber1" },
    { Name = "int_ClothesHi", value = "int_ClothesHi" },
    { Name = "int_ControlTower_none", value = "int_ControlTower_none" },
    { Name = "int_ControlTower_small", value = "int_ControlTower_small" },
    { Name = "int_Farmhouse_none", value = "int_Farmhouse_none" },
    { Name = "int_Farmhouse_small", value = "int_Farmhouse_small" },
    { Name = "int_FranklinAunt_small", value = "int_FranklinAunt_small" },
    { Name = "int_GasStation", value = "int_GasStation" },
    { Name = "int_Hospital2_DM", value = "int_Hospital2_DM" },
    { Name = "int_Hospital_Blue", value = "int_Hospital_Blue" },
    { Name = "int_Hospital_BlueB", value = "int_Hospital_BlueB" },
    { Name = "int_Hospital_DM", value = "int_Hospital_DM" },
    { Name = "int_Lost_none", value = "int_Lost_none" },
    { Name = "int_Lost_small", value = "int_Lost_small" },
    { Name = "int_amb_mult_large", value = "int_amb_mult_large" },
    { Name = "int_arena_01", value = "int_arena_01" },
    { Name = "int_arena_Mod", value = "int_arena_Mod" },
    { Name = "int_arena_Mod_garage", value = "int_arena_Mod_garage" },
    { Name = "int_arena_VIP", value = "int_arena_VIP" },
    { Name = "int_carmod_small", value = "int_carmod_small" },
    { Name = "int_carrier_control", value = "int_carrier_control" },
    { Name = "int_carrier_control_2", value = "int_carrier_control_2" },
    { Name = "int_carrier_hanger", value = "int_carrier_hanger" },
    { Name = "int_carrier_rear", value = "int_carrier_rear" },
    { Name = "int_carrier_stair", value = "int_carrier_stair" },
    { Name = "int_carshowroom", value = "int_carshowroom" },
    { Name = "int_chopshop", value = "int_chopshop" },
    { Name = "int_clean_extlight_large", value = "int_clean_extlight_large" },
    { Name = "int_clean_extlight_none", value = "int_clean_extlight_none" },
    { Name = "int_clean_extlight_small", value = "int_clean_extlight_small" },
    { Name = "int_clotheslow_large", value = "int_clotheslow_large" },
    { Name = "int_cluckinfactory_none", value = "int_cluckinfactory_none" },
    { Name = "int_cluckinfactory_small", value = "int_cluckinfactory_small" },
    { Name = "int_dockcontrol_small", value = "int_dockcontrol_small" },
    { Name = "int_extlght_sm_cntrst", value = "int_extlght_sm_cntrst" },
    { Name = "int_extlight_large", value = "int_extlight_large" },
    { Name = "int_extlight_large_fog", value = "int_extlight_large_fog" },
    { Name = "int_extlight_none", value = "int_extlight_none" },
    { Name = "int_extlight_none_dark", value = "int_extlight_none_dark" },
    { Name = "int_extlight_none_dark_fog", value = "int_extlight_none_dark_fog" },
    { Name = "int_extlight_none_fog", value = "int_extlight_none_fog" },
    { Name = "int_extlight_small", value = "int_extlight_small" },
    { Name = "int_extlight_small_clipped", value = "int_extlight_small_clipped" },
    { Name = "int_extlight_small_fog", value = "int_extlight_small_fog" },
    { Name = "int_hanger_none", value = "int_hanger_none" },
    { Name = "int_hanger_small", value = "int_hanger_small" },
    { Name = "int_hospital_dark", value = "int_hospital_dark" },
    { Name = "int_hospital_small", value = "int_hospital_small" },
    { Name = "int_lesters", value = "int_lesters" },
    { Name = "int_methlab_small", value = "int_methlab_small" },
    { Name = "int_motelroom", value = "int_motelroom" },
    { Name = "int_office_Lobby", value = "int_office_Lobby" },
    { Name = "int_office_LobbyHall", value = "int_office_LobbyHall" },
    { Name = "int_tattoo", value = "int_tattoo" },
    { Name = "int_tattoo_B", value = "int_tattoo_B" },
    { Name = "int_tunnel_none_dark", value = "int_tunnel_none_dark" },
    { Name = "interior_WATER_lighting", value = "interior_WATER_lighting" },
    { Name = "introblue", value = "introblue" },
    { Name = "jewel_gas", value = "jewel_gas" },
    { Name = "jewel_optim", value = "jewel_optim" },
    { Name = "jewelry_entrance", value = "jewelry_entrance" },
    { Name = "jewelry_entrance_INT", value = "jewelry_entrance_INT" },
    { Name = "jewelry_entrance_INT_fog", value = "jewelry_entrance_INT_fog" },
    { Name = "lab_none", value = "lab_none" },
    { Name = "lab_none_dark", value = "lab_none_dark" },
    { Name = "lab_none_dark_OVR", value = "lab_none_dark_OVR" },
    { Name = "lab_none_dark_fog", value = "lab_none_dark_fog" },
    { Name = "lab_none_exit", value = "lab_none_exit" },
    { Name = "lab_none_exit_OVR", value = "lab_none_exit_OVR" },
    { Name = "li", value = "li" },
    { Name = "lightning", value = "lightning" },
    { Name = "lightning_cloud", value = "lightning_cloud" },
    { Name = "lightning_strong", value = "lightning_strong" },
    { Name = "lightning_weak", value = "lightning_weak" },
    { Name = "lightpolution", value = "lightpolution" },
    { Name = "lodscaler", value = "lodscaler" },
    { Name = "maxlodscaler", value = "maxlodscaler" },
    { Name = "metro", value = "metro" },
    { Name = "micheal", value = "micheal" },
    { Name = "micheals_lightsOFF", value = "micheals_lightsOFF" },
    { Name = "michealspliff", value = "michealspliff" },
    { Name = "michealspliff_blend", value = "michealspliff_blend" },
    { Name = "michealspliff_blend02", value = "michealspliff_blend02" },
    { Name = "militarybase_nightlight", value = "militarybase_nightlight" },
    { Name = "mineshaft", value = "mineshaft" },
    { Name = "morebloom", value = "morebloom" },
    { Name = "morgue_dark", value = "morgue_dark" },
    { Name = "morgue_dark_ovr", value = "morgue_dark_ovr" },
    { Name = "mp_battle_int01", value = "mp_battle_int01" },
    { Name = "mp_battle_int01_dancefloor", value = "mp_battle_int01_dancefloor" },
    { Name = "mp_battle_int01_dancefloor_OFF", value = "mp_battle_int01_dancefloor_OFF" },
    { Name = "mp_battle_int01_entry", value = "mp_battle_int01_entry" },
    { Name = "mp_battle_int01_garage", value = "mp_battle_int01_garage" },
    { Name = "mp_battle_int01_office", value = "mp_battle_int01_office" },
    { Name = "mp_battle_int02", value = "mp_battle_int02" },
    { Name = "mp_battle_int03", value = "mp_battle_int03" },
    { Name = "mp_battle_int03_tint1", value = "mp_battle_int03_tint1" },
    { Name = "mp_battle_int03_tint2", value = "mp_battle_int03_tint2" },
    { Name = "mp_battle_int03_tint3", value = "mp_battle_int03_tint3" },
    { Name = "mp_battle_int03_tint4", value = "mp_battle_int03_tint4" },
    { Name = "mp_battle_int03_tint5", value = "mp_battle_int03_tint5" },
    { Name = "mp_battle_int03_tint6", value = "mp_battle_int03_tint6" },
    { Name = "mp_battle_int03_tint7", value = "mp_battle_int03_tint7" },
    { Name = "mp_battle_int03_tint8", value = "mp_battle_int03_tint8" },
    { Name = "mp_battle_int03_tint9", value = "mp_battle_int03_tint9" },
    { Name = "mp_bkr_int01_garage", value = "mp_bkr_int01_garage" },
    { Name = "mp_bkr_int01_small_rooms", value = "mp_bkr_int01_small_rooms" },
    { Name = "mp_bkr_int01_transition", value = "mp_bkr_int01_transition" },
    { Name = "mp_bkr_int02_garage", value = "mp_bkr_int02_garage" },
    { Name = "mp_bkr_int02_hangout", value = "mp_bkr_int02_hangout" },
    { Name = "mp_bkr_int02_small_rooms", value = "mp_bkr_int02_small_rooms" },
    { Name = "mp_bkr_ware01", value = "mp_bkr_ware01" },
    { Name = "mp_bkr_ware02_dry", value = "mp_bkr_ware02_dry" },
    { Name = "mp_bkr_ware02_standard", value = "mp_bkr_ware02_standard" },
    { Name = "mp_bkr_ware02_upgrade", value = "mp_bkr_ware02_upgrade" },
    { Name = "mp_bkr_ware03_basic", value = "mp_bkr_ware03_basic" },
    { Name = "mp_bkr_ware03_upgrade", value = "mp_bkr_ware03_upgrade" },
    { Name = "mp_bkr_ware04", value = "mp_bkr_ware04" },
    { Name = "mp_bkr_ware05", value = "mp_bkr_ware05" },
    { Name = "mp_exec_office_01", value = "mp_exec_office_01" },
    { Name = "mp_exec_office_02", value = "mp_exec_office_02" },
    { Name = "mp_exec_office_03", value = "mp_exec_office_03" },
    { Name = "mp_exec_office_03C", value = "mp_exec_office_03C" },
    { Name = "mp_exec_office_03_blue", value = "mp_exec_office_03_blue" },
    { Name = "mp_exec_office_04", value = "mp_exec_office_04" },
    { Name = "mp_exec_office_05", value = "mp_exec_office_05" },
    { Name = "mp_exec_office_06", value = "mp_exec_office_06" },
    { Name = "mp_exec_warehouse_01", value = "mp_exec_warehouse_01" },
    { Name = "mp_gr_int01_black", value = "mp_gr_int01_black" },
    { Name = "mp_gr_int01_grey", value = "mp_gr_int01_grey" },
    { Name = "mp_gr_int01_white", value = "mp_gr_int01_white" },
    { Name = "mp_h_05", value = "mp_h_05" },
    { Name = "mp_h_07", value = "mp_h_07" },
    { Name = "mp_h_08", value = "mp_h_08" },
    { Name = "mp_imx_intwaremed", value = "mp_imx_intwaremed" },
    { Name = "mp_imx_intwaremed_office", value = "mp_imx_intwaremed_office" },
    { Name = "mp_imx_mod_int_01", value = "mp_imx_mod_int_01" },
    { Name = "mp_lad_day", value = "mp_lad_day" },
    { Name = "mp_lad_judgment", value = "mp_lad_judgment" },
    { Name = "mp_lad_night", value = "mp_lad_night" },
    { Name = "mp_nightshark_shield_fp", value = "mp_nightshark_shield_fp" },
    { Name = "mp_smg_int01_han", value = "mp_smg_int01_han" },
    { Name = "mp_smg_int01_han_blue", value = "mp_smg_int01_han_blue" },
    { Name = "mp_smg_int01_han_red", value = "mp_smg_int01_han_red" },
    { Name = "mp_smg_int01_han_yellow", value = "mp_smg_int01_han_yellow" },
    { Name = "mp_x17dlc_base", value = "mp_x17dlc_base" },
    { Name = "mp_x17dlc_base_dark", value = "mp_x17dlc_base_dark" },
    { Name = "mp_x17dlc_base_darkest", value = "mp_x17dlc_base_darkest" },
    { Name = "mp_x17dlc_facility", value = "mp_x17dlc_facility" },
    { Name = "mp_x17dlc_facility2", value = "mp_x17dlc_facility2" },
    { Name = "mp_x17dlc_facility_conference", value = "mp_x17dlc_facility_conference" },
    { Name = "mp_x17dlc_in_sub", value = "mp_x17dlc_in_sub" },
    { Name = "mp_x17dlc_in_sub_no_reflection", value = "mp_x17dlc_in_sub_no_reflection" },
    { Name = "mp_x17dlc_int_01", value = "mp_x17dlc_int_01" },
    { Name = "mp_x17dlc_int_01_tint1", value = "mp_x17dlc_int_01_tint1" },
    { Name = "mp_x17dlc_int_01_tint2", value = "mp_x17dlc_int_01_tint2" },
    { Name = "mp_x17dlc_int_01_tint3", value = "mp_x17dlc_int_01_tint3" },
    { Name = "mp_x17dlc_int_01_tint4", value = "mp_x17dlc_int_01_tint4" },
    { Name = "mp_x17dlc_int_01_tint5", value = "mp_x17dlc_int_01_tint5" },
    { Name = "mp_x17dlc_int_01_tint6", value = "mp_x17dlc_int_01_tint6" },
    { Name = "mp_x17dlc_int_01_tint7", value = "mp_x17dlc_int_01_tint7" },
    { Name = "mp_x17dlc_int_01_tint8", value = "mp_x17dlc_int_01_tint8" },
    { Name = "mp_x17dlc_int_01_tint9", value = "mp_x17dlc_int_01_tint9" },
    { Name = "mp_x17dlc_int_02", value = "mp_x17dlc_int_02" },
    { Name = "mp_x17dlc_int_02_hangar", value = "mp_x17dlc_int_02_hangar" },
    { Name = "mp_x17dlc_int_02_outdoor_intro_camera", value = "mp_x17dlc_int_02_outdoor_intro_camera" },
    { Name = "mp_x17dlc_int_02_tint1", value = "mp_x17dlc_int_02_tint1" },
    { Name = "mp_x17dlc_int_02_tint2", value = "mp_x17dlc_int_02_tint2" },
    { Name = "mp_x17dlc_int_02_tint3", value = "mp_x17dlc_int_02_tint3" },
    { Name = "mp_x17dlc_int_02_tint4", value = "mp_x17dlc_int_02_tint4" },
    { Name = "mp_x17dlc_int_02_tint5", value = "mp_x17dlc_int_02_tint5" },
    { Name = "mp_x17dlc_int_02_tint6", value = "mp_x17dlc_int_02_tint6" },
    { Name = "mp_x17dlc_int_02_tint7", value = "mp_x17dlc_int_02_tint7" },
    { Name = "mp_x17dlc_int_02_tint8", value = "mp_x17dlc_int_02_tint8" },
    { Name = "mp_x17dlc_int_02_tint9", value = "mp_x17dlc_int_02_tint9" },
    { Name = "mp_x17dlc_int_02_vehicle_avenger_camera", value = "mp_x17dlc_int_02_vehicle_avenger_camera" },
    { Name = "mp_x17dlc_int_02_vehicle_workshop_camera", value = "mp_x17dlc_int_02_vehicle_workshop_camera" },
    { Name = "mp_x17dlc_int_02_weapon_avenger_camera", value = "mp_x17dlc_int_02_weapon_avenger_camera" },
    { Name = "mp_x17dlc_int_silo", value = "mp_x17dlc_int_silo" },
    { Name = "mp_x17dlc_int_silo_escape", value = "mp_x17dlc_int_silo_escape" },
    { Name = "mp_x17dlc_lab", value = "mp_x17dlc_lab" },
    { Name = "mp_x17dlc_lab_loading_bay", value = "mp_x17dlc_lab_loading_bay" },
    { Name = "mugShot", value = "mugShot" },
    { Name = "mugShot_lineup", value = "mugShot_lineup" },
    { Name = "multiplayer_ped_fight", value = "multiplayer_ped_fight" },
    { Name = "nervousRON_fog", value = "nervousRON_fog" },
    { Name = "new_MP_Garage_L", value = "new_MP_Garage_L" },
    { Name = "new_bank", value = "new_bank" },
    { Name = "new_stripper_changing", value = "new_stripper_changing" },
    { Name = "new_tunnels_entrance", value = "new_tunnels_entrance" },
    { Name = "nextgen", value = "nextgen" },
    { Name = "nightvision", value = "nightvision" },
    { Name = "overwater", value = "overwater" },
    { Name = "paleto_nightlight", value = "paleto_nightlight" },
    { Name = "paleto_opt", value = "paleto_opt" },
    { Name = "phone_cam", value = "phone_cam" },
    { Name = "phone_cam1", value = "phone_cam1" },
    { Name = "phone_cam10", value = "phone_cam10" },
    { Name = "phone_cam11", value = "phone_cam11" },
    { Name = "phone_cam12", value = "phone_cam12" },
    { Name = "phone_cam13", value = "phone_cam13" },
    { Name = "phone_cam2", value = "phone_cam2" },
    { Name = "phone_cam3", value = "phone_cam3" },
    { Name = "phone_cam3_REMOVED", value = "phone_cam3_REMOVED" },
    { Name = "phone_cam4", value = "phone_cam4" },
    { Name = "phone_cam5", value = "phone_cam5" },
    { Name = "phone_cam6", value = "phone_cam6" },
    { Name = "phone_cam7", value = "phone_cam7" },
    { Name = "phone_cam8", value = "phone_cam8" },
    { Name = "phone_cam8_REMOVED", value = "phone_cam8_REMOVED" },
    { Name = "phone_cam9", value = "phone_cam9" },
    { Name = "plane_inside_mode", value = "plane_inside_mode" },
    { Name = "player_transition", value = "player_transition" },
    { Name = "player_transition_no_scanlines", value = "player_transition_no_scanlines" },
    { Name = "player_transition_scanlines", value = "player_transition_scanlines" },
    { Name = "plaza_carpark", value = "plaza_carpark" },
    { Name = "polluted", value = "polluted" },
    { Name = "poolsidewaterreflection2", value = "poolsidewaterreflection2" },
    { Name = "powerplant_nightlight", value = "powerplant_nightlight" },
    { Name = "powerstation", value = "powerstation" },
    { Name = "prison_nightlight", value = "prison_nightlight" },
    { Name = "projector", value = "projector" },
    { Name = "prologue", value = "prologue" },
    { Name = "prologue_ending_fog", value = "prologue_ending_fog" },
    { Name = "prologue_ext_art_amb", value = "prologue_ext_art_amb" },
    { Name = "prologue_reflection_opt", value = "prologue_reflection_opt" },
    { Name = "prologue_shootout", value = "prologue_shootout" },
    { Name = "pulse", value = "pulse" },
    { Name = "ranch", value = "ranch" },
    { Name = "reducelightingcost", value = "reducelightingcost" },
    { Name = "reducewaterREF", value = "reducewaterREF" },
    { Name = "refit", value = "refit" },
    { Name = "reflection_correct_ambient", value = "reflection_correct_ambient" },
    { Name = "resvoire_reflection", value = "resvoire_reflection" },
    { Name = "rply_brightness", value = "rply_brightness" },
    { Name = "rply_brightness_neg", value = "rply_brightness_neg" },
    { Name = "rply_contrast", value = "rply_contrast" },
    { Name = "rply_contrast_neg", value = "rply_contrast_neg" },
    { Name = "rply_motionblur", value = "rply_motionblur" },
    { Name = "rply_saturation", value = "rply_saturation" },
    { Name = "rply_saturation_neg", value = "rply_saturation_neg" },
    { Name = "rply_vignette", value = "rply_vignette" },
    { Name = "rply_vignette_neg", value = "rply_vignette_neg" },
    { Name = "sandyshore_nightlight", value = "sandyshore_nightlight" },
    { Name = "scanline_cam", value = "scanline_cam" },
    { Name = "scanline_cam_cheap", value = "scanline_cam_cheap" },
    { Name = "scope_zoom_in", value = "scope_zoom_in" },
    { Name = "scope_zoom_out", value = "scope_zoom_out" },
    { Name = "secret_camera", value = "secret_camera" },
    { Name = "services_nightlight", value = "services_nightlight" },
    { Name = "shades_pink", value = "shades_pink" },
    { Name = "shades_yellow", value = "shades_yellow" },
    { Name = "ship_explosion_underwater", value = "ship_explosion_underwater" },
    { Name = "ship_lighting", value = "ship_lighting" },
    { Name = "sleeping", value = "sleeping" },
    { Name = "spectator1", value = "spectator1" },
    { Name = "spectator10", value = "spectator10" },
    { Name = "spectator2", value = "spectator2" },
    { Name = "spectator3", value = "spectator3" },
    { Name = "spectator4", value = "spectator4" },
    { Name = "spectator5", value = "spectator5" },
    { Name = "spectator6", value = "spectator6" },
    { Name = "spectator7", value = "spectator7" },
    { Name = "spectator8", value = "spectator8" },
    { Name = "spectator9", value = "spectator9" },
    { Name = "stc_coroners", value = "stc_coroners" },
    { Name = "stc_deviant_bedroom", value = "stc_deviant_bedroom" },
    { Name = "stc_deviant_lounge", value = "stc_deviant_lounge" },
    { Name = "stc_franklinsHouse", value = "stc_franklinsHouse" },
    { Name = "stc_trevors", value = "stc_trevors" },
    { Name = "stoned", value = "stoned" },
    { Name = "stoned_aliens", value = "stoned_aliens" },
    { Name = "stoned_cutscene", value = "stoned_cutscene" },
    { Name = "stoned_monkeys", value = "stoned_monkeys" },
    { Name = "subBASE_water_ref", value = "subBASE_water_ref" },
    { Name = "sunglasses", value = "sunglasses" },
    { Name = "superDARK", value = "superDARK" },
    { Name = "switch_cam_1", value = "switch_cam_1" },
    { Name = "switch_cam_2", value = "switch_cam_2" },
    { Name = "telescope", value = "telescope" },
    { Name = "torpedo", value = "torpedo" },
    { Name = "traffic_skycam", value = "traffic_skycam" },
    { Name = "trailer_explosion_optimise", value = "trailer_explosion_optimise" },
    { Name = "trevorspliff", value = "trevorspliff" },
    { Name = "trevorspliff_blend", value = "trevorspliff_blend" },
    { Name = "trevorspliff_blend02", value = "trevorspliff_blend02" },
    { Name = "tunnel_entrance", value = "tunnel_entrance" },
    { Name = "tunnel_entrance_INT", value = "tunnel_entrance_INT" },
    { Name = "tunnel_id1_11", value = "tunnel_id1_11" },
    { Name = "ufo", value = "ufo" },
    { Name = "ufo_deathray", value = "ufo_deathray" },
    { Name = "underwater", value = "underwater" },
    { Name = "underwater_deep", value = "underwater_deep" },
    { Name = "underwater_deep_clear", value = "underwater_deep_clear" },
    { Name = "v_abattoir", value = "v_abattoir" },
    { Name = "v_bahama", value = "v_bahama" },
    { Name = "v_cashdepot", value = "v_cashdepot" },
    { Name = "v_dark", value = "v_dark" },
    { Name = "v_foundry", value = "v_foundry" },
    { Name = "v_janitor", value = "v_janitor" },
    { Name = "v_jewel2", value = "v_jewel2" },
    { Name = "v_metro", value = "v_metro" },
    { Name = "v_michael", value = "v_michael" },
    { Name = "v_michael_lounge", value = "v_michael_lounge" },
    { Name = "v_recycle", value = "v_recycle" },
    { Name = "v_rockclub", value = "v_rockclub" },
    { Name = "v_strip3", value = "v_strip3" },
    { Name = "v_strpchangerm", value = "v_strpchangerm" },
    { Name = "v_sweat", value = "v_sweat" },
    { Name = "v_sweat_NoDirLight", value = "v_sweat_NoDirLight" },
    { Name = "v_sweat_entrance", value = "v_sweat_entrance" },
    { Name = "v_torture", value = "v_torture" },
    { Name = "vagos_extlight_small", value = "vagos_extlight_small" },
    { Name = "vehicle_subint", value = "vehicle_subint" },
    { Name = "venice_canal_tunnel", value = "venice_canal_tunnel" },
    { Name = "vespucci_garage", value = "vespucci_garage" },
    { Name = "warehouse", value = "warehouse" },
    { Name = "whitenightlighting", value = "whitenightlighting" },
    { Name = "winning_room", value = "winning_room" },
    { Name = "yacht_DLC", value = "yacht_DLC" },
    { Name = "yell_tunnel_nodirect", value = "yell_tunnel_nodirect" },
}

local rageui_weather = {
        { Name = "Clear", value = "CLEAR" }, 
        { Name = "Extra sunny", value = "EXTRASUNNY" }, 
        { Name = "Clouds", value = "CLOUDS" }, 
        { Name = "Overcast", value = "OVERCAST" }, 
        { Name = "Rain", value = "RAIN" }, 
        { Name = "Clearing", value = "CLEARING" }, 
        { Name = "Thunder", value = "THUNDER" }, 
        { Name = "Smog", value = "SMOG" }, 
        { Name = "Foggy", value = "FOGGY" }, 
        { Name = "Christmas", value = "XMAS" }, 
        { Name = "Snowlight", value = "SNOWLIGHT" }, 
        { Name = "Blizzard", value = "BLIZZARD" }, 
    }

local index = {
    timecycle = 1,
    colored = { [1] = 1, [2] = 1 },
    hour = 0,
    weather = 1,
}

RageUI.CreateWhile(1.0, RMenu:Get('DMT', 'main'), 168, function()   -- Change key here, 51 = E

--- Main Menu
    RageUI.IsVisible(RMenu:Get('DMT', 'main'), true, true, true, function()

    		RageUI.Checkbox("No Clip", "~m~Enable no clip mode", index.NoClipMode, { Style = RageUI.CheckboxStyle.Tick }, function(Hovered, Selected, Active, Checked)
	            if (Selected) then

	            end
	            index.NoClipMode = Checked;
	        end, function()
	            noclipmode = true
	        end, function()
	            noclipmode = false
	            ResetPedRagdollBlockingFlags(GetPlayerPed(-1), 2)
				ResetPedRagdollBlockingFlags(GetPlayerPed(-1), 3)
				SetEntityCollision(GetPlayerPed(-1), true, true)
				FreezeEntityPosition(GetPlayerPed(-1), false)
	        end)

        	RageUI.Checkbox("MLO Infos", "~m~Show interior infos on screen", index.MLOinfos, { Style = RageUI.CheckboxStyle.Tick }, function(Hovered, Selected, Active, Checked)
	            if (Selected) then

	            end
	            index.MLOinfos = Checked;
	        end, function()
	            showinfo = true
	        end, function()
	            showinfo = false
	        end)

            RageUI.Button("Timecycles Menu", "~m~Interract with timecycle of the current room", true, function()
        	end, RMenu:Get('submenu', 'timecycles'))

        	RageUI.Button("Portals Menu", "~m~Interract with portals of the current interior", true, function()
        	end, RMenu:Get('submenu', 'portals'))

        	RageUI.Button("Rooms Menu", "~m~Interract with rooms of the current interior", true, function()
        	end, RMenu:Get('submenu', 'rooms'))

        	RageUI.Button("EntitySets Menu", "~m~Enable/disable EntitySets in interiors", true, function()
        	end, RMenu:Get('submenu', 'entitysets'))

        	RageUI.Button("Teleport Menu", "~m~All needed teleport options", true, function()
        	end, RMenu:Get('submenu', 'teleport'))

        	RageUI.Button("World Menu", "~m~Interact with the whole map world", true, function()
        	end, RMenu:Get('submenu', 'world'))
     
    end, function()
        --- Panels
    end)

--timecycles-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    RageUI.IsVisible(RMenu:Get('submenu', 'timecycles'), true, true, true, function()
        --- Items
        RageUI.List("Set timecycle", rageui_timecycle, index.timecycle, "~m~Select the timecycle you want to apply in the current room.", {}, true, function(Hovered, Active, Selected, Index)
            index.timecycle = Index;
        end, function(Index, CurrentItems)

            setTimecycle(rageui_timecycle[Index].value)

        end)

        RageUI.Button("Set timecycle by name", "~m~Type the timecycle you want to apply in the current room.", true, function(Hovered, Active, Selected)
	       if (Selected) then
                textwindow1()
	            if timecycleCustomName ~= nil then
	            	setTimecycle(timecycleCustomName)
                    RageUI.Text({
                        message = string.format("~b~Current timecycle: ~w~" .. timecycleCustomName)
                    })
	        	end
	        end
	    end)

    end, function()

    end)

--portals------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    RageUI.IsVisible(RMenu:Get('submenu', 'portals'), true, true, true, function()
        --- Items
        RageUI.Checkbox("Portals show", "~m~Fill each portals with a blue plane", index.PortalPoly, { Style = RageUI.CheckboxStyle.Tick }, function(Hovered, Selected, Active, Checked)
            if (Selected) then

            end
            index.PortalPoly = Checked;
        end, function()
            -- Afficher portails infos
            PortalPoly = true
        end, function()
            -- Cacher portails infos
            PortalPoly = false
        end)

        RageUI.Checkbox("Portals outline", "~m~Show portals outline with a red line", index.PortalLines, { Style = RageUI.CheckboxStyle.Tick }, function(Hovered, Selected, Active, Checked)
            if (Selected) then

            end
            index.PortalLines = Checked;
        end, function()
            -- Afficher portails infos
            PortalLines = true
        end, function()
            -- Cacher portails infos
            PortalLines = false
        end)

        RageUI.Checkbox("Portals infos", "~m~Show all portal info on their own coordinates", index.PortalInfos, { Style = RageUI.CheckboxStyle.Tick }, function(Hovered, Selected, Active, Checked)
            if (Selected) then

            end
            index.PortalInfos = Checked;
        end, function()
            -- Afficher portails
            PortalInfos = true
        end, function()
            -- Cacher portails
            PortalInfos = false
        end)

        RageUI.Checkbox("Portals corners", "~m~Show all corners info on their own coordinates", index.PortalCorners, { Style = RageUI.CheckboxStyle.Tick }, function(Hovered, Selected, Active, Checked)
            if (Selected) then

            end
            index.PortalCorners = Checked;
        end, function()
            -- Afficher portails
            PortalCorners = true
        end, function()
            -- Cacher portails
            PortalCorners = false
        end)

        RageUI.Button("Set portal flag", "~m~Set the flag of any portal by typing '[portalIndex] [flag]'.", true, function(Hovered, Active, Selected)
	        if (Selected) then

                textWindow(function(result)
                    -- je récupère result
                    local string = stringsplit2(result, " ")

                    local playerPed = PlayerPedId()
                    local interiorId = GetInteriorFromEntity(playerPed)

                    if interiorId ~= 0 then
                      local portalIndex = tonumber(string[1])
                      local newFlag = tonumber(string[2])

                      SetInteriorPortalFlag(interiorId, portalIndex, newFlag)
                      RefreshInterior(interiorId)
                    end
                end)

	        end
	    end)

    end, function()

    end)

--rooms----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    RageUI.IsVisible(RMenu:Get('submenu', 'rooms'), true, true, true, function()
        --- Items
        RageUI.Button("Set room flag", "~m~Set the cuurent room's flag of any room by typing [flag].", true, function(Hovered, Active, Selected)
	        if (Selected) then
	            
                textWindow(function(result)
                    -- je récupère result
                    local string = stringsplit2(result, ",")

                    local playerPed = PlayerPedId()
                    local interiorId = GetInteriorFromEntity(playerPed)
                    local roomHash = GetRoomKeyFromEntity(playerPed)
                    local roomId = GetInteriorRoomIndexByHash(interiorId, roomHash)

                    if interiorId ~= 0 and roomId ~= -1 then
                      local newFlag = tonumber(string[1])
                      roomId = tonumber(roomId)

                      SetInteriorRoomFlag(interiorId, roomId, newFlag)
                      RefreshInterior(interiorId)
                    end
                end)

	        end
	    end)

    end, function()

    end)

--entitysets------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    RageUI.IsVisible(RMenu:Get('submenu', 'entitysets'), true, true, true, function()
        --- Items
        

	    RageUI.Button("Disable entitySets", "~m~Type the entitySets you want to remove from the current interior.", true, function(Hovered, Active, Selected)
	       if (Selected) then
                textwindow1()
	            if timecycleCustomName ~= nil then
	            	local playerPed = PlayerPedId()
                    local interiorId = GetInteriorFromEntity(playerPed)
	            	DeactivateInteriorEntitySet(interiorId, timecycleCustomName)
	            	RefreshInterior(interiorId)
                    RageUI.Text({
                        message = string.format("~w~EntitySets ~b~" .. timecycleCustomName .. "~w~ disabled")
                    })
	        	end
	        end
	    end)

    end, function()

    end)

--teleport-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    RageUI.IsVisible(RMenu:Get('submenu', 'teleport'), true, true, true, function()
        --- Items
        RageUI.Button("TP Marker", "~m~Teleport to current marker.", true, function(Hovered, Active, Selected)
	        if (Selected) then
	            tpm()
	        end
	    end)

        RageUI.Button("Set custom coords", "~m~Enter custom coords and press 'Go to' to teleport on them.", true, function(Hovered, Active, Selected)
            if (Selected) then
                SetCoords = true
            end
        end)

        RageUI.ButtonWithStyle("Go to [" .. CustomX .. ", " .. CustomY .. ", " .. CustomZ .. "]", "~m~Teleport to your custom coords. ~n~Use previous option to set them.", { RightBadge = RageUI.BadgeStyle.Tick }, true, function(Hovered, Active, Selected)
            if (Selected) then
                RequestCollisionAtCoord(CustomX, CustomY, CustomZ)
                if IsPedInAnyVehicle(GetPlayerPed(-1), 0) and (GetPedInVehicleSeat(GetVehiclePedIsIn(GetPlayerPed(-1), 0), -1) == GetPlayerPed(-1)) then
                    SetEntityCoords(GetVehiclePedIsIn(GetPlayerPed(-1), 0), CustomX, CustomY, CustomZ)
                else
                    SetEntityCoords(GetPlayerPed(-1), CustomX, CustomY, CustomZ)
                end
            end
        end)

    end, function()

    end)

--world-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    RageUI.IsVisible(RMenu:Get('submenu', 'world'), true, true, true, function()
        --- Items
       
        RageUI.Slider("Time", index.hour, 24, "~m~Set the time of day.", false, { }, true, function(Hovered, Selected, Active, Index)
            if (Selected) then
                RageUI.Text({
                    message = string.format("Time set to ~b~" .. index.hour .. ":00")
                })
            end
            index.hour = Index;
            if index.hour >= 24 then
            	index.hour = 0
                changetime(index.hour)
            elseif index.hour <= 23 then
            	NetworkOverrideClockTime(index.hour, 0, 0)
        	else
        		RageUI.Text({
                    message = string.format("Error")
                })
            end
        end)

        RageUI.List("Weather", rageui_weather, index.weather, "~m~Select the weather you want.", {}, true, function(Hovered, Active, Selected, Index)
            index.weather = Index;
        end, function(Index, CurrentItems)

            setWeather(rageui_weather[Index].value)
            RageUI.Text({
                message = string.format("~b~Current weather: ~w~" .. rageui_weather[Index].Name)
            })

        end)

        RageUI.Button("Spawn object", "~m~Type the object name you want to spawn. WARNING !!! If name is not correct, the menu will crash !", true, function(Hovered, Active, Selected)
	       if (Selected) then

		        textWindow(function(result)
			        local playerPed = GetPlayerPed(-1)
			        local coords    = GetEntityCoords(playerPed)
			        local forward   = GetEntityForwardVector(playerPed)
			        local x, y, z   = table.unpack(coords + forward * 1.0)
			        
			        local model = GetHashKey(result)
			        RequestModel(model)
			        while (not HasModelLoaded(model)) do
			            Wait(1)
			        end
			        obj = CreateObject(model, x, y, z, true, false, true)
			        PlaceObjectOnGroundProperly(obj)
			        SetModelAsNoLongerNeeded(model)
			        SetEntityAsMissionEntity(obj)
			        FreezeEntityPosition(obj, true)
			    end)

	        end
	    end)

	    RageUI.Checkbox("Show coords", "~m~Show current position over the minimap", index.coordsOverMap, { Style = RageUI.CheckboxStyle.Tick }, function(Hovered, Selected, Active, Checked)
            if (Selected) then

            end
            index.coordsOverMap = Checked;
        end, function()
            -- Afficher portails infos
            coordsOverMap = true
        end, function()
            -- Cacher portails infos
            coordsOverMap = false
        end)

    end, function()

    end)

end) --Menu end





-- FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


-- TIMECYCLE
function setTimecycle(newTimecycle)
    local playerPed = PlayerPedId()
    local interiorId = GetInteriorFromEntity(playerPed)


    if interiorId ~= 0 then
      local roomHash = GetRoomKeyFromEntity(playerPed)
      local roomId = GetInteriorRoomIndexByHash(interiorId, roomHash)
      local timecycleHash = GetHashKey(newTimecycle)

      SetInteriorRoomTimecycle(interiorId, roomId, timecycleHash)
      RefreshInterior(interiorId)
    end
end

-- WEATHER
function setWeather(newWeather)
	SetWeatherTypeNowPersist(newWeather)
    SetWeatherTypePersist(newWeather)
end

-- TIME
function changetime(hour)
    NetworkOverrideClockTime(hour, 0, 0)
end

-- MLO INFOS
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(5)
            local playerPed = PlayerPedId()
            local interiorId = GetInteriorFromEntity(playerPed)

            if interiorId ~= 0 and showinfo then
                local roomHash = GetRoomKeyFromEntity(playerPed)
                local roomId = GetInteriorRoomIndexByHash(interiorId, roomHash)
                local roomTimecycle = GetInteriorRoomTimecycle(interiorId, roomId)
                local portalCount = GetInteriorPortalCount(interiorId)
                local roomCount = GetInteriorRoomCount(interiorId)
                local roomFlag = GetInteriorRoomFlag(interiorId, roomId)
                local roomName = GetInteriorRoomName(interiorId, roomId)

                dolustring =    "~b~InteriorID: ~w~" .. interiorId ..
                                -- "~n~ ~b~Timecycle Hash: ~w~" .. roomTimecycle ..
                                "~n~ ~b~RoomID: ~w~" .. roomId ..
                                "~n~ ~b~RoomCount: ~w~" .. roomCount-1
            elseif showinfo then
                dolustring = "~o~You are not into an interior!"
            elseif not showinfo then
                dolustring = " "
            end

            SetTextFont(0)
            SetTextProportional(1)
            SetTextScale(0.36, 0.36)
            SetTextColour(255, 255, 255, 255)
            SetTextDropshadow(0, 0, 0, 0, 255)
            SetTextEdge(5, 0, 0, 0, 255)
            SetTextDropShadow()
            SetTextOutline()
            SetTextRightJustify(false)
            SetTextWrap(0,0.55)
            SetTextEntry("STRING")
            
            AddTextComponentString(dolustring)
            DrawText(0.245, 0.01)

            RefreshInterior(InteriorId);
    end
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(5)
            local playerPed = PlayerPedId()
            local interiorId = GetInteriorFromEntity(playerPed)

            if interiorId ~= 0 and showinfo then
                local roomHash = GetRoomKeyFromEntity(playerPed)
                local roomId = GetInteriorRoomIndexByHash(interiorId, roomHash)
                local roomTimecycle = GetInteriorRoomTimecycle(interiorId, roomId)
                local portalCount = GetInteriorPortalCount(interiorId)
                local roomCount = GetInteriorRoomCount(interiorId)
                local roomFlag = GetInteriorRoomFlag(interiorId, roomId)
                local roomName = GetInteriorRoomName(interiorId, roomId)
                local position, nameHash = GetInteriorInfo(interiorId)

                dolustring2 =   "~b~PortalCount: ~w~" .. portalCount ..
                                "~n~ ~b~RoomFlag: ~w~" .. roomFlag ..
                                "~n~ ~b~RoomName: ~w~" .. roomName
                                -- "~n~ ~b~Interior hash: ~w~" ..nameHash
        	elseif showinfo then
                dolustring2 = " "
            elseif not showinfo then
                dolustring2 = " "
            end

            SetTextFont(0)
            SetTextProportional(1)
            SetTextScale(0.36, 0.36)
            SetTextColour(255, 255, 255, 255)
            SetTextDropshadow(0, 0, 0, 0, 255)
            SetTextEdge(5, 0, 0, 0, 255)
            SetTextDropShadow()
            SetTextOutline()
            SetTextRightJustify(false)
            SetTextWrap(0,0.55)
            SetTextEntry("STRING")
            
            AddTextComponentString(dolustring2)
            DrawText(0.245, 0.082)
            
            RefreshInterior(InteriorId);
    end
end)
-- FIN MLO INFOS



-- PORTALS INFOS + PORTAL SHOW 
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        local interiorId = GetInteriorFromEntity(PlayerPedId())
        local pedCoords = GetEntityCoords(PlayerPedId())

        if interiorId ~= 0 and (PortalPoly or PortalLines or PortalCorners or PortalInfos) then
        -- if interiorId ~= 0 then

            local ix, iy, iz = GetInteriorPosition(interiorId)
            local rotX, rotY, rotZ, rotW = GetInteriorRotation(interiorId)
            local YMapInteriorPos = vector3(ix, iy, iz)
            local Orientation = quat(rotW, rotX, rotY, rotZ)
            local countPortals = GetInteriorPortalCount(interiorId)
            local countRooms = GetInteriorRoomCount(interiorId)
            local roomHash = GetRoomKeyFromEntity(PlayerPedId())
            local roomId = GetInteriorRoomIndexByHash(interiorId, roomHash)

            for portalId = 0, countPortals - 1 do
                local corners = {}
                local pureCorners = {}
                for c = 0, 3 do
                    local cx, cy, cz = GetInteriorPortalCornerPosition(interiorId, portalId, c)
                    local PortalCornerPosition = GetInteriorPortalCornerPosition(interiorId, portalId, c)
                    local cornerPosition = YMapInteriorPos + QMultiply(Orientation, vector3(cx, cy, cz))

                    corners[c] = round(cornerPosition, 2)
                    pureCorners[c] = vector3(cx, cy, cz)
                end

                local CrossVector = Lerp(corners[0], corners[3], 0.5)

	            if PortalPoly then 
	                DrawPoly(corners[0].x, corners[0].y, corners[0].z, corners[1].x, corners[1].y, corners[1].z, corners[2].x, corners[2].y, corners[2].z, 0, 0, 200, 100)
	                DrawPoly(corners[0].x, corners[0].y, corners[0].z, corners[2].x, corners[2].y, corners[2].z, corners[3].x, corners[3].y, corners[3].z, 0, 0, 200, 100)
	                DrawPoly(corners[3].x, corners[3].y, corners[3].z, corners[2].x, corners[2].y, corners[2].z, corners[1].x, corners[1].y, corners[1].z, 0, 0, 200, 100)
	                DrawPoly(corners[3].x, corners[3].y, corners[3].z, corners[1].x, corners[1].y, corners[1].z, corners[0].x, corners[0].y, corners[0].z, 0, 0, 200, 100)
	            end

	            if PortalLines then 
                	DrawLine(corners[0].x, corners[0].y, corners[0].z, corners[1].x, corners[1].y, corners[1].z, 255, 0, 0, 255)
                	DrawLine(corners[1].x, corners[1].y, corners[1].z, corners[2].x, corners[2].y, corners[2].z, 255, 0, 0, 255)
                	DrawLine(corners[2].x, corners[2].y, corners[2].z, corners[3].x, corners[3].y, corners[3].z, 255, 0, 0, 255)
                	DrawLine(corners[3].x, corners[3].y, corners[3].z, corners[0].x, corners[0].y, corners[0].z, 255, 0, 0, 255)
            	end


                if (#(pedCoords - CrossVector) <= 8.0) and PortalCorners then
                    Draw3DText(corners[0],"~b~C0:~w~ "..round(pureCorners[0].x, 2).." "..round(pureCorners[0].y, 2).." "..round(pureCorners[0].z, 2))
                    Draw3DText(corners[1],"~b~C1:~w~ "..round(pureCorners[1].x, 2).." "..round(pureCorners[1].y, 2).." "..round(pureCorners[1].z, 2))
                    Draw3DText(corners[2],"~b~C2:~w~ "..round(pureCorners[2].x, 2).." "..round(pureCorners[2].y, 2).." "..round(pureCorners[2].z, 2))
                    Draw3DText(corners[3],"~b~C3:~w~ "..round(pureCorners[3].x, 2).." "..round(pureCorners[3].y, 2).." "..round(pureCorners[3].z, 2))
                end

                if (#(pedCoords - CrossVector) <= 8.0) and PortalInfos then
                    Draw3DText(vec(CrossVector.x, CrossVector.y, CrossVector.z+1.9), "~b~Portal ~w~" .. portalId)
                    local portalFlags = GetInteriorPortalFlag(interiorId, portalId)
                    local portalRoomTo = GetInteriorPortalRoomTo(interiorId, portalId)
                    local portalRoomFrom = GetInteriorPortalRoomFrom(interiorId, portalId)
                    Draw3DText(vec(CrossVector.x, CrossVector.y, CrossVector.z + 1.7), "~b~From ~w~" .. portalRoomFrom .. "~b~ To ~w~" .. portalRoomTo)
                    Draw3DText(vec(CrossVector.x, CrossVector.y, CrossVector.z + 1.5), "~b~Flags ~w~" .. portalFlags)
                end
            end

        end

    end
end)

function round(number, decimals)
    local power = 10 ^ decimals
    return math.floor(number * power) / power
end

function Lerp(a, b, t)
    return a + (b - a) * t
end

function QMultiply(a, b)
    local axx = a.x * 2
    local ayy = a.y * 2
    local azz = a.z * 2
    local awxx = a.w * axx
    local awyy = a.w * ayy
    local awzz = a.w * azz
    local axxx = a.x * axx
    local axyy = a.x * ayy
    local axzz = a.x * azz
    local ayyy = a.y * ayy
    local ayzz = a.y * azz
    local azzz = a.z * azz
    return vector3(((b.x * ((1.0 - ayyy) - azzz)) + (b.y * (axyy - awzz))) + (b.z * (axzz + awyy)),
                ((b.x * (axyy + awzz)) + (b.y * ((1.0 - axxx) - azzz))) + (b.z * (ayzz - awxx)),
                ((b.x * (axzz - awyy)) + (b.y * (ayzz + awxx))) + (b.z * ((1.0 - axxx) - ayyy)))
end

function Draw3DText(DrawCoords, text)
    local onScreen, _x, _y = GetScreenCoordFromWorldCoord(DrawCoords.x, DrawCoords.y, DrawCoords.z)
    local px, py, pz = table.unpack(GetFinalRenderedCamCoord())
    local dist = GetDistanceBetweenCoords(px, py, pz, DrawCoords.x, DrawCoords.y, DrawCoords.z, 1)
    local scale = (1 / dist)
    local fov = (1 / GetGameplayCamFov()) * 100
    local scale = scale * fov

    if onScreen then
        SetTextScale(0.0 * scale, 1.1 * scale)
        SetTextFont(0)
        SetTextProportional(1)
        -- SetTextColour(color.r, color.g, color.b, color.a)
        SetTextDropshadow(0, 0, 0, 0, 255)
        SetTextEdge(2, 0, 0, 0, 150)
        SetTextDropShadow()
        SetTextOutline()
        BeginTextCommandDisplayText("STRING")
        SetTextCentre(1)
        AddTextComponentSubstringPlayerName(text)
        EndTextCommandDisplayText(_x, _y)
    end
end

-- TP MARKER
function tpm()
	local WaypointHandle = GetFirstBlipInfoId(8)

	if DoesBlipExist(WaypointHandle) then
	    local waypointCoords = GetBlipInfoIdCoord(WaypointHandle)

	    for height = 1, 1000 do
	        SetPedCoordsKeepVehicle(PlayerPedId(), waypointCoords["x"], waypointCoords["y"], height + 0.0)

	        local foundGround, zPos = GetGroundZFor_3dCoord(waypointCoords["x"], waypointCoords["y"], height + 0.0)

	        if foundGround then
	            SetPedCoordsKeepVehicle(PlayerPedId(), waypointCoords["x"], waypointCoords["y"], height + 0.0)

	            break
	        end

	        Citizen.Wait(5)
	    end

		RageUI.Text({
	        message = string.format("Teleported")
	    })
	else
	    RageUI.Text({
	        message = string.format("Please place your waypoint.")
	    })
	end
end

-- TP COORDS 
Citizen.CreateThread(function() --Setting Custom Coords
    while true do
        Citizen.Wait(0)
        if SetCoords then
            DisableAllControlActions(0)
            DisplayOnscreenKeyboard(1, "", "","" .. CustomX .. "," .. CustomY .. "," .. CustomZ .. "", "", "", "", 25)

            while UpdateOnscreenKeyboard() ~= 1 and UpdateOnscreenKeyboard() ~= 2 do
                RageUI.Text({
                    message = string.format("~y~Please do not put space")
                })
                Citizen.Wait(0)
            end
            if UpdateOnscreenKeyboard() ~= 2 then
                local result = GetOnscreenKeyboardResult()
                local coords = stringsplit(result, ",")
                if tonumber(coords[1]) == nil then
                    CustomX = 0.0
                else
                    CustomX = 0.0 + tonumber(coords[1])
                end
                if tonumber(coords[2]) == nil then
                    CustomY = 0.0
                else
                    CustomY = 0.0 + tonumber(coords[2])
                end
                if tonumber(coords[3]) == nil then
                    CustomZ = 0.0
                else
                    CustomZ = 0.0 + tonumber(coords[3])
                end
                RageUI.Text({
                    message = string.format("~g~Coords Set!")
                })
                Citizen.Wait(500)
            else
                RageUI.Text({
                    message = string.format("~r~Coords Setting Aborted!")
                })
                Citizen.Wait(500)
            end
            SetCoords = false
            EnableAllControlActions(0)
        end
    end
end)

function stringsplit(input, seperator)
    if seperator == nil then
            seperator = "%s"
    end
    
    local t={} ; i=1
    
    for str in string.gmatch(input, "([^"..seperator.."]+)") do
            t[i] = str
            i = i + 1
    end
    
    return t
end

-- Fenetre de texte + split
 function textWindow(cb)
    DisplayOnscreenKeyboard(1, "FMMC_MPM_NA", "", "", "", "", "", 30)
    while(UpdateOnscreenKeyboard() == 0) do
        DisableAllControlActions(0)
        Wait(0)
    end

    if(GetOnscreenKeyboardResult()) then
        cb(GetOnscreenKeyboardResult())
    end
end

function stringsplit2(inputstr, sep)
    if sep == nil then
        sep = "%s"
    end

    local t, i = {}, 1
    for str in string.gmatch(inputstr, "([^" .. sep .. "]+)") do
        t[i] = str
        i = i + 1
    end

    return t
end

-- FENETRE TEXTE OLD
function textwindow1()

    DisplayOnscreenKeyboard(1, "", "", "", "", "", "", 30)
    while (UpdateOnscreenKeyboard() == 0) do
        DisableAllControlActions(0)
        Wait(0)
    end
    if (GetOnscreenKeyboardResult()) then
        timecycleCustomName = GetOnscreenKeyboardResult()
    end

end

-- NO CLIP
Citizen.CreateThread(function() --(Miscellaneous)
	while true do
		Citizen.Wait(0)

		if noclipmode then
			SetEntityCollision(GetPlayerPed(-1), false, false)
			ClearPedTasksImmediately(GetPlayerPed(-1))
			Citizen.InvokeNative(0x0AFC4AF510774B47)
			if not IsControlPressed(1, 32) and not IsControlPressed(1, 33) and not IsControlPressed(1, 90) and not IsControlPressed(1, 89) then
				FreezeEntityPosition(GetPlayerPed(-1), true)
			end
		end
	end
end)

Citizen.CreateThread(function() --(Forward/ Backward)
	while true do
		Citizen.Wait(0)

		if noclipmode then
			local coords = GetEntityForwardVector(GetPlayerPed(-1))
			if IsControlPressed(1, 33) then --Forward
				FreezeEntityPosition(GetPlayerPed(-1), false)
				ApplyForceToEntity(GetPlayerPed(-1), 1, coords.x * 3, coords.y * 3, 0.27, 0.0, 0.0, 0.0, 1, false, true, true, true, true)
			elseif IsControlPressed(1, 32) then --Backward
				FreezeEntityPosition(GetPlayerPed(-1), false)
				ApplyForceToEntity(GetPlayerPed(-1), 1, coords.x * -3, coords.y * -3, 0.27, 0.0, 0.0, 0.0, 1, false, true, true, true, true)
			end
		end
	end
end)

Citizen.CreateThread(function() --(Up/ Down)
	while true do
		Citizen.Wait(0)

		if noclipmode then
			if IsControlPressed(1, 90) then --Up
				FreezeEntityPosition(GetPlayerPed(-1), false)
				ApplyForceToEntity(GetPlayerPed(-1), 1, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 1, false, true, true, true, true)
			elseif IsControlPressed(1, 89) then --Down
				FreezeEntityPosition(GetPlayerPed(-1), false)
				ApplyForceToEntity(GetPlayerPed(-1), 1, 0.0, 0.0, -5.0, 0.0, 0.0, 0.0, 1, false, true, true, true, true)
			end
		end
	end
end)

Citizen.CreateThread(function() --(Rotation)
	while true do
		Citizen.Wait(0)
		local camRot = GetGameplayCamRot(0)
		if noclipmode then
			SetEntityRotation(GetPlayerPed(-1), 0.0, 0.0, camRot.z+180, 1, true)
		end
	end
end)

--Coords over map
Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)
		local playerPos = GetEntityCoords(GetPlayerPed(-1))
		local playerHeading = GetEntityHeading(GetPlayerPed(-1))
		if coordsOverMap then
			Draw("X: " .. math.ceil(playerPos.x) .."  Y: " .. math.ceil(playerPos.y) .."  Z: " .. math.ceil(playerPos.z) .."  Heading: " .. math.ceil(playerHeading) .."", 35, 93, 168, 255, 0.0175, 0.77, 0.282, 0.282, 1, false, 0)
		end
	end
end)

function Draw(text, r, g, b, alpha, x, y, width, height, layer, center, font)
		SetTextColour(r, g, b, alpha)
		SetTextFont(font)
		SetTextScale(width, height)
		SetTextWrap(0.0, 1.0)
		SetTextCentre(center)
		SetTextDropshadow(1, 1, 1, 1, 255);
        SetTextEdge(2, 0, 0, 0, 150);
		SetTextOutline(200, 200, 200, 255)
		SetTextEntry("STRING")
		AddTextComponentString(text)
		Citizen.InvokeNative(0x61BB1D9B3A95D802, layer)
		DrawText(x, y)
end

-- Hey, this is the end.. Do you want to contribute ? Let's contribute: https://github.com/dolutattoo/DoluMappingTool