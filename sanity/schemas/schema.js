import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import cider from './cider';
import flavors from './flavors';
import person from './person';
import storeSettings from './storeSettings';
import size from './size';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([cider, flavors, size, person, storeSettings]),
});
