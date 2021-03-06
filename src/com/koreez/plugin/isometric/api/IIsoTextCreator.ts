// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IsoText } from '../impl/IsoText';

export interface IIsoTextCreator extends Phaser.GameObjects.GameObjectCreator {
  isoText: (config: any, addToScene?: boolean) => IsoText;
}
