import React from 'react';

function Stats(props) {
  let stats = props.data;

  return (
    <div>
      <h1>Stats section</h1>
      <p>life           : {stats.life}</p>
      <p>damage         : {stats.damage}</p>
      <p>toughness      : {stats.toughness}</p>
      <p>healing        : {stats.healing}</p>
      <p>attack speed   : {stats.attackSpeed}</p>
      <p>armor          : {stats.armor}</p>
      <p>dex            : {stats.dexterity}</p>
      <p>vit            : {stats.vitality}</p>
      <p>int            : {stats.intelligence}</p>
      <p>phys resist    : {stats.physicalResist}</p>
      <p>fire resist    : {stats.fireResist}</p>
      <p>cold resist    : {stats.coldResist}</p>
      <p>light resist   : {stats.lightningResist}</p>
      <p>poison resist  : {stats.poisonResist}</p>
      <p>arcane resist  : {stats.arcaneResist}</p>
      <p>crit damage    : {stats.critDamage}</p>
      <p>block chance   : {stats.blockChance}</p>
      <p>block min      : {stats.blockAmountMin}</p>
      <p>block max      : {stats.blockAmountMax}</p>
      <p>crit %         : {stats.critChance}</p>
      <p>dmg reduct     : {stats.damageReduction}</p>
      <p>lifesteal      : {stats.lifeSteal}</p>
      <p>lifePerKill    : {stats.lifePerKill}</p>
      <p>goldFind       : {stats.goldFind}</p>
      <p>mf             : {stats.magicFind}</p>
      <p>thorns         : {stats.thorns}</p>
      <p>lifeOnHit      : {stats.lifeOnHit}</p>
      <p>1st Resource   : {stats.primaryResource}</p>
      <p>2nd resource   : {stats.secondaryResource}</p>
    </div>
  );
}

export default Stats;