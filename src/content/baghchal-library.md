---
layout: post
title: 'baghchal v1.0.1 Release'
author: [Soyuj Jung Basnet]
tags: ['board game','engineering','python']
image: img/baghchal.jpg
date: '2019-06-27T11:46:37.121Z'
draft: false
excerpt: baghchal is a pure Python Bagh Chal library that supports game import, move generation, move validation, and board image rendering. It also comes with a simple engine based on the minimax algorithm and alpha-beta pruning.
---

<a href="https://travis-ci.org/basnetsoyuj/baghchal"><img alt="Build Status" src="https://travis-ci.org/basnetsoyuj/baghchal.svg?branch=master"/></a>

### Installation
baghchal runs on python 3 . You can now install it directly from PyPI via pip:

```shell
pip install baghchal
```
System requirements are <a href="https://pypi.org/project/numpy" target="_blank">numpy</a> and <a href="https://pypi.org/project/Pillow/" target="_blank">Pillow</a>.

---
### Source Code
The source code can be found in the <a href="https://github.com/basnetsoyuj/baghchal" target="_blank">GitHub baghchal Repository</a>.

### Documentation
The baghchal package has 3 sub-modules:

- **baghchal.env** (Consists of all classes and functions defining the game environment):
    - **baghchal.env.Board** (Board class representing Bagh Chal board)
    - **baghchal.env.Bagh** (Bagh class representing Bagh Player)
    - **baghchal.env.Goat** (Goat class representing Goat Player)
- **baghchal.lookup_table** (Lookup values for baghchal.env)
- **baghchal.engine** (Class for the Bagh Chal engines)
    - **baghchal.engine.Engine** (Simple engine based on minimax algorithm and alpha-beta pruning)

Since a proper documentation is not available as of yet, you have to directly read the source code to figure out the various functions and classes.

### Contribution
If you want to contribute to the library and modify various aspects of the code to make it better, your help is very welcome. You can directly open a pull request at: <a href="https://github.com/basnetsoyuj/baghchal/pulls" target="_blank">baghchal Pull Requests</a>

### License
baghchal is licensed under <a href="https://github.com/basnetsoyuj/baghchal/blob/master/LICENSE.txt" target="_blank">MIT License</a>.