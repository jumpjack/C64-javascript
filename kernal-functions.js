kernal = [
    {
        "address": "$FF81",
        "function": "SCINIT",
        "description": "Initialize VIC; restore default input/output to keyboard/screen; clear screen; set PAL/NTSC switch and interrupt timer.",
        "input": "–",
        "output": "–",
        "used_registers": ["A", "X", "Y"],
        "real_address": "$FF5B"
    },
    {
        "address": "$FF84",
        "function": "IOINIT",
        "description": "Initialize CIA's, SID volume; setup memory configuration; set and start interrupt timer.",
        "input": "–",
        "output": "–",
        "used_registers": ["A", "X"],
        "real_address": "$FDA3"
    },
    {
        "address": "$FF87",
        "function": "RAMTAS",
        "description": "Clear memory addresses $0002-$0101 and $0200-$03FF; run memory test and set start and end address of BASIC work area accordingly; set screen memory to $0400 and datasette buffer to $033C.",
        "input": "–",
        "output": "–",
        "used_registers": ["A", "X", "Y"],
        "real_address": "$FD50"
    },
    {
        "address": "$FF8A",
        "function": "RESTOR",
        "description": "Fill vector table at memory addresses $0314-$0333 with default values.",
        "input": "–",
        "output": "–",
        "used_registers": "–",
        "real_address": "$FD15"
    },
    {
        "address": "$FF8D",
        "function": "VECTOR",
        "description": "Copy vector table at memory addresses $0314-$0333 from or into user table.",
        "input": "Carry: 0 = Copy user table into vector table, 1 = Copy vector table into user table; X/Y = Pointer to user table.",
        "output": "–",
        "used_registers": ["A", "Y"],
        "real_address": "$FD1A"
    },
    {
        "address": "$FF90",
        "function": "SETMSG",
        "description": "Set system error display switch at memory address $009D.",
        "input": "A = Switch value.",
        "output": "–",
        "used_registers": "–",
        "real_address": "$FE18"
    },
    {
        "address": "$FF93",
        "function": "LSTNSA",
        "description": "Send LISTEN secondary address to serial bus. (Must call LISTEN beforehands.)",
        "input": "A = Secondary address.",
        "output": "–",
        "used_registers": ["A"],
        "real_address": "$EDB9"
    },
    {
        "address": "$FF96",
        "function": "TALKSA",
        "description": "Send TALK secondary address to serial bus. (Must call TALK beforehands.)",
        "input": "A = Secondary address.",
        "output": "–",
        "used_registers": ["A"],
        "real_address": "$EDC7"
    },
    {
        "address": "$FF99",
        "function": "MEMBOT",
        "description": "Save or restore start address of BASIC work area.",
        "input": "Carry: 0 = Restore from input, 1 = Save to output; X/Y = Address (if Carry = 0).",
        "output": "X/Y = Address (if Carry = 1).",
        "used_registers": ["X", "Y"],
        "real_address": "$FE25"
    },
    {
        "address": "$FF9C",
        "function": "MEMTOP",
        "description": "Save or restore end address of BASIC work area.",
        "input": "Carry: 0 = Restore from input, 1 = Save to output; X/Y = Address (if Carry = 0).",
        "output": "X/Y = Address (if Carry = 1).",
        "used_registers": ["X", "Y"],
        "real_address": "$FE34"
    },
    {
        "address": "$FF9F",
        "function": "SCNKEY",
        "description": "Query keyboard; put current matrix code into memory address $00CB, current status of shift keys into memory address $028D and PETSCII code into keyboard buffer.",
        "input": "–",
        "output": "–",
        "used_registers": ["A", "X", "Y"],
        "real_address": "$EA87"
    },
    {
        "address": "$FFA2",
        "function": "SETTMO",
        "description": "Unknown. (Set serial bus timeout.)",
        "input": "A = Timeout value.",
        "output": "–",
        "used_registers": "–",
        "real_address": "$FE21"
    },
    {
        "address": "$FFA5",
        "function": "IECIN",
        "description": "Read byte from serial bus. (Must call TALK and TALKSA beforehands.)",
        "input": "–",
        "output": "A = Byte read.",
        "used_registers": ["A"],
        "real_address": "$EE13"
    },
    {
        "address": "$FFA8",
        "function": "IECOUT",
        "description": "Write byte to serial bus. (Must call LISTEN and LSTNSA beforehands.)",
        "input": "A = Byte to write.",
        "output": "–",
        "used_registers": "–",
        "real_address": "$EDDD"
    },
    {
        "address": "$FFAB",
        "function": "UNTALK",
        "description": "Send UNTALK command to serial bus.",
        "input": "–",
        "output": "–",
        "used_registers": ["A"],
        "real_address": "$EDEF"
    },
    {
        "address": "$FFAE",
        "function": "UNLSTN",
        "description": "Send UNLISTEN command to serial bus.",
        "input": "–",
        "output": "–",
        "used_registers": ["A"],
        "real_address": "$EDFE"
    },
    {
        "address": "$FFB1",
        "function": "LISTEN",
        "description": "Send LISTEN command to serial bus.",
        "input": "A = Device number.",
        "output": "–",
        "used_registers": ["A"],
        "real_address": "$ED0C"
    },
    {
        "address": "$FFB4",
        "function": "TALK",
        "description": "Send TALK command to serial bus.",
        "input": "A = Device number.",
        "output": "–",
        "used_registers": ["A"],
        "real_address": "$ED09"
    },
    {
        "address": "$FFB7",
        "function": "READST",
        "description": "Fetch status of current input/output device, value of ST variable. (For RS232, status is cleared.)",
        "input": "–",
        "output": "A = Device status.",
        "used_registers": ["A"],
        "real_address": "$FE07"
    },
    {
        "address": "$FFBA",
        "function": "SETLFS",
        "description": "Set file parameters.",
        "input": "A = Logical number; X = Device number; Y = Secondary address.",
        "output": "–",
        "used_registers": "–",
        "real_address": "$FE00"
    },
    {
        "address": "$FFBD",
        "function": "SETNAM",
        "description": "Set file name parameters.",
        "input": "A = File name length; X/Y = Pointer to file name.",
        "output": "–",
        "used_registers": "–",
        "real_address": "$FDF9"
    },
    {
        "address": "$FFC0",
        "function": "OPEN",
        "description": "Open file. (Must call SETLFS and SETNAM beforehands.)",
        "input": "–",
        "output": "–",
        "used_registers": ["A", "X", "Y"],
        "real_address": "($031A), $F34A"
    },
    {
        "address": "$FFC3",
        "function": "CLOSE",
        "description": "Close file.",
        "input": "A = Logical number.",
        "output": "–",
        "used_registers": ["A", "X", "Y"],
        "real_address": "($031C), $F291"
    },
    {
        "address": "$FFC6",
        "function": "CHKIN",
        "description": "Define file as default input. (Must call OPEN beforehands.)",
        "input": "X = Logical number.",
        "output": "–",
        "used_registers": ["A", "X"],
        "real_address": "($031E), $F20E"
    },
    {
        "address": "$FFC9",
        "function": "CHKOUT",
        "description": "Define file as default output. (Must call OPEN beforehands.)",
        "input": "X = Logical number.",
        "output": "–",
        "used_registers": ["A", "X"],
        "real_address": "($0320), $F250"
    },
    {
        "address": "$FFCC",
        "function": "CLRCHN",
        "description": "Close default input/output files (for serial bus, send UNTALK and/or UNLISTEN); restore default input/output to keyboard/screen.",
        "input": "–",
        "output": "–",
        "used_registers": ["A", "X"],
        "real_address": "($0322), $F333"
    },
    {
        "address": "$FFCF",
        "function": "CHRIN",
        "description": "Read byte from default input (for keyboard, read a line from the screen). (If not keyboard, must call OPEN and CHKIN beforehands.)",
        "input": "–",
        "output": "A = Byte read.",
        "used_registers": ["A", "Y"],
        "real_address": "($0324), $F157"
    },
    {
        "address": "$FFD2",
        "function": "CHROUT",
        "description": "Write byte to default output. (If not screen, must call OPEN and CHKOUT beforehands.)",
        "input": "A = Byte to write.",
        "output": "–",
        "used_registers": "–",
        "real_address": "($0326), $F1CA"
    },
    {
        "address": "$FFD5",
        "function": "LOAD",
        "description": "Load or verify file. (Must call SETLFS and SETNAM beforehands.)",
        "input": "A: 0 = Load, 1-255 = Verify; X/Y = Load address (if secondary address = 0).",
        "output": "Carry: 0 = No errors, 1 = Error; A = KERNAL error code (if Carry = 1); X/Y = Address of last byte loaded/verified (if Carry = 0).",
        "used_registers": ["A", "X", "Y"],
        "real_address": "$F49E"
    },
    {
        "address": "$FFD8",
        "function": "SAVE",
        "description": "Save file. (Must call SETLFS and SETNAM beforehands.)",
        "input": "A = Address of zero page register holding start address of memory area to save; X/Y = End address of memory area plus 1.",
        "output": "Carry: 0 = No errors, 1 = Error; A = KERNAL error code (if Carry = 1).",
        "used_registers": ["A", "X", "Y"],
        "real_address": "$F5DD"
    },
    {
        "address": "$FFDB",
        "function": "SETTIM",
        "description": "Set Time of Day, at memory address $00A0-$00A2.",
        "input": "A/X/Y = New TOD value.",
        "output": "–",
        "used_registers": "–",
        "real_address": "$F6E4"
    },
    {
        "address": "$FFDE",
        "function": "RDTIM",
        "description": "Read Time of Day, at memory address $00A0-$00A2.",
        "input": "–",
        "output": "A/X/Y = Current TOD value.",
        "used_registers": ["A", "X", "Y"],
        "real_address": "$F6DD"
    },
    {
        "address": "$FFE1",
        "function": "STOP",
        "description": "Query Stop key indicator, at memory address $0091; if pressed, call CLRCHN and clear keyboard buffer.",
        "input": "–",
        "output": "Zero: 0 = Not pressed, 1 = Pressed; Carry: 1 = Pressed.",
        "used_registers": ["A", "X"],
        "real_address": "($0328), $F6ED"
    },
    {
        "address": "$FFE4",
        "function": "GETIN",
        "description": "Read byte from default input. (If not keyboard, must call OPEN and CHKIN beforehands.)",
        "input": "–",
        "output": "A = Byte read.",
        "used_registers": ["A", "X", "Y"],
        "real_address": "($032A), $F13E"
    },
    {
        "address": "$FFE7",
        "function": "CLALL",
        "description": "Clear file table; call CLRCHN.",
        "input": "–",
        "output": "–",
        "used_registers": ["A", "X"],
        "real_address": "($032C), $F32F"
    },
    {
        "address": "$FFEA",
        "function": "UDTIM",
        "description": "Update Time of Day, at memory address $00A0-$00A2, and Stop key indicator, at memory address $0091.",
        "input": "–",
        "output": "–",
        "used_registers": ["A", "X"],
        "real_address": "$F69B"
    },
    {
        "address": "$FFED",
        "function": "SCREEN",
        "description": "Fetch number of screen rows and columns.",
        "input": "–",
        "output": "X = Number of columns (40); Y = Number of rows (25).",
        "used_registers": ["X", "Y"],
        "real_address": "$E505"
    },
    {
        "address": "$FFF0",
        "function": "PLOT",
        "description": "Save or restore cursor position.",
        "input": "Carry: 0 = Restore from input, 1 = Save to output; X = Cursor column (if Carry = 0); Y = Cursor row (if Carry = 0).",
        "output": "X = Cursor column (if Carry = 1); Y = Cursor row (if Carry = 1).",
        "used_registers": ["X", "Y"],
        "real_address": "$E50A"
    },
    {
        "address": "$FFF3",
        "function": "IOBASE",
        "description": "Fetch CIA #1 base address.",
        "input": "–",
        "output": "X/Y = CIA #1 base address ($DC00).",
        "used_registers": ["X", "Y"],
        "real_address": "$E500"
    }
]
