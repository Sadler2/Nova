export enum InputGroups {
  INPUTGROUP_MOVE = 0,
  INPUTGROUP_LOOK = 1,
  INPUTGROUP_WHEEL = 2,
  INPUTGROUP_CELLPHONE_NAVIGATE = 3,
  INPUTGROUP_CELLPHONE_NAVIGATE_UD = 4,
  INPUTGROUP_CELLPHONE_NAVIGATE_LR = 5,
  INPUTGROUP_FRONTEND_DPAD_ALL = 6,
  INPUTGROUP_FRONTEND_DPAD_UD = 7,
  INPUTGROUP_FRONTEND_DPAD_LR = 8,
  INPUTGROUP_FRONTEND_LSTICK_ALL = 9,
  INPUTGROUP_FRONTEND_RSTICK_ALL = 10,
  INPUTGROUP_FRONTEND_GENERIC_UD = 11,
  INPUTGROUP_FRONTEND_GENERIC_LR = 12,
  INPUTGROUP_FRONTEND_GENERIC_ALL = 13,
  INPUTGROUP_FRONTEND_BUMPERS = 14,
  INPUTGROUP_FRONTEND_TRIGGERS = 15,
  INPUTGROUP_FRONTEND_STICKS = 16,
  INPUTGROUP_SCRIPT_DPAD_ALL = 17,
  INPUTGROUP_SCRIPT_DPAD_UD = 18,
  INPUTGROUP_SCRIPT_DPAD_LR = 19,
  INPUTGROUP_SCRIPT_LSTICK_ALL = 20,
  INPUTGROUP_SCRIPT_RSTICK_ALL = 21,
  INPUTGROUP_SCRIPT_BUMPERS = 22,
  INPUTGROUP_SCRIPT_TRIGGERS = 23,
  INPUTGROUP_WEAPON_WHEEL_CYCLE = 24,
  INPUTGROUP_FLY = 25,
  INPUTGROUP_SUB = 26,
  INPUTGROUP_VEH_MOVE_ALL = 27,
  INPUTGROUP_CURSOR = 28,
  INPUTGROUP_CURSOR_SCROLL = 29,
  INPUTGROUP_SNIPER_ZOOM_SECONDARY = 30,
  INPUTGROUP_VEH_HYDRAULICS_DisabledControl = 31,
  MAX_INPUTGROUPS = 32,
  INPUTGROUP_INVALID = 33,
}

export enum Controls {
  NEXT_CAMERA = 0, //	V	,	BACK
  LOOK_LR = 1, //	MOUSE RIGHT	,	RIGHT STICK
  LOOK_UD = 2, //	MOUSE DOWN	,	RIGHT STICK
  LOOK_UP_ONLY = 3, //	(NONE)	,	RIGHT STICK
  LOOK_DOWN_ONLY = 4, //	MOUSE DOWN	,	RIGHT STICK
  LOOK_LEFT_ONLY = 5, //	(NONE)	,	RIGHT STICK
  LOOK_RIGHT_ONLY = 6, //	MOUSE RIGHT	,	RIGHT STICK
  CINEMATIC_SLOWMO = 7, //	(NONE)	,	R3
  SCRIPTED_FLY_UD = 8, //	S	,	LEFT STICK
  SCRIPTED_FLY_LR = 9, //	D	,	LEFT STICK
  SCRIPTED_FLY_ZUP = 10, //	PAGEUP	,	LT
  SCRIPTED_FLY_ZDOWN = 11, //	PAGEDOWN	,	RT
  WEAPON_WHEEL_UD = 12, //	MOUSE DOWN	,	RIGHT STICK
  WEAPON_WHEEL_LR = 13, //	MOUSE RIGHT	,	RIGHT STICK
  WEAPON_WHEEL_NEXT = 14, //	SCROLLWHEEL DOWN	,	DPAD RIGHT
  WEAPON_WHEEL_PREV = 15, //	SCROLLWHEEL UP	,	DPAD LEFT
  SELECT_NEXT_WEAPON = 16, //	SCROLLWHEEL DOWN	,	(NONE)
  SELECT_PREV_WEAPON = 17, //	SCROLLWHEEL UP	,	(NONE)
  SKIP_CUTSCENE = 18, //	ENTER / LEFT MOUSE BUTTON / SPACEBAR	,	A
  CHARACTER_WHEEL = 19, //	LEFT ALT	,	DPAD DOWN
  MULTIPLAYER_INFO = 20, //	Z	,	DPAD DOWN
  SPRINT = 21, //	LEFT SHIFT	,	A
  JUMP = 22, //	SPACEBAR	,	X
  ENTER = 23, //	F	,	Y
  ATTACK = 24, //	LEFT MOUSE BUTTON	,	RT
  AIM = 25, //	RIGHT MOUSE BUTTON	,	LT
  LOOK_BEHIND = 26, //	C	,	R3
  PHONE = 27, //	ARROW UP / SCROLLWHEEL BUTTON (PRESS)	,	DPAD UP
  SPECIAL_ABILITY = 28, //	(NONE)	,	L3
  SPECIAL_ABILITY_SECONDARY = 29, //	B	,	R3
  MOVE_LR = 30, //	D	,	LEFT STICK
  MOVE_UD = 31, //	S	,	LEFT STICK
  MOVE_UP_ONLY = 32, //	W	,	LEFT STICK
  MOVE_DOWN_ONLY = 33, //	S	,	LEFT STICK
  MOVE_LEFT_ONLY = 34, //	A	,	LEFT STICK
  MOVE_RIGHT_ONLY = 35, //	D	,	LEFT STICK
  DUCK = 36, //	LEFT CTRL	,	L3
  SELECT_WEAPON = 37, //	TAB	,	LB
  PICKUP = 38, //	E	,	LB
  SNIPER_ZOOM = 39, //	[	,	LEFT STICK
  SNIPER_ZOOM_IN_ONLY = 40, //	]	,	LEFT STICK
  SNIPER_ZOOM_OUT_ONLY = 41, //	[	,	LEFT STICK
  SNIPER_ZOOM_IN_SECONDARY = 42, //	]	,	DPAD UP
  SNIPER_ZOOM_OUT_SECONDARY = 43, //	[	,	DPAD DOWN
  COVER = 44, //	Q	,	RB
  RELOAD = 45, //	R	,	B
  TALK = 46, //	E	,	DPAD RIGHT
  DETONATE = 47, //	G	,	DPAD LEFT
  HUD_SPECIAL = 48, //	Z	,	DPAD DOWN
  ARREST = 49, //	F	,	Y
  ACCURATE_AIM = 50, //	SCROLLWHEEL DOWN	,	R3
  CONTEXT = 51, //	E	,	DPAD RIGHT
  CONTEXT_SECONDARY = 52, //	Q	,	DPAD LEFT
  WEAPON_SPECIAL = 53, //	(NONE)	,	Y
  WEAPON_SPECIAL_TWO = 54, //	E	,	DPAD RIGHT
  DIVE = 55, //	SPACEBAR	,	RB
  DROP_WEAPON = 56, //	F9	,	Y
  DROP_AMMO = 57, //	F10	,	B
  THROW_GRENADE = 58, //	G	,	DPAD LEFT
  VEH_MOVE_LR = 59, //	D	,	LEFT STICK
  VEH_MOVE_UD = 60, //	LEFT CTRL	,	LEFT STICK
  VEH_MOVE_UP_ONLY = 61, //	LEFT SHIFT	,	LEFT STICK
  VEH_MOVE_DOWN_ONLY = 62, //	LEFT CTRL	,	LEFT STICK
  VEH_MOVE_LEFT_ONLY = 63, //	A	,	LEFT STICK
  VEH_MOVE_RIGHT_ONLY = 64, //	D	,	LEFT STICK
  VEH_SPECIAL = 65, //	(NONE)	,	(NONE)
  VEH_GUN_LR = 66, //	MOUSE RIGHT	,	RIGHT STICK
  VEH_GUN_UD = 67, //	MOUSE DOWN	,	RIGHT STICK
  VEH_AIM = 68, //	RIGHT MOUSE BUTTON	,	LB
  VEH_ATTACK = 69, //	LEFT MOUSE BUTTON	,	RB
  VEH_ATTACK2 = 70, //	RIGHT MOUSE BUTTON	,	A
  VEH_ACCELERATE = 71, //	W	,	RT
  VEH_BRAKE = 72, //	S	,	LT
  VEH_DUCK = 73, //	X	,	A
  VEH_HEADLIGHT = 74, //	H	,	DPAD RIGHT
  VEH_EXIT = 75, //	F	,	Y
  VEH_HANDBRAKE = 76, //	SPACEBAR	,	RB
  VEH_HOTWIRE_LEFT = 77, //	W	,	LT
  VEH_HOTWIRE_RIGHT = 78, //	S	,	RT
  VEH_LOOK_BEHIND = 79, //	C	,	R3
  VEH_CIN_CAM = 80, //	R	,	B
  VEH_NEXT_RADIO = 81, //	.	,	(NONE)
  VEH_PREV_RADIO = 82, //	,	,	(NONE)
  VEH_NEXT_RADIO_TRACK = 83, //	=	,	(NONE)
  VEH_PREV_RADIO_TRACK = 84, //	-	,	(NONE)
  VEH_RADIO_WHEEL = 85, //	Q	,	DPAD LEFT
  VEH_HORN = 86, //	E	,	L3
  VEH_FLY_THROTTLE_UP = 87, //	W	,	RT
  VEH_FLY_THROTTLE_DOWN = 88, //	S	,	LT
  VEH_FLY_YAW_LEFT = 89, //	A	,	LB
  VEH_FLY_YAW_RIGHT = 90, //	D	,	RB
  VEH_PASSENGER_AIM = 91, //	RIGHT MOUSE BUTTON	,	LT
  VEH_PASSENGER_ATTACK = 92, //	LEFT MOUSE BUTTON	,	RT
  VEH_SPECIAL_ABILITY_FRANKLIN = 93, //	(NONE)	,	R3
  VEH_STUNT_UD = 94, //	(NONE)	,	(NONE)
  VEH_CINEMATIC_UD = 95, //	MOUSE DOWN	,	RIGHT STICK
  VEH_CINEMATIC_UP_ONLY = 96, //	NUMPAD- / SCROLLWHEEL UP	,	(NONE)
  VEH_CINEMATIC_DOWN_ONLY = 97, //	NUMPAD+ / SCROLLWHEEL DOWN	,	(NONE)
  VEH_CINEMATIC_LR = 98, //	MOUSE RIGHT	,	RIGHT STICK
  VEH_SELECT_NEXT_WEAPON = 99, //	SCROLLWHEEL UP	,	X
  VEH_SELECT_PREV_WEAPON = 100, //	[	,	(NONE)
  VEH_ROOF = 101, //	H	,	DPAD RIGHT
  VEH_JUMP = 102, //	SPACEBAR	,	RB
  VEH_GRAPPLING_HOOK = 103, //	E	,	DPAD RIGHT
  VEH_SHUFFLE = 104, //	H	,	DPAD RIGHT
  VEH_DROP_PROJECTILE = 105, //	X	,	A
  VEH_MOUSE_CONTROL_OVERRIDE = 106, //	LEFT MOUSE BUTTON	,	(NONE)
  VEH_FLY_ROLL_LR = 107, //	NUMPAD 6	,	LEFT STICK
  VEH_FLY_ROLL_LEFT_ONLY = 108, //	NUMPAD 4	,	LEFT STICK
  VEH_FLY_ROLL_RIGHT_ONLY = 109, //	NUMPAD 6	,	LEFT STICK
  VEH_FLY_PITCH_UD = 110, //	NUMPAD 5	,	LEFT STICK
  VEH_FLY_PITCH_UP_ONLY = 111, //	NUMPAD 8	,	LEFT STICK
  VEH_FLY_PITCH_DOWN_ONLY = 112, //	NUMPAD 5	,	LEFT STICK
  VEH_FLY_UNDERCARRIAGE = 113, //	G	,	L3
  VEH_FLY_ATTACK = 114, //	RIGHT MOUSE BUTTON	,	A
  VEH_FLY_SELECT_NEXT_WEAPON = 115, //	SCROLLWHEEL UP	,	DPAD LEFT
  VEH_FLY_SELECT_PREV_WEAPON = 116, //	[	,	(NONE)
  VEH_FLY_SELECT_TARGET_LEFT = 117, //	NUMPAD 7	,	LB
  VEH_FLY_SELECT_TARGET_RIGHT = 118, //	NUMPAD 9	,	RB
  VEH_FLY_VERTICAL_FLIGHT_MODE = 119, //	E	,	DPAD RIGHT
  VEH_FLY_DUCK = 120, //	X	,	A
  VEH_FLY_ATTACK_CAMERA = 121, //	INSERT	,	R3
  VEH_FLY_MOUSE_CONTROL_OVERRIDE = 122, //	LEFT MOUSE BUTTON	,	(NONE)
  VEH_SUB_TURN_LR = 123, //	NUMPAD 6	,	LEFT STICK
  VEH_SUB_TURN_LEFT_ONLY = 124, //	NUMPAD 4	,	LEFT STICK
  VEH_SUB_TURN_RIGHT_ONLY = 125, //	NUMPAD 6	,	LEFT STICK
  VEH_SUB_PITCH_UD = 126, //	NUMPAD 5	,	LEFT STICK
  VEH_SUB_PITCH_UP_ONLY = 127, //	NUMPAD 8	,	LEFT STICK
  VEH_SUB_PITCH_DOWN_ONLY = 128, //	NUMPAD 5	,	LEFT STICK
  VEH_SUB_THROTTLE_UP = 129, //	W	,	RT
  VEH_SUB_THROTTLE_DOWN = 130, //	S	,	LT
  VEH_SUB_ASCEND = 131, //	LEFT SHIFT	,	X
  VEH_SUB_DESCEND = 132, //	LEFT CTRL	,	A
  VEH_SUB_TURN_HARD_LEFT = 133, //	A	,	LB
  VEH_SUB_TURN_HARD_RIGHT = 134, //	D	,	RB
  VEH_SUB_MOUSE_CONTROL_OVERRIDE = 135, //	LEFT MOUSE BUTTON	,	(NONE)
  VEH_PUSHBIKE_PEDAL = 136, //	W	,	A
  VEH_PUSHBIKE_SPRINT = 137, //	CAPSLOCK	,	A
  VEH_PUSHBIKE_FRONT_BRAKE = 138, //	Q	,	LT
  VEH_PUSHBIKE_REAR_BRAKE = 139, //	S	,	RT
  MELEE_ATTACK_LIGHT = 140, //	R	,	B
  MELEE_ATTACK_HEAVY = 141, //	Q	,	A
  MELEE_ATTACK_ALTERNATE = 142, //	LEFT MOUSE BUTTON	,	RT
  MELEE_BLOCK = 143, //	SPACEBAR	,	X
  PARACHUTE_DEPLOY = 144, //	F / LEFT MOUSE BUTTON	,	Y
  PARACHUTE_DETACH = 145, //	F	,	Y
  PARACHUTE_TURN_LR = 146, //	D	,	LEFT STICK
  PARACHUTE_TURN_LEFT_ONLY = 147, //	A	,	LEFT STICK
  PARACHUTE_TURN_RIGHT_ONLY = 148, //	D	,	LEFT STICK
  PARACHUTE_PITCH_UD = 149, //	S	,	LEFT STICK
  PARACHUTE_PITCH_UP_ONLY = 150, //	W	,	LEFT STICK
  PARACHUTE_PITCH_DOWN_ONLY = 151, //	S	,	LEFT STICK
  PARACHUTE_BRAKE_LEFT = 152, //	Q	,	LB
  PARACHUTE_BRAKE_RIGHT = 153, //	E	,	RB
  PARACHUTE_SMOKE = 154, //	X	,	A
  PARACHUTE_PRECISION_LANDING = 155, //	LEFT SHIFT	,	(NONE)
  MAP = 156, //	(NONE)	,	(NONE)
  SELECT_WEAPON_UNARMED = 157, //	1	,	(NONE)
  SELECT_WEAPON_MELEE = 158, //	2	,	(NONE)
  SELECT_WEAPON_HANDGUN = 159, //	6	,	(NONE)
  SELECT_WEAPON_SHOTGUN = 160, //	3	,	(NONE)
  SELECT_WEAPON_SMG = 161, //	7	,	(NONE)
  SELECT_WEAPON_AUTO_RIFLE = 162, //	8	,	(NONE)
  SELECT_WEAPON_SNIPER = 163, //	9	,	(NONE)
  SELECT_WEAPON_HEAVY = 164, //	4	,	(NONE)
  SELECT_WEAPON_SPECIAL = 165, //	5	,	(NONE)
  SELECT_CHARACTER_MICHAEL = 166, //	F5	,	(NONE)
  SELECT_CHARACTER_FRANKLIN = 167, //	F6	,	(NONE)
  SELECT_CHARACTER_TREVOR = 168, //	F7	,	(NONE)
  SELECT_CHARACTER_MULTIPLAYER = 169, //	F8 (CONSOLE)	,	(NONE)
  SAVE_REPLAY_CLIP = 170, //	F3	,	B
  SPECIAL_ABILITY_PC = 171, //	CAPSLOCK	,	(NONE)
  CELLPHONE_UP = 172, //	ARROW UP	,	DPAD UP
  CELLPHONE_DOWN = 173, //	ARROW DOWN	,	DPAD DOWN
  CELLPHONE_LEFT = 174, //	ARROW LEFT	,	DPAD LEFT
  CELLPHONE_RIGHT = 175, //	ARROW RIGHT	,	DPAD RIGHT
  CELLPHONE_SELECT = 176, //	ENTER / LEFT MOUSE BUTTON	,	A
  CELLPHONE_CANCEL = 177, //	BACKSPACE / ESC / RIGHT MOUSE BUTTON	,	B
  CELLPHONE_OPTION = 178, //	DELETE	,	Y
  CELLPHONE_EXTRA_OPTION = 179, //	SPACEBAR	,	X
  CELLPHONE_SCROLL_FORWARD = 180, //	SCROLLWHEEL DOWN	,	(NONE)
  CELLPHONE_SCROLL_BACKWARD = 181, //	SCROLLWHEEL UP	,	(NONE)
  CELLPHONE_CAMERA_FOCUS_LOCK = 182, //	L	,	RT
  CELLPHONE_CAMERA_GRID = 183, //	G	,	RB
  CELLPHONE_CAMERA_SELFIE = 184, //	E	,	R3
  CELLPHONE_CAMERA_DOF = 185, //	F	,	LB
  CELLPHONE_CAMERA_EXPRESSION = 186, //	X	,	L3
  FRONTEND_DOWN = 187, //	ARROW DOWN	,	DPAD DOWN
  FRONTEND_UP = 188, //	ARROW UP	,	DPAD UP
  FRONTEND_LEFT = 189, //	ARROW LEFT	,	DPAD LEFT
  FRONTEND_RIGHT = 190, //	ARROW RIGHT	,	DPAD RIGHT
  FRONTEND_RDOWN = 191, //	ENTER	,	A
  FRONTEND_RUP = 192, //	TAB	,	Y
  FRONTEND_RLEFT = 193, //	(NONE)	,	X
  FRONTEND_RRIGHT = 194, //	BACKSPACE	,	B
  FRONTEND_AXIS_X = 195, //	D	,	LEFT STICK
  FRONTEND_AXIS_Y = 196, //	S	,	LEFT STICK
  FRONTEND_RIGHT_AXIS_X = 197, //	]	,	RIGHT STICK
  FRONTEND_RIGHT_AXIS_Y = 198, //	SCROLLWHEEL DOWN	,	RIGHT STICK
  FRONTEND_PAUSE = 199, //	P	,	START
  FRONTEND_PAUSE_ALTERNATE = 200, //	ESC	,	(NONE)
  FRONTEND_ACCEPT = 201, //	ENTER / NUMPAD ENTER	,	A
  FRONTEND_CANCEL = 202, //	BACKSPACE / ESC	,	B
  FRONTEND_X = 203, //	SPACEBAR	,	X
  FRONTEND_Y = 204, //	TAB	,	Y
  FRONTEND_LB = 205, //	Q	,	LB
  FRONTEND_RB = 206, //	E	,	RB
  FRONTEND_LT = 207, //	PAGE DOWN	,	LT
  FRONTEND_RT = 208, //	PAGE UP	,	RT
  FRONTEND_LS = 209, //	LEFT SHIFT	,	L3
  FRONTEND_RS = 210, //	LEFT CONTROL	,	R3
  FRONTEND_LEADERBOARD = 211, //	TAB	,	RB
  FRONTEND_SOCIAL_CLUB = 212, //	HOME	,	BACK
  FRONTEND_SOCIAL_CLUB_SECONDARY = 213, //	HOME	,	RB
  FRONTEND_DELETE = 214, //	DELETE	,	X
  FRONTEND_ENDSCREEN_ACCEPT = 215, //	ENTER	,	A
  FRONTEND_ENDSCREEN_EXPAND = 216, //	SPACEBAR	,	X
  FRONTEND_SELECT = 217, //	CAPSLOCK	,	BACK
  SCRIPT_LEFT_AXIS_X = 218, //	D	,	LEFT STICK
  SCRIPT_LEFT_AXIS_Y = 219, //	S	,	LEFT STICK
  SCRIPT_RIGHT_AXIS_X = 220, //	MOUSE RIGHT	,	RIGHT STICK
  SCRIPT_RIGHT_AXIS_Y = 221, //	MOUSE DOWN	,	RIGHT STICK
  SCRIPT_RUP = 222, //	RIGHT MOUSE BUTTON	,	Y
  SCRIPT_RDOWN = 223, //	LEFT MOUSE BUTTON	,	A
  SCRIPT_RLEFT = 224, //	LEFT CTRL	,	X
  SCRIPT_RRIGHT = 225, //	RIGHT MOUSE BUTTON	,	B
  SCRIPT_LB = 226, //	(NONE)	,	LB
  SCRIPT_RB = 227, //	(NONE)	,	RB
  SCRIPT_LT = 228, //	(NONE)	,	LT
  SCRIPT_RT = 229, //	LEFT MOUSE BUTTON	,	RT
  SCRIPT_LS = 230, //	(NONE)	,	L3
  SCRIPT_RS = 231, //	(NONE)	,	R3
  SCRIPT_PAD_UP = 232, //	W	,	DPAD UP
  SCRIPT_PAD_DOWN = 233, //	S	,	DPAD DOWN
  SCRIPT_PAD_LEFT = 234, //	A	,	DPAD LEFT
  SCRIPT_PAD_RIGHT = 235, //	D	,	DPAD RIGHT
  SCRIPT_SELECT = 236, //	V	,	BACK
  CURSOR_ACCEPT = 237, //	LEFT MOUSE BUTTON	,	(NONE)
  CURSOR_CANCEL = 238, //	RIGHT MOUSE BUTTON	,	(NONE)
  CURSOR_X = 239, //	(NONE)	,	(NONE)
  CURSOR_Y = 240, //	(NONE)	,	(NONE)
  CURSOR_SCROLL_UP = 241, //	SCROLLWHEEL UP	,	(NONE)
  CURSOR_SCROLL_DOWN = 242, //	SCROLLWHEEL DOWN	,	(NONE)
  ENTER_CHEAT_CODE = 243, //	~ / `	,	(NONE)
  INTERACTION_MENU = 244, //	M	,	BACK
  MP_TEXT_CHAT_ALL = 245, //	T	,	(NONE)
  MP_TEXT_CHAT_TEAM = 246, //	Y	,	(NONE)
  MP_TEXT_CHAT_FRIENDS = 247, //	(NONE)	,	(NONE)
  MP_TEXT_CHAT_CREW = 248, //	(NONE)	,	(NONE)
  PUSH_TO_TALK = 249, //	N	,	(NONE)
  CREATOR_LS = 250, //	R	,	L3
  CREATOR_RS = 251, //	F	,	R3
  CREATOR_LT = 252, //	X	,	LT
  CREATOR_RT = 253, //	C	,	RT
  CREATOR_MENU_TOGGLE = 254, //	LEFT SHIFT	,	(NONE)
  CREATOR_ACCEPT = 255, //	SPACEBAR	,	A
  CREATOR_DELETE = 256, //	DELETE	,	X
  ATTACK2 = 257, //	LEFT MOUSE BUTTON	,	RT
  RAPPEL_JUMP = 258, //	(NONE)	,	A
  RAPPEL_LONG_JUMP = 259, //	(NONE)	,	X
  RAPPEL_SMASH_WINDOW = 260, //	(NONE)	,	RT
  PREV_WEAPON = 261, //	SCROLLWHEEL UP	,	DPAD LEFT
  NEXT_WEAPON = 262, //	SCROLLWHEEL DOWN	,	DPAD RIGHT
  MELEE_ATTACK1 = 263, //	R	,	B
  MELEE_ATTACK2 = 264, //	Q	,	A
  WHISTLE = 265, //	(NONE)	,	(NONE)
  MOVE_LEFT = 266, //	D	,	LEFT STICK
  MOVE_RIGHT = 267, //	D	,	LEFT STICK
  MOVE_UP = 268, //	S	,	LEFT STICK
  MOVE_DOWN = 269, //	S	,	LEFT STICK
  LOOK_LEFT = 270, //	MOUSE RIGHT	,	RIGHT STICK
  LOOK_RIGHT = 271, //	MOUSE RIGHT	,	RIGHT STICK
  LOOK_UP = 272, //	MOUSE DOWN	,	RIGHT STICK
  LOOK_DOWN = 273, //	MOUSE DOWN	,	RIGHT STICK
  SNIPER_ZOOM_IN = 274, //	[	,	RIGHT STICK
  SNIPER_ZOOM_OUT = 275, //	[	,	RIGHT STICK
  SNIPER_ZOOM_IN_ALTERNATE = 276, //	[	,	LEFT STICK
  SNIPER_ZOOM_OUT_ALTERNATE = 277, //	[	,	LEFT STICK
  VEH_MOVE_LEFT = 278, //	D	,	LEFT STICK
  VEH_MOVE_RIGHT = 279, //	D	,	LEFT STICK
  VEH_MOVE_UP = 280, //	LEFT CTRL	,	LEFT STICK
  VEH_MOVE_DOWN = 281, //	LEFT CTRL	,	LEFT STICK
  VEH_GUN_LEFT = 282, //	MOUSE RIGHT	,	RIGHT STICK
  VEH_GUN_RIGHT = 283, //	MOUSE RIGHT	,	RIGHT STICK
  VEH_GUN_UP = 284, //	MOUSE RIGHT	,	RIGHT STICK
  VEH_GUN_DOWN = 285, //	MOUSE RIGHT	,	RIGHT STICK
  VEH_LOOK_LEFT = 286, //	MOUSE RIGHT	,	RIGHT STICK
  VEH_LOOK_RIGHT = 287, //	MOUSE RIGHT	,	RIGHT STICK
  REPLAY_START_STOP_RECORDING = 288, //	F1	,	A
  REPLAY_START_STOP_RECORDING_SECONDARY = 289, //	F2	,	X
  SCALED_LOOK_LR = 290, //	MOUSE RIGHT	,	RIGHT STICK
  SCALED_LOOK_UD = 291, //	MOUSE DOWN	,	RIGHT STICK
  SCALED_LOOK_UP_ONLY = 292, //	(NONE)	,	RIGHT STICK
  SCALED_LOOK_DOWN_ONLY = 293, //	(NONE)	,	RIGHT STICK
  SCALED_LOOK_LEFT_ONLY = 294, //	(NONE)	,	RIGHT STICK
  SCALED_LOOK_RIGHT_ONLY = 295, //	(NONE)	,	RIGHT STICK
  REPLAY_MARKER_DELETE = 296, //	DELETE	,	X
  REPLAY_CLIP_DELETE = 297, //	DELETE	,	Y
  REPLAY_PAUSE = 298, //	SPACEBAR	,	A
  REPLAY_REWIND = 299, //	ARROW DOWN	,	LB
  REPLAY_FFWD = 300, //	ARROW UP	,	RB
  REPLAY_NEWMARKER = 301, //	M	,	A
  REPLAY_RECORD = 302, //	S	,	(NONE)
  REPLAY_SCREENSHOT = 303, //	U	,	DPAD UP
  REPLAY_HIDEHUD = 304, //	H	,	R3
  REPLAY_STARTPOINT = 305, //	B	,	(NONE)
  REPLAY_ENDPOINT = 306, //	N	,	(NONE)
  REPLAY_ADVANCE = 307, //	ARROW RIGHT	,	DPAD RIGHT
  REPLAY_BACK = 308, //	ARROW LEFT	,	DPAD LEFT
  REPLAY_TOOLS = 309, //	T	,	DPAD DOWN
  REPLAY_RESTART = 310, //	R	,	BACK
  REPLAY_SHOWHOTKEY = 311, //	K	,	DPAD DOWN
  REPLAY_CYCLEMARKERLEFT = 312, //	[	,	DPAD LEFT
  REPLAY_CYCLEMARKERRIGHT = 313, //	]	,	DPAD RIGHT
  REPLAY_FOVINCREASE = 314, //	NUMPAD +	,	RB
  REPLAY_FOVDECREASE = 315, //	NUMPAD -	,	LB
  REPLAY_CAMERAUP = 316, //	PAGE UP	,	(NONE)
  REPLAY_CAMERADOWN = 317, //	PAGE DOWN	,	(NONE)
  REPLAY_SAVE = 318, //	F5	,	START
  REPLAY_TOGGLETIME = 319, //	C	,	(NONE)
  REPLAY_TOGGLETIPS = 320, //	V	,	(NONE)
  REPLAY_PREVIEW = 321, //	SPACEBAR	,	(NONE)
  REPLAY_TOGGLE_TIMELINE = 322, //	ESC	,	(NONE)
  REPLAY_TIMELINE_PICKUP_CLIP = 323, //	X	,	(NONE)
  REPLAY_TIMELINE_DUPLICATE_CLIP = 324, //	C	,	(NONE)
  REPLAY_TIMELINE_PLACE_CLIP = 325, //	V	,	(NONE)
  REPLAY_CTRL = 326, //	LEFT CTRL	,	(NONE)
  REPLAY_TIMELINE_SAVE = 327, //	F5	,	(NONE)
  REPLAY_PREVIEW_AUDIO = 328, //	SPACEBAR	,	RT
  VEH_DRIVE_LOOK = 329, //	LEFT MOUSE BUTTON	,	(NONE)
  VEH_DRIVE_LOOK2 = 330, //	RIGHT MOUSE BUTTON	,	(NONE)
  VEH_FLY_ATTACK2 = 331, //	RIGHT MOUSE BUTTON	,	(NONE)
  RADIO_WHEEL_UD = 332, //	MOUSE DOWN	,	RIGHT STICK
  RADIO_WHEEL_LR = 333, //	MOUSE RIGHT	,	RIGHT STICK
  VEH_SLOWMO_UD = 334, //	SCROLLWHEEL DOWN	,	LEFT STICK
  VEH_SLOWMO_UP_ONLY = 335, //	SCROLLWHEEL UP	,	LEFT STICK
  VEH_SLOWMO_DOWN_ONLY = 336, //	SCROLLWHEEL DOWN	,	LEFT STICK
  VEH_HYDRAULICS_CONTROL_TOGGLE = 337, //	X	,	A
  VEH_HYDRAULICS_CONTROL_LEFT = 338, //	A	,	LEFT STICK
  VEH_HYDRAULICS_CONTROL_RIGHT = 339, //	D	,	LEFT STICK
  VEH_HYDRAULICS_CONTROL_UP = 340, //	LEFT SHIFT	,	LEFT STICK
  VEH_HYDRAULICS_CONTROL_DOWN = 341, //	LEFT CTRL	,	LEFT STICK
  VEH_HYDRAULICS_CONTROL_UD = 342, //	D	,	LEFT STICK
  VEH_HYDRAULICS_CONTROL_LR = 343, //	LEFT CTRL	,	LEFT STICK
  SWITCH_VISOR = 344, //	F11	,	DPAD RIGHT
  VEH_MELEE_HOLD = 345, //	X	,	A
  VEH_MELEE_LEFT = 346, //	LEFT MOUSE BUTTON	,	LB
  VEH_MELEE_RIGHT = 347, //	RIGHT MOUSE BUTTON	,	RB
  MAP_POI = 348, //	SCROLLWHEEL BUTTON (PRESS)	,	Y
  REPLAY_SNAPMATIC_PHOTO = 349, //	TAB	,	X
  VEH_CAR_JUMP = 350, //	E	,	L3
  VEH_ROCKET_BOOST = 351, //	E	,	L3
  VEH_FLY_BOOST = 352, //	LEFT SHIFT	,	L3
  VEH_PARACHUTE = 353, //	SPACEBAR	,	A
  VEH_BIKE_WINGS = 354, //	X	,	A
  VEH_FLY_BOMB_BAY = 355, //	E	,	DPAD RIGHT
  VEH_FLY_COUNTER = 356, //	E	,	DPAD RIGHT
  VEH_TRANSFORM = 357, //	X	,	A
  QUAD_LOCO_REVERSE = 358, //		,	RB
  RESPAWN_FASTER = 359, //		,
  HUDMARKER_SELECT = 360, //		,
}

type KeysEnum = 'ESC' | 'F1' | 'F2' | 'F3' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' |
  '~' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '-' | '=' | 'BACKSPACE' |
  'TAB' | 'Q' | 'W' | 'E' | 'R' | 'T' | 'Y' | 'U' | 'P' | '[' | ']' | 'ENTER' |
  'CAPS' | 'A' | 'S' | 'D' | 'F' | 'G' | 'H' | 'K' | 'L' |
  'LEFTSHIFT' | 'Z' | 'X' | 'C' | 'V' | 'B' | 'N' | 'M' | ',' | '.' |
  'LEFTCTRL' | 'LEFTALT' | 'SPACE' | 'RIGHTCTRL' |
  'HOME' | 'PAGEUP' | 'PAGEDOWN' | 'DELETE' |
  'LEFT' | 'RIGHT' | 'TOP' | 'DOWN' |
  'NENTER' | 'N4' | 'N5' | 'N6' | 'N+' | 'N-' | 'N7' | 'N8' | 'N9';

export const Keys: Record<KeysEnum, Controls> = {
  ESC: Controls.REPLAY_TOGGLE_TIMELINE,
  F1: Controls.REPLAY_START_STOP_RECORDING,
  F2: Controls.REPLAY_START_STOP_RECORDING_SECONDARY,
  F3: Controls.SAVE_REPLAY_CLIP,
  F5: Controls.SELECT_CHARACTER_MICHAEL,
  F6: Controls.SELECT_CHARACTER_FRANKLIN,
  F7: Controls.SELECT_CHARACTER_TREVOR,
  F8: Controls.SELECT_CHARACTER_MULTIPLAYER,
  F9: Controls.DROP_WEAPON,
  F10: Controls.DROP_AMMO,
  F11: Controls.SWITCH_VISOR,
  '~': Controls.ENTER_CHEAT_CODE,
  '1': Controls.SELECT_WEAPON_UNARMED,
  '2': Controls.SELECT_WEAPON_MELEE,
  '3': Controls.SELECT_WEAPON_SHOTGUN,
  '4': Controls.SELECT_WEAPON_HEAVY,
  '5': Controls.SELECT_WEAPON_SPECIAL,
  '6': Controls.SELECT_WEAPON_HANDGUN,
  '7': Controls.SELECT_WEAPON_SMG,
  '8': Controls.SELECT_WEAPON_AUTO_RIFLE,
  '9': Controls.SELECT_WEAPON_SNIPER,
  '-': Controls.VEH_PREV_RADIO_TRACK,
  '=': Controls.VEH_NEXT_RADIO_TRACK,
  BACKSPACE: Controls.CELLPHONE_CANCEL,
  TAB: Controls.SELECT_WEAPON,
  Q: Controls.COVER,
  W: Controls.MOVE_UP_ONLY,
  E: Controls.PICKUP,
  R: Controls.RELOAD,
  T: Controls.MP_TEXT_CHAT_ALL,
  Y: Controls.MP_TEXT_CHAT_TEAM,
  U: Controls.REPLAY_SCREENSHOT,
  P: Controls.FRONTEND_PAUSE,
  '[': Controls.SNIPER_ZOOM,
  ']': Controls.SNIPER_ZOOM_IN_ONLY,
  ENTER: Controls.SKIP_CUTSCENE,
  CAPS: Controls.VEH_PUSHBIKE_SPRINT,
  A: Controls.MOVE_LEFT_ONLY,
  S: Controls.SCRIPTED_FLY_UD,
  D: Controls.SCRIPTED_FLY_LR,
  F: Controls.ENTER,
  G: Controls.DETONATE,
  H: Controls.VEH_HEADLIGHT,
  K: Controls.REPLAY_SHOWHOTKEY,
  L: Controls.CELLPHONE_CAMERA_FOCUS_LOCK,
  LEFTSHIFT: Controls.SPRINT,
  Z: Controls.MULTIPLAYER_INFO,
  X: Controls.VEH_DUCK,
  C: Controls.LOOK_BEHIND,
  V: Controls.NEXT_CAMERA,
  B: Controls.SPECIAL_ABILITY_SECONDARY,
  N: Controls.PUSH_TO_TALK,
  M: Controls.INTERACTION_MENU,
  ',': Controls.VEH_PREV_RADIO,
  '.': Controls.VEH_NEXT_RADIO,
  LEFTCTRL: Controls.DUCK,
  LEFTALT: Controls.CHARACTER_WHEEL,
  SPACE: Controls.JUMP,
  RIGHTCTRL: Controls.VEH_ATTACK2,
  HOME: Controls.FRONTEND_SOCIAL_CLUB_SECONDARY,
  PAGEUP: Controls.SCRIPTED_FLY_ZUP,
  PAGEDOWN: Controls.SCRIPTED_FLY_ZDOWN,
  DELETE: Controls.CELLPHONE_OPTION,
  LEFT: Controls.CELLPHONE_LEFT,
  RIGHT: Controls.CELLPHONE_RIGHT,
  TOP: Controls.PHONE,
  DOWN: Controls.CELLPHONE_DOWN,
  NENTER: Controls.FRONTEND_ACCEPT,
  N4: Controls.VEH_FLY_ROLL_LEFT_ONLY,
  N5: Controls.VEH_MOVE_UD,
  N6: Controls.VEH_FLY_ROLL_LR,
  'N+': Controls.VEH_CINEMATIC_UP_ONLY,
  'N-': Controls.VEH_CINEMATIC_DOWN_ONLY,
  N7: Controls.VEH_FLY_SELECT_TARGET_LEFT,
  N8: Controls.VEH_MOVE_UP_ONLY,
  N9: Controls.VEH_FLY_SELECT_TARGET_RIGHT,
};