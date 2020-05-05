import assert from 'assert';
import * as goober from 'goober';

assert(typeof goober.css === 'function', 'import { css } from "goober"');
assert(typeof goober.styled === 'function', 'import { styled } from "goober"');
assert(typeof goober.setup === 'function', 'import { setup } from "goober"');
assert(typeof goober.glob === 'function', 'import { glob } from "goober"');

console.log('✅ Dist Tests Passed');
