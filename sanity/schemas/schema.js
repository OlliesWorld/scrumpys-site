import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import cider from './cider';
import flavors from './flavors';
import person from './person';
import storeSettings from './storeSettings';
import size from './size';
import other from './other';
import beerKind from './beerKind';
import event from './event';
import cocktail from './cocktail';
import foodtype from './foodtype';
import menu from './menu';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    storeSettings,
    cider,
    other,
    cocktail,
    menu,
    person,
    event,
    size,
    beerKind,
    flavors,
    foodtype,
  ]),
});
