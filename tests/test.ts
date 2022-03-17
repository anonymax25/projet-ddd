import test from 'ava';

const fn = () => 'bar';

test('foo', (t) => {
  t.is(fn(), 'bar');
});
