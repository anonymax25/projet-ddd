import test from 'ava';

import { FakeDons } from './FakeDons';

const fn = () => 'bar';

test('foo', (t) => {
  const repo = new FakeDons();
  console.log(repo.findById('1'));

  t.is(fn(), 'bar');
});
