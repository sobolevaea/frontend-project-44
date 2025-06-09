#! /usr/bin/env node

import { description, runProgression } from '../games/progression.js'
import runGame from '../src/index.js'

runGame(description, runProgression)