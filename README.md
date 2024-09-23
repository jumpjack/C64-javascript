# C64-javascript
Not an emulator, just a collection of links to C64 reasouecea and JSON objects related to Commodore 64, for use in your own JS program.

## Memory map

![image](https://github.com/user-attachments/assets/851b7bc0-f4fa-4812-bb3f-0fe1573948d5)


- $0000-$00FF, 0-255: Zero page
- $0100-$01FF, 256-511: Processor stack
- $0200-$02FF, 512-767: ?
- $0300-$03FF, 768-1023: ?
- $0400-$07FF, 1024-2047: Text screen conents (RAM)
- $0800-$9FFF, 2048-40959: BASIC program (RAM)
- **$A000-$BFFF**, 40960-49151: BASIC interpreter (ROM) or free space (RAM)
- $C000-$CFFF, 49152-53247: Upper RAM area (free for user use)
- **$D000-$DFFF**, 53248-57343: Characters definition (ROM) or I/O devices (RAM)
- $E000-$FFFF, 57344-65535: KERNAL (ROM)
  

- [Memory map in a text file](https://github.com/mist64/c64ref/blob/main/src/c64mem/c64mem_jb.txt)

- Memory segments are allocated to ROM or RAM depending on memory location $0001 contents:
   - Bits #0-#2: Configuration for memory areas $A000-$BFFF, $D000-$DFFF and $E000-$FFFF. Values:
      - %x00: RAM visible in all three areas.
      - %x01: RAM visible at $A000-$BFFF and $E000-$FFFF.
      - %x10: RAM visible at $A000-$BFFF; KERNAL ROM visible at $E000-$FFFF.
      - %x11: BASIC ROM visible at $A000-$BFFF; KERNAL ROM visible at $E000-$FFFF.
      - %0xx: Character ROM visible at $D000-$DFFF. (Except for the value %000, see above.)
      - %1xx: I/O area visible at $D000-$DFFF. (Except for the value %100, see above.)
   - Bit #3: Datasette output signal level.
   - Bit #4: Datasette button status; 0 = One or more of PLAY, RECORD, F.FWD or REW pressed; 1 = No button is pressed.
   - Bit #5: Datasette motor control; 0 = On; 1 = Off.
 
  Alternative description:

* Bit 0: LORAM signal.  Selects ROM or RAM at 40960 ($A000).  1=BASIC, 0=RAM
* Bit 1: HIRAM signal.  Selects ROM or RAM at 57344 ($E000).  1=Kernal, 0=RAM
* Bit 2: CHAREN signal.  Selects character ROM or I/O devices.  1=I/O, 0=ROM
* Bit 3: Cassette Data Output line.
* Bit 4: Cassette Switch Sense.  Reads 0 if a button is pressed, 1 if not.
* Bit 5: Cassette Motor Switch Control.  A 1 turns the motor on, 0 turns it off.
* Bits 6-7: Not connected--no function presently defined.

## Kernal

### The 39 kernal functions described on various sites:

- Simple [Kernal functions list](https://sta.c64.org/cbm64krnfunc.html), with short description and affected registers (static HTML table)
- [Very detailed description of kernal functions](https://www.pagetable.com/c64ref/kernal/) from 11 different sources (interacrtive HTML table)
- Sort of [tutorial](https://c64os.com/post/c64kernalrom) on how C64 kernel is structured and works (Web page + html tables)

### Kernal disassembled byte by byte, with comments
- [Single page](http://www.cbmitapages.it/c64/c64rom.htm) with hyperlinks
- [Multiple pages](https://skoolkid.github.io/sk6502/c64rom/index.html)
- [Kernal functions described in machine-readable format](https://github.com/mist64/c64ref/tree/main/src/kernal) (multiple text files from different sources)
- 


### Binary files of the kernal

- https://www.zimmers.net/anonftp/pub/cbm/firmware/computers/c64/

