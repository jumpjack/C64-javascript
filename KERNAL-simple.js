KERNAL =
		[
		    {
		        "Address": "E000",
		        "Description": "start of the kernal ROM"
		    },
		    {
		        "Address": "E043",
		        "Description": "^2 then series evaluation"
		    },
		    {
		        "Address": "E059",
		        "Description": "do series evaluation"
		    },
		    {
		        "Address": "E08D",
		        "Description": "RND values"
		    },
		    {
		        "Address": "E097",
		        "Description": "perform RND()"
		    },
		    {
		        "Address": "E0F6",
		        "Description": "pack FAC1 into (XY)"
		    },
		    {
		        "Address": "E0F9",
		        "Description": "handle BASIC I/O error"
		    },
		    {
		        "Address": "E10C",
		        "Description": "output character to channel with error check"
		    },
		    {
		        "Address": "E112",
		        "Description": "input character from channel with error check"
		    },
		    {
		        "Address": "E118",
		        "Description": "open channel for output with error check"
		    },
		    {
		        "Address": "E11E",
		        "Description": "open channel for input with error check"
		    },
		    {
		        "Address": "E124",
		        "Description": "get character from input device with error check"
		    },
		    {
		        "Address": "E12A",
		        "Description": "perform SYS"
		    },
		    {
		        "Address": "E156",
		        "Description": "perform SAVE"
		    },
		    {
		        "Address": "E165",
		        "Description": "perform VERIFY"
		    },
		    {
		        "Address": "E168",
		        "Description": "perform LOAD"
		    },
		    {
		        "Address": "E195",
		        "Description": "do READY return to BASIC"
		    },
		    {
		        "Address": "E1BE",
		        "Description": "perform OPEN"
		    },
		    {
		        "Address": "E1C7",
		        "Description": "perform CLOSE"
		    },
		    {
		        "Address": "E1D4",
		        "Description": "get parameters for LOAD/SAVE"
		    },
		    {
		        "Address": "E200",
		        "Description": "scan and get byte, else do syntax error then warm start"
		    },
		    {
		        "Address": "E206",
		        "Description": "exit function if [EOT] or \":\""
		    },
		    {
		        "Address": "E20E",
		        "Description": "scan for \",valid byte\", else do syntax error then warm start"
		    },
		    {
		        "Address": "E211",
		        "Description": "scan for valid byte, not [EOL] or \":\", else do syntax error then warm start"
		    },
		    {
		        "Address": "E219",
		        "Description": "get parameters for OPEN/CLOSE"
		    },
		    {
		        "Address": "E257",
		        "Description": "set filename"
		    },
		    {
		        "Address": "E264",
		        "Description": "perform COS()"
		    },
		    {
		        "Address": "E26B",
		        "Description": "perform SIN()"
		    },
		    {
		        "Address": "E2B4",
		        "Description": "perform TAN()"
		    },
		    {
		        "Address": "E2DC",
		        "Description": "save comparison flag and do series evaluation"
		    },
		    {
		        "Address": "E2E0",
		        "Description": "constants and series for SIN/COS(n)"
		    },
		    {
		        "Address": "E30E",
		        "Description": "perform ATN()"
		    },
		    {
		        "Address": "E33E",
		        "Description": "series for ATN(n)"
		    },
		    {
		        "Address": "E37B",
		        "Description": "BASIC warm start entry point"
		    },
		    {
		        "Address": "E394",
		        "Description": "BASIC cold start entry point"
		    },
		    {
		        "Address": "E3A2",
		        "Description": "character get subroutine for zero page"
		    },
		    {
		        "Address": "E3BA",
		        "Description": "spare bytes, not referenced"
		    },
		    {
		        "Address": "E3BF",
		        "Description": "initialise BASIC RAM locations"
		    },
		    {
		        "Address": "E422",
		        "Description": "print the start up message and initialise the memory pointers"
		    },
		    {
		        "Address": "E447",
		        "Description": "BASIC vectors"
		    },
		    {
		        "Address": "E453",
		        "Description": "initialise the BASIC vectors"
		    },
		    {
		        "Address": "E45F",
		        "Description": "unused"
		    },
		    {
		        "Address": "E460",
		        "Description": "BASIC startup messages"
		    },
		    {
		        "Address": "E4AC",
		        "Description": "unused"
		    },
		    {
		        "Address": "E4AD",
		        "Description": "open channel for output"
		    },
		    {
		        "Address": "E4B7",
		        "Description": "unused bytes"
		    },
		    {
		        "Address": "E4D3",
		        "Description": "flag the RS232 start bit and set the parity"
		    },
		    {
		        "Address": "E4DA",
		        "Description": "save the current colour to the colour RAM"
		    },
		    {
		        "Address": "E4E0",
		        "Description": "wait ~8.5 seconds for any key from the STOP key column"
		    },
		    {
		        "Address": "E4EC",
		        "Description": "baud rate tables for PAL C64"
		    },
		    {
		        "Address": "E500",
		        "Description": "return the base address of the I/O devices"
		    },
		    {
		        "Address": "E505",
		        "Description": "return the x,y organization of the screen"
		    },
		    {
		        "Address": "E50A",
		        "Description": "read/set the x,y cursor position"
		    },
		    {
		        "Address": "E518",
		        "Description": "initialise the screen and keyboard"
		    },
		    {
		        "Address": "E544",
		        "Description": "clear the screen"
		    },
		    {
		        "Address": "E566",
		        "Description": "home the cursor"
		    },
		    {
		        "Address": "E56C",
		        "Description": "set screen pointers for cursor row, column"
		    },
		    {
		        "Address": "E591",
		        "Description": "find and set the pointers for the start of logical line"
		    },
		    {
		        "Address": "E599",
		        "Description": "orphan bytes ??"
		    },
		    {
		        "Address": "E5A0",
		        "Description": "initialise the vic chip"
		    },
		    {
		        "Address": "E5B4",
		        "Description": "input from the keyboard buffer"
		    },
		    {
		        "Address": "E5CA",
		        "Description": "write character and wait for key"
		    },
		    {
		        "Address": "E5CD",
		        "Description": "wait for a key from the keyboard"
		    },
		    {
		        "Address": "E632",
		        "Description": "input from screen or keyboard"
		    },
		    {
		        "Address": "E684",
		        "Description": "if open quote toggle cursor quote flag"
		    },
		    {
		        "Address": "E691",
		        "Description": "insert uppercase/graphic character"
		    },
		    {
		        "Address": "E6B6",
		        "Description": "advance the cursor"
		    },
		    {
		        "Address": "E701",
		        "Description": "back onto the previous line if possible"
		    },
		    {
		        "Address": "E716",
		        "Description": "output a character to the screen"
		    },
		    {
		        "Address": "E87C",
		        "Description": "do newline"
		    },
		    {
		        "Address": "E891",
		        "Description": "output [CR]"
		    },
		    {
		        "Address": "E8A1",
		        "Description": "test for line decrement"
		    },
		    {
		        "Address": "E8B3",
		        "Description": "test for line increment"
		    },
		    {
		        "Address": "E8CB",
		        "Description": "set the colour code"
		    },
		    {
		        "Address": "E8DA",
		        "Description": "ASCII colour code table"
		    },
		    {
		        "Address": "E8EA",
		        "Description": "scroll the screen"
		    },
		    {
		        "Address": "E965",
		        "Description": "open up a space on the screen"
		    },
		    {
		        "Address": "E9C8",
		        "Description": "shift screen line up/down"
		    },
		    {
		        "Address": "E9E0",
		        "Description": "calculate pointers to screen lines colour RAM"
		    },
		    {
		        "Address": "E9F0",
		        "Description": "fetch a screen address"
		    },
		    {
		        "Address": "E9FF",
		        "Description": "clear screen line X"
		    },
		    {
		        "Address": "EA12",
		        "Description": "orphan byte"
		    },
		    {
		        "Address": "EA13",
		        "Description": "print character A and colour X"
		    },
		    {
		        "Address": "EA1C",
		        "Description": "save the character and colour to the screen @ the cursor"
		    },
		    {
		        "Address": "EA24",
		        "Description": "calculate the pointer to colour RAM"
		    },
		    {
		        "Address": "EA31",
		        "Description": "IRQ vector"
		    },
		    {
		        "Address": "EA87",
		        "Description": "scan the keyboard"
		    },
		    {
		        "Address": "EB48",
		        "Description": "evaluate the SHIFT/CTRL/C= keys"
		    },
		    {
		        "Address": "EB79",
		        "Description": "table addresses"
		    },
		    {
		        "Address": "EB81",
		        "Description": "standard keyboard table"
		    },
		    {
		        "Address": "EBC2",
		        "Description": "shifted keyboard table"
		    },
		    {
		        "Address": "EC03",
		        "Description": "CBM key keyboard table"
		    },
		    {
		        "Address": "EC44",
		        "Description": "check for special character codes"
		    },
		    {
		        "Address": "EC78",
		        "Description": "control keyboard table"
		    },
		    {
		        "Address": "ECB9",
		        "Description": "vic ii chip initialisation values"
		    },
		    {
		        "Address": "ECE7",
		        "Description": "keyboard buffer for auto load/run"
		    },
		    {
		        "Address": "ECF0",
		        "Description": "low bytes of screen line addresses"
		    },
		    {
		        "Address": "ED09",
		        "Description": "command serial bus device to TALK"
		    },
		    {
		        "Address": "ED0C",
		        "Description": "command devices on the serial bus to LISTEN"
		    },
		    {
		        "Address": "ED11",
		        "Description": "send a control character"
		    },
		    {
		        "Address": "ED21",
		        "Description": "defer a command"
		    },
		    {
		        "Address": "ED40",
		        "Description": "Tx byte on serial bus"
		    },
		    {
		        "Address": "EDB9",
		        "Description": "send secondary address after LISTEN"
		    },
		    {
		        "Address": "EDBE",
		        "Description": "set serial ATN high"
		    },
		    {
		        "Address": "EDC7",
		        "Description": "send secondary address after TALK"
		    },
		    {
		        "Address": "EDCC",
		        "Description": "wait for the serial bus end after send"
		    },
		    {
		        "Address": "EDDD",
		        "Description": "output a byte to the serial bus"
		    },
		    {
		        "Address": "EDEF",
		        "Description": "command serial bus to UNTALK"
		    },
		    {
		        "Address": "EDFE",
		        "Description": "command serial bus to UNLISTEN"
		    },
		    {
		        "Address": "EE13",
		        "Description": "input a byte from the serial bus"
		    },
		    {
		        "Address": "EE85",
		        "Description": "set the serial clock out high"
		    },
		    {
		        "Address": "EE8E",
		        "Description": "set the serial clock out low"
		    },
		    {
		        "Address": "EE97",
		        "Description": "set the serial data out high"
		    },
		    {
		        "Address": "EEA0",
		        "Description": "set the serial data out low"
		    },
		    {
		        "Address": "EEA9",
		        "Description": "get the serial data status in Cb"
		    },
		    {
		        "Address": "EEB3",
		        "Description": "1ms delay"
		    },
		    {
		        "Address": "EEBB",
		        "Description": "RS232 Tx NMI routine"
		    },
		    {
		        "Address": "EED7",
		        "Description": "do RS232 parity bit"
		    },
		    {
		        "Address": "EF06",
		        "Description": "setup next RS232 Tx byte"
		    },
		    {
		        "Address": "EF2E",
		        "Description": "set DSR signal not present"
		    },
		    {
		        "Address": "EF31",
		        "Description": "set CTS signal not present"
		    },
		    {
		        "Address": "EF39",
		        "Description": "disable timer A interrupt"
		    },
		    {
		        "Address": "EF3B",
		        "Description": "set VIA 2 ICR from A"
		    },
		    {
		        "Address": "EF4A",
		        "Description": "compute bit count"
		    },
		    {
		        "Address": "EF59",
		        "Description": "RS232 Rx NMI"
		    },
		    {
		        "Address": "EF7E",
		        "Description": "setup to receive an RS232 bit"
		    },
		    {
		        "Address": "EF90",
		        "Description": "no RS232 start bit received"
		    },
		    {
		        "Address": "EF97",
		        "Description": "received a whole byte, add it to the buffer"
		    },
		    {
		        "Address": "EFDB",
		        "Description": "Routine at EFDB"
		    },
		    {
		        "Address": "EFE1",
		        "Description": "open RS232 channel for output"
		    },
		    {
		        "Address": "F014",
		        "Description": "send byte to the RS232 buffer"
		    },
		    {
		        "Address": "F028",
		        "Description": "setup for RS232 transmit"
		    },
		    {
		        "Address": "F04D",
		        "Description": "input from RS232 buffer"
		    },
		    {
		        "Address": "F086",
		        "Description": "get byte from RS232 buffer"
		    },
		    {
		        "Address": "F0A4",
		        "Description": "check RS232 bus idle"
		    },
		    {
		        "Address": "F0BD",
		        "Description": "kernel I/O messages"
		    },
		    {
		        "Address": "F12B",
		        "Description": "display control I/O message if in direct mode"
		    },
		    {
		        "Address": "F13E",
		        "Description": "get character from the input device"
		    },
		    {
		        "Address": "F157",
		        "Description": "input a character from channel"
		    },
		    {
		        "Address": "F199",
		        "Description": "get byte from tape"
		    },
		    {
		        "Address": "F1AD",
		        "Description": "input device was serial bus"
		    },
		    {
		        "Address": "F1B8",
		        "Description": "input device was RS232 device"
		    },
		    {
		        "Address": "F1CA",
		        "Description": "output character to channel"
		    },
		    {
		        "Address": "F1DD",
		        "Description": "output the character to the cassette or RS232 device"
		    },
		    {
		        "Address": "F20E",
		        "Description": "open channel for input"
		    },
		    {
		        "Address": "F250",
		        "Description": "open channel for output"
		    },
		    {
		        "Address": "F291",
		        "Description": "close a specified logical file"
		    },
		    {
		        "Address": "F2EE",
		        "Description": "serial bus device close"
		    },
		    {
		        "Address": "F2F2",
		        "Description": "close file index X"
		    },
		    {
		        "Address": "F30F",
		        "Description": "find a file"
		    },
		    {
		        "Address": "F314",
		        "Description": "find file A"
		    },
		    {
		        "Address": "F31F",
		        "Description": "set file details from table,X"
		    },
		    {
		        "Address": "F32F",
		        "Description": "close all channels and files"
		    },
		    {
		        "Address": "F333",
		        "Description": "close input and output channels"
		    },
		    {
		        "Address": "F34A",
		        "Description": "open a logical file"
		    },
		    {
		        "Address": "F3D5",
		        "Description": "send secondary address and filename"
		    },
		    {
		        "Address": "F409",
		        "Description": "open RS232 device"
		    },
		    {
		        "Address": "F47D",
		        "Description": "set the top of memory to F0xx"
		    },
		    {
		        "Address": "F483",
		        "Description": "initialise RS232 output"
		    },
		    {
		        "Address": "F49E",
		        "Description": "load RAM from a device"
		    },
		    {
		        "Address": "F4A5",
		        "Description": "load"
		    },
		    {
		        "Address": "F533",
		        "Description": "??"
		    },
		    {
		        "Address": "F5AF",
		        "Description": "print \"Searching...\""
		    },
		    {
		        "Address": "F5C1",
		        "Description": "print file name"
		    },
		    {
		        "Address": "F5D2",
		        "Description": "display \"LOADING\" or \"VERIFYING\""
		    },
		    {
		        "Address": "F5DD",
		        "Description": "save RAM to device"
		    },
		    {
		        "Address": "F5ED",
		        "Description": "save"
		    },
		    {
		        "Address": "F68F",
		        "Description": "print saving &lt;file name&gt;"
		    },
		    {
		        "Address": "F69B",
		        "Description": "increment the real time clock"
		    },
		    {
		        "Address": "F6DD",
		        "Description": "read the real time clock"
		    },
		    {
		        "Address": "F6E4",
		        "Description": "set the real time clock"
		    },
		    {
		        "Address": "F6ED",
		        "Description": "scan the stop key"
		    },
		    {
		        "Address": "F6FB",
		        "Description": "file error messages"
		    },
		    {
		        "Address": "F72C",
		        "Description": "find the tape header, exit with header in buffer"
		    },
		    {
		        "Address": "F76A",
		        "Description": "write the tape header"
		    },
		    {
		        "Address": "F7D0",
		        "Description": "get the tape buffer start pointer"
		    },
		    {
		        "Address": "F7D7",
		        "Description": "set the tape buffer start and end pointers"
		    },
		    {
		        "Address": "F7EA",
		        "Description": "find specific tape header"
		    },
		    {
		        "Address": "F80D",
		        "Description": "bump tape pointer"
		    },
		    {
		        "Address": "F817",
		        "Description": "wait for PLAY"
		    },
		    {
		        "Address": "F82E",
		        "Description": "return cassette sense in Zb"
		    },
		    {
		        "Address": "F838",
		        "Description": "wait for PLAY/RECORD"
		    },
		    {
		        "Address": "F841",
		        "Description": "initiate a tape read"
		    },
		    {
		        "Address": "F864",
		        "Description": "initiate a tape write"
		    },
		    {
		        "Address": "F875",
		        "Description": "tape read/write"
		    },
		    {
		        "Address": "F8D0",
		        "Description": "scan stop key and flag abort if pressed"
		    },
		    {
		        "Address": "F8DC",
		        "Description": "clear saved IRQ address"
		    },
		    {
		        "Address": "F8E2",
		        "Description": "set timing"
		    },
		    {
		        "Address": "F92C",
		        "Description": "read tape bits, IRQ routine"
		    },
		    {
		        "Address": "FA60",
		        "Description": "store character"
		    },
		    {
		        "Address": "FB8E",
		        "Description": "copy I/O start address to buffer address"
		    },
		    {
		        "Address": "FB97",
		        "Description": "new tape byte setup"
		    },
		    {
		        "Address": "FBA6",
		        "Description": "send lsb from tape write byte to tape"
		    },
		    {
		        "Address": "FBC8",
		        "Description": "flag block done and exit interrupt"
		    },
		    {
		        "Address": "FBCD",
		        "Description": "tape write IRQ routine"
		    },
		    {
		        "Address": "FC6A",
		        "Description": "write tape leader IRQ routine"
		    },
		    {
		        "Address": "FC93",
		        "Description": "restore everything for STOP"
		    },
		    {
		        "Address": "FCB8",
		        "Description": "reset vector"
		    },
		    {
		        "Address": "FCBD",
		        "Description": "set tape vector"
		    },
		    {
		        "Address": "FCCA",
		        "Description": "stop the cassette motor"
		    },
		    {
		        "Address": "FCD1",
		        "Description": "check read/write pointer"
		    },
		    {
		        "Address": "FCDB",
		        "Description": "increment read/write pointer"
		    },
		    {
		        "Address": "FCE2",
		        "Description": "RESET, hardware reset starts here"
		    },
		    {
		        "Address": "FD02",
		        "Description": "scan for autostart ROM at $8000"
		    },
		    {
		        "Address": "FD10",
		        "Description": "autostart ROM signature"
		    },
		    {
		        "Address": "FD15",
		        "Description": "restore default I/O vectors"
		    },
		    {
		        "Address": "FD1A",
		        "Description": "set/read vectored I/O from (XY)"
		    },
		    {
		        "Address": "FD30",
		        "Description": "kernal vectors"
		    },
		    {
		        "Address": "FD50",
		        "Description": "test RAM and find RAM end"
		    },
		    {
		        "Address": "FD9B",
		        "Description": "tape IRQ vectors"
		    },
		    {
		        "Address": "FDA3",
		        "Description": "initialise SID, CIA and IRQ"
		    },
		    {
		        "Address": "FDF9",
		        "Description": "set filename"
		    },
		    {
		        "Address": "FE00",
		        "Description": "set logical, first and second addresses"
		    },
		    {
		        "Address": "FE07",
		        "Description": "read I/O status word"
		    },
		    {
		        "Address": "FE18",
		        "Description": "control kernal messages"
		    },
		    {
		        "Address": "FE1C",
		        "Description": "OR into the serial status byte"
		    },
		    {
		        "Address": "FE21",
		        "Description": "set timeout on serial bus"
		    },
		    {
		        "Address": "FE25",
		        "Description": "read/set the top of memory"
		    },
		    {
		        "Address": "FE27",
		        "Description": "read the top of memory"
		    },
		    {
		        "Address": "FE2D",
		        "Description": "set the top of memory"
		    },
		    {
		        "Address": "FE34",
		        "Description": "read/set the bottom of memory"
		    },
		    {
		        "Address": "FE43",
		        "Description": "NMI vector"
		    },
		    {
		        "Address": "FE47",
		        "Description": "NMI handler"
		    },
		    {
		        "Address": "FE66",
		        "Description": "user function default vector"
		    },
		    {
		        "Address": "FE72",
		        "Description": "RS232 NMI routine"
		    },
		    {
		        "Address": "FEC2",
		        "Description": "baud rate tables for NTSC C64"
		    },
		    {
		        "Address": "FED6",
		        "Description": "??"
		    },
		    {
		        "Address": "FF07",
		        "Description": "??"
		    },
		    {
		        "Address": "FF2E",
		        "Description": "??"
		    },
		    {
		        "Address": "FF41",
		        "Description": "unused bytes"
		    },
		    {
		        "Address": "FF43",
		        "Description": "save the status and do the IRQ routine"
		    },
		    {
		        "Address": "FF48",
		        "Description": "IRQ vector"
		    },
		    {
		        "Address": "FF5B",
		        "Description": "initialise VIC and screen editor"
		    },
		    {
		        "Address": "FF6E",
		        "Description": "??"
		    },
		    {
		        "Address": "FF80",
		        "Description": "unused"
		    },
		    {
		        "Address": "FF81",
		        "Description": "initialise VIC and screen editor"
		    },
		    {
		        "Address": "FF84",
		        "Description": "initialise SID, CIA and IRQ, unused"
		    },
		    {
		        "Address": "FF87",
		        "Description": "RAM test and find RAM end"
		    },
		    {
		        "Address": "FF8A",
		        "Description": "restore default I/O vectors"
		    },
		    {
		        "Address": "FF8D",
		        "Description": "read/set vectored I/O"
		    },
		    {
		        "Address": "FF90",
		        "Description": "control kernal messages"
		    },
		    {
		        "Address": "FF93",
		        "Description": "send secondary address after LISTEN"
		    },
		    {
		        "Address": "FF96",
		        "Description": "send secondary address after TALK"
		    },
		    {
		        "Address": "FF99",
		        "Description": "read/set the top of memory"
		    },
		    {
		        "Address": "FF9C",
		        "Description": "read/set the bottom of memory"
		    },
		    {
		        "Address": "FF9F",
		        "Description": "scan the keyboard"
		    },
		    {
		        "Address": "FFA2",
		        "Description": "set timeout on serial bus"
		    },
		    {
		        "Address": "FFA5",
		        "Description": "input byte from serial bus"
		    },
		    {
		        "Address": "FFA8",
		        "Description": "output a byte to serial bus"
		    },
		    {
		        "Address": "FFAB",
		        "Description": "command serial bus to UNTALK"
		    },
		    {
		        "Address": "FFAE",
		        "Description": "command serial bus to UNLISTEN"
		    },
		    {
		        "Address": "FFB1",
		        "Description": "command devices on the serial bus to LISTEN"
		    },
		    {
		        "Address": "FFB4",
		        "Description": "command serial bus device to TALK"
		    },
		    {
		        "Address": "FFB7",
		        "Description": "read I/O status word"
		    },
		    {
		        "Address": "FFBA",
		        "Description": "set logical, first and second addresses"
		    },
		    {
		        "Address": "FFBD",
		        "Description": "set the filename"
		    },
		    {
		        "Address": "FFC0",
		        "Description": "open a logical file"
		    },
		    {
		        "Address": "FFC3",
		        "Description": "close a specified logical file"
		    },
		    {
		        "Address": "FFC6",
		        "Description": "open channel for input"
		    },
		    {
		        "Address": "FFC9",
		        "Description": "open channel for output"
		    },
		    {
		        "Address": "FFCC",
		        "Description": "close input and output channels"
		    },
		    {
		        "Address": "FFCF",
		        "Description": "input character from channel"
		    },
		    {
		        "Address": "FFD2",
		        "Description": "output character to channel"
		    },
		    {
		        "Address": "FFD5",
		        "Description": "load RAM from a device"
		    },
		    {
		        "Address": "FFD8",
		        "Description": "save RAM to a device"
		    },
		    {
		        "Address": "FFDB",
		        "Description": "set the real time clock"
		    },
		    {
		        "Address": "FFDE",
		        "Description": "read the real time clock"
		    },
		    {
		        "Address": "FFE1",
		        "Description": "scan the stop key"
		    },
		    {
		        "Address": "FFE4",
		        "Description": "get character from input device"
		    },
		    {
		        "Address": "FFE7",
		        "Description": "close all channels and files"
		    },
		    {
		        "Address": "FFEA",
		        "Description": "increment real time clock"
		    },
		    {
		        "Address": "FFED",
		        "Description": "return X,Y organization of screen"
		    },
		    {
		        "Address": "FFF0",
		        "Description": "read/set X,Y cursor position"
		    },
		    {
		        "Address": "FFF3",
		        "Description": "return the base address of the I/O devices"
		    },
		    {
		        "Address": "FFF6",
		        "Description": "RRBY"
		    },
		    {
		        "Address": "FFFA",
		        "Description": "hardware vectors"
		    }
		];
