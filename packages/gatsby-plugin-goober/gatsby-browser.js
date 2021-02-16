import React from 'react';
import { setup } from 'goober';
import { prefix } from 'goober/prefixer';

setup(React.createElement, prefix);
