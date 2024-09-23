# C64-javascript
Not an emulator, just a collection of links to C64 reasouecea and JSON objects related to Commodore 64, for use in your own JS program.

## Memory map

![image](https://github.com/user-attachments/assets/851b7bc0-f4fa-4812-bb3f-0fe1573948d5)

| Indirizzo (hex) | Indirizzo (dec) | Dimensione (byte) | Descrizione |
|-----------------|-----------------|-------------------|-------------|
| $E000-$FFFF     | 57344-65535     | 8192              | KERNAL (ROM) |
| $D000-$DFFF     | 53248-57343     | 4096              | Characters definition (ROM) or I/O devices (RAM) |
| $C000-$CFFF     | 49152-53247     | 4096              | Upper RAM area (free for user use) |
| $A000-$BFFF     | 40960-49151     | 8192              | BASIC interpreter (ROM) or free space (RAM) |
| $0800-$9FFF     | 2048-40959      | 38912             | BASIC program (RAM) |
| $0400-$07FF     | 1024-2047       | 1024              | Text screen conents (RAM) |
| $0200-$03FF     | 512-767         | 256               | Kernal variables |
| $0100-$01FF     | 256-511         | 256               | Processor stack |
| $0000-$00FF     | 0-255           | 256               | Zero page |


- Memory segments are allocated to ROM or RAM depending on memory location $0001 contents:
   - Bits #0-#2: Configuration for memory areas $A000-$BFFF, $D000-$DFFF and $E000-$FFFF. Values:
      - %x00: RAM visible in all three areas.
      - %x01: RAM visible at $A000-$BFFF and $E000-$FFFF.
      - %x10: RAM visible at $A000-$BFFF; KERNAL ROM visible at $E000-$FFFF.
      - %x11: BASIC ROM visible at $A000-$BFFF; KERNAL ROM visible at $E000-$FFFF.
      - %0xx: Character ROM visible at $D000-$DFFF. (Except for the value %000, see above.)
      - %1xx: I/O area visible at $D000-$DFFF. (Except for the value %100, see above.)

 
  Alternative description:

* Bit 0: LORAM signal.  Selects ROM or RAM at $A000  (40960).  1=BASIC, 0=RAM
* Bit 1: HIRAM signal.  Selects ROM or RAM at $E000  (57344).  1=Kernal, 0=RAM
* Bit 2: CHAREN signal.  Selects character ROM or I/O devices.  1=I/O, 0=ROM


| Mode |LORAM  (bit 0) |HIRAM (bit 1) | CHAREN  (bit 2) |   $A000-$BFFF | C000-$CFFF | $D000-$DFFF | $E000-$FFFF |
|------|------|------|--------|---------------|------------|-------------|-------------|
| 31   |1     |1     | 1      |   BASIC ROM   | RAM        | I/O         | KERNAL ROM  |
| 30   |0     |1     | 1      |   RAM         | RAM        | I/O         | KERNAL ROM  |
| 29   |1     |0     | 1      |   BASIC ROM   | RAM        | I/O         | RAM         |
| 28   |0     |0     | 1      |   RAM         | RAM        | I/O         | RAM         |
| 27   |1     |1     | 0      |   BASIC ROM   | RAM        | CHAR ROM    | KERNAL ROM  |
| 26   |0     |1     | 0      |   RAM         | RAM        | CHAR ROM    | KERNAL ROM  |
| 25   |1     |0     | 0      |   BASIC ROM   | RAM        | CHAR ROM    | RAM         |
| 24   |0     |0     | 0      |   RAM         | RAM        | CHAR ROM    | RAM         |



![image](https://github.com/user-attachments/assets/41479431-196b-4358-8824-e354158c6f20)

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


## BASIC special character for "PRINT

https://www.c64-wiki.com/wiki/control_character

