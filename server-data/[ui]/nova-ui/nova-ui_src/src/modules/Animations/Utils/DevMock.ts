const Animations = {
  facials: {
    hotkey: 'M',
    label: 'Настроение',
    items: {
      facial_normal: {
        hotkey: 'A',
        label: 'Обычное',
        type: 'facial',
        data: { anim: 'mood_normal_1', incar: 1 },
      },
      facial_happy: {
        hotkey: 'B',
        label: 'Счастливое',
        type: 'facial',
        data: { anim: 'mood_happy_1', incar: 1 },
      },
      facial_angry: {
        hotkey: 'C',
        label: 'Злое',
        type: 'facial',
        data: { anim: 'mood_angry_1', incar: 1 },
      },
      facial_sleeping: {
        hotkey: 'D',
        label: 'Сонное',
        type: 'facial',
        data: { anim: 'mood_sleeping_1', incar: 1 },
      },
      facial_knockout: {
        hotkey: 'E',
        label: 'Бесознательное',
        type: 'facial',
        data: { anim: 'mood_knockout_1', incar: 1 },
      },
      facial_aiming: {
        hotkey: 'F',
        label: 'Подозрительное',
        type: 'facial',
        data: { anim: 'mood_aiming_1', incar: 1 },
      },
      facial_injured: {
        hotkey: 'G',
        label: 'Удивленное',
        type: 'facial',
        data: { anim: 'mood_injured_1', incar: 1 },
      },
      facial_stressed: {
        hotkey: 'H',
        label: 'Шокированное',
        type: 'facial',
        data: { anim: 'mood_stressed_1', incar: 1 },
      },
      facial_smug: {
        hotkey: 'I',
        label: 'Самодовольное',
        type: 'facial',
        data: { anim: 'mood_smug_1', incar: 1 },
      },
      facial_sulk: {
        hotkey: 'J',
        label: 'Грустное',
        type: 'facial',
        data: { anim: 'mood_sulk_1', incar: 1 },
      },
      facial_drunk: {
        hotkey: 'K',
        label: 'Пьяное',
        type: 'facial',
        data: { anim: 'mood_drunk_1', incar: 1 },
      },
    },
    icon: 'true',
  },
  actions: {
    hotkey: 'A',
    label: 'Действия',
    items: {
      do_dj: {
        hotkey: '7',
        label: 'Диджей',
        type: 'anim',
        data: { lib: 'anim@mp_player_intcelebrationmale@dj', anim: 'dj', flag: 9 },
      },
      do_airguitar: {
        hotkey: '8',
        label: 'Воображаемая гитара',
        type: 'anim',
        data: { lib: 'anim@mp_player_intcelebrationmale@air_guitar', anim: 'air_guitar' },
      },
      do_shagging: {
        hotkey: '9',
        label: 'Сотрясать воздух',
        type: 'anim',
        data: { lib: 'anim@mp_player_intcelebrationfemale@air_shagging', anim: 'air_shagging' },
      },
      do_rock: {
        hotkey: 'A',
        label: "Rock'n'roll",
        type: 'anim',
        data: {
          lib: 'mp_player_int_upperrock',
          anim: 'mp_player_int_rock',
          upper: true,
          control: true,
          flag: 9,
          incar: 1,
        },
      },
      do_holdup: {
        hotkey: 'B',
        label: 'Схватить',
        type: 'anim',
        data: {
          lib: 'anim@am_hold_up@male',
          anim: 'shoplift_high',
          upper: false,
          control: true,
          flag: 9,
        },
      },
      do_knock: {
        hotkey: 'C',
        label: 'Стучать',
        type: 'anim',
        data: {
          lib: 'amb@code_human_in_car_mp_actions@dance@bodhi@ds@base',
          anim: 'idle_a_fp',
          flag: 9,
          incar: 1,
        },
      },
      do_reachdown: {
        hotkey: 'D',
        label: 'Копаться в',
        type: 'scenario',
        data: { anim: 'PROP_HUMAN_BUM_BIN' },
      },
      do_reachup: {
        hotkey: 'E',
        label: 'Достать сверху',
        type: 'anim',
        data: {
          lib: 'mph_hum_fin_ext-0',
          anim: 's_m_m_highsec_01_dual-0',
          upper: true,
          flag: 9,
          incar: 1,
        },
      },
      do_forsake: {
        hotkey: 'F',
        label: 'Я пожалуй пойду',
        type: 'anim',
        data: { lib: 'abigail_mcs_2-5', anim: 'csb_abigail_dual-5' },
      },
      do_busted: {
        hotkey: 'G',
        label: 'Руки за голову',
        type: 'anim',
        data: { lib: 'random@arrests@busted', anim: 'idle_c', repeat_anim: true },
      },
      do_throwup: {
        hotkey: 'H',
        label: 'Вырвать',
        type: 'anim',
        data: { lib: 'anim@amb@clubhouse@respawn@female@', anim: 'respawn_d' },
      },
      do_selfie: {
        hotkey: 'I',
        label: 'Селфи',
        type: 'scenario',
        data: { anim: 'world_human_tourist_mobile', upper: true, control: true },
      },
      do_inspectcar: {
        hotkey: 'J',
        label: 'Осмотреть Ж',
        type: 'anim',
        data: { lib: 'oddjobs@taxi@gyn@', anim: 'idle_b_ped', flag: 9 },
      },
      do_roam: {
        hotkey: 'K',
        label: 'Ходить задумчиво',
        type: 'anim',
        data: { lib: 'martin_1_int-5', anim: 'cs_patricia_dual-5', flag: 9 },
      },
      do_shakeoff: {
        hotkey: 'L',
        label: 'Отряхиваться',
        type: 'anim',
        data: { lib: 'move_m@_idles@shake_off', anim: 'shakeoff_1', flag: 9 },
      },
      do_papers: {
        hotkey: 'M',
        label: 'Перебирать бумаги',
        type: 'anim',
        data: { lib: 'iaa_int-14', anim: 'cs_lestercrest_2_dual-14', flag: 9 },
      },
      do_bbq: { hotkey: 'N', label: 'Барбекю', type: 'scenario', data: { anim: 'PROP_HUMAN_BBQ' } },
      do_bow: { hotkey: 'O', label: 'Поклон', type: 'dpemotes', data: { anim: 'bow', incar: 1 } },
      do_bow2: {
        hotkey: 'P',
        label: 'Поклон 2',
        type: 'dpemotes',
        data: { anim: 'bow2', incar: 1 },
      },
      do_bring: {
        hotkey: 'Q',
        label: 'Расставить руки',
        type: 'dpemotes',
        data: { anim: 'bringiton', incar: 1 },
      },
      do_celeb: {
        hotkey: 'R',
        label: 'Праздновать',
        type: 'dpemotes',
        data: { anim: 'celebrate', incar: 1 },
      },
      do_hands: {
        hotkey: 'S',
        label: 'Пожать плечами',
        type: 'dpemotes',
        data: { anim: 'shrug2', incar: 1 },
      },
      f_beer: {
        hotkey: '1',
        label: 'Пить пиво',
        type: 'scenario',
        data: { anim: 'WORLD_HUMAN_DRINKING' },
      },
      f_beerparty: {
        hotkey: '2',
        label: 'Тусоваться с пивом',
        type: 'scenario',
        data: { anim: 'WORLD_HUMAN_PARTYING' },
      },
      do_makeitrain: {
        hotkey: '3',
        label: 'Бросаться деньгами',
        type: 'dpemotes',
        data: { anim: 'makeitrain', incar: 1 },
      },
    },
    icon: 'true',
  },
  greetings: {
    hotkey: 'G',
    label: 'Приветствия',
    items: {
      greet_hello1: { hotkey: 'A', label: 'Помахать', type: 'dpemotes', data: { anim: 'wave8' } },
      greet_hello2: {
        hotkey: 'B',
        label: 'Пожать руку',
        type: 'anim',
        data: {
          lib: 'mp_ped_interaction',
          anim: 'handshake_guy_a',
          upper: true,
          control: true,
          incar: 1,
        },
      },
      greet_hug1: {
        hotkey: 'C',
        label: 'Приобнять',
        type: 'anim',
        data: { lib: 'mp_ped_interaction', anim: 'hugs_guy_a', upper: false, control: true },
      },
      greet_hug2: {
        hotkey: 'D',
        label: 'Обнять',
        type: 'anim',
        data: {
          lib: 'anim@amb@nightclub@djs@switch@bmad_djset_switchover@',
          anim: 'bmad_out_soldix_in_a_bg_male1',
        },
      },
      greet_kiss: {
        hotkey: 'E',
        label: 'Поцеловать',
        type: 'anim',
        data: { lib: 'mp_ped_interaction', anim: 'kisses_guy_a', flag: 9 },
      },
      greet_bro1: {
        hotkey: 'F',
        label: 'Братство',
        type: 'anim',
        data: {
          lib: 'anim@random@shop_clothes@watches',
          anim: 'base',
          upper: true,
          control: true,
          flag: 9,
          incar: 1,
        },
      },
      greet_salute: {
        hotkey: 'G',
        label: 'Отдать честь',
        type: 'anim',
        data: {
          lib: 'mp_player_int_uppersalute',
          anim: 'mp_player_int_salute',
          stop_last_frame: true,
          upper: true,
          control: true,
          incar: 1,
        },
      },
      greet_bro2: {
        hotkey: 'H',
        label: 'Бро',
        type: 'anim',
        data: { lib: 'anim@mp_player_intcelebrationfemale@bro_love', anim: 'bro_love' },
      },
      greet_blowkiss1: {
        hotkey: 'I',
        label: 'Воздушный поцелуй',
        type: 'anim',
        data: { lib: 'anim@mp_player_intcelebrationfemale@blow_kiss', anim: 'blow_kiss' },
      },
      greet_blowkiss2: {
        hotkey: 'J',
        label: 'Воздушный поцелуй Ж',
        type: 'anim',
        data: { lib: 'mini@hookers_sp', anim: 'idle_a' },
      },
      greet_west: { hotkey: 'K', label: 'Свистнуть', type: 'dpemotes', data: { anim: 'whistle2' } },
    },
    icon: 'true',
  },
};

export default Animations;