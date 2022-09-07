/* eslint-disable class-methods-use-this */
import { clamp } from '@nova/engine-lib/shared';
import { PlayerStatus, PlayerStatusInfo, Visibility } from '../../PlayerStatus';

export class Agility extends PlayerStatus {
  get info(): PlayerStatusInfo {
    return {
      name: 'agility',
      label: 'Ловкость',
      description: 'Определяет, насколько быстро вы бежите и плывёте, прыжки меньше расходуют выносливость',
      visible: Visibility.SKILL,
    };
  }

  tick(value: number, values: Record<string, number>): number {
    const baseValue = 30;
    let newValue = value ?? baseValue;

    if (newValue <= baseValue) return newValue;

    // при 100% раскачке скилл полностью улетает за 60 минут
    // при 50% раскачке 3.9 часа
    // меньше 30% не снижается
    const minutesToLose = 500 - ((newValue - baseValue) / (100.0 - baseValue)) * 440.0;

    newValue -= 100.0 / (minutesToLose * 60);

    return clamp(newValue, 0, 100);
  }
}
