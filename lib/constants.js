/**
 * Raspberry Pi v3 physical pin numbers
 */
const PINS = {
  RST: 11,
  DC: 22,
  BUSY: 18,
  CS: 24
};

const EPD_MODES = {
  FULL: Symbol('full'),
  PARTIAL: Symbol('partial')
};

const SPIDEV_MAXPATH = 4096;
const SPIDEV_MAXSPEED = 2000000;

const COMMANDS = {
  DUMMY_LINE: [0x3a, 0x1a],
  GATE_TIME: [0x3b, 0x08],
  RAM_DATA_ENTRY_MODE: [0x11, 0x01],
  SOFT_START: [0x0c, 0xd7, 0xd6, 0x9d],
  VCOM_VOL: [0x2c, 0xa8]
};

const EPD_TWO_COLORS_DEFAULT = {
  GDO_CONTROL: [0x01, (200 - 1) % 256, Math.floor((200 - 1) / 256), 0x00],
  LUT_DEFAULT_FULL: [
    0x32,
    0x02,
    0x02,
    0x01,
    0x11,
    0x12,
    0x12,
    0x22,
    0x22,
    0x66,
    0x69,
    0x69,
    0x59,
    0x58,
    0x99,
    0x99,
    0x88,
    0x00,
    0x00,
    0x00,
    0x00,
    0xf8,
    0xb4,
    0x13,
    0x51,
    0x35,
    0x51,
    0x51,
    0x19,
    0x01,
    0x00
  ],
  LUT_DEFAULT_PART: [
    0x32,
    0x10,
    0x18,
    0x18,
    0x08,
    0x18,
    0x18,
    0x08,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x13,
    0x14,
    0x44,
    0x12,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00
  ]
};

const EPD1X54 = Object.assign({}, EPD_TWO_COLORS_DEFAULT,
  {
    xSize: 200,
    ySize: 200
  }
);

const EPD2X9 = Object.assign({}, EPD_TWO_COLORS_DEFAULT,
  {
    xSize: 296,
    ySize: 128
  }
);

module.exports = {
  PINS: PINS,
  COMMANDS: COMMANDS,
  EPD_MODES: EPD_MODES,
  EPD1X54: EPD1X54,
  EPD2X9: EPD2X9,
  SPIDEV_MAXPATH: SPIDEV_MAXPATH,
  SPIDEV_MAXSPEED: SPIDEV_MAXSPEED
};
