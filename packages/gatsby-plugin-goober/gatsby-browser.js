import React from 'react';
import { setup } from 'goober';
import { prefix } from 'goober-autoprefixer';

setup(React.createElement, prefix);
