# Key Emulator

This key emulator is used for MicroBit presentation controller. It's written
in NodeJS for now and requires the installation of NodeJS.

## Requirements

* NodeJS (https://nodejs.org)

## Installation

First, check out this code using Git (https://git-scm.com/). Then execute
the following:

```
$> npm install
```

## Running

After the installation steps, execute the following:

```
$> node main.js
```

This will list all serial ports available. Select the right one and
execute the same as above with an additional parameter:

```
$> node main.js /name/of/port
```
